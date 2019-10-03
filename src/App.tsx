import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { Chart, FiltersComponent, Instructions } from './components'
import { ALL } from './const'
import { DataItem, FiltersKeys } from './types'
import { aggregateData, fetchData, filterData, getFiltersKeys } from './utils'

type AppState = {
  data: DataItem[],
  filtersKeys: FiltersKeys,
  showLoading: boolean,
}

const DATA_PATH = process.env.PUBLIC_URL + '/data/data.csv'

const mainStyle = {
  background: 'WhiteSmoke',
  flexGrow: 1,
  height: '100%',
  padding: 15,
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    data: [],
    filtersKeys: {
      campaigns: [],
      datasources: [],
    },
    showLoading: true,
  })
  const [activeFilters, setActiveFilters] = useState<FiltersKeys>({
    campaigns: [ALL],
    datasources: [ALL],
  })

  useEffect(() => {
    fetchData(onFetchComplete, DATA_PATH)
    // eslint-disable-next-line
  }, [])

  const onFetchComplete = ((results: DataItem[]) => {
    setState({
      data: results,
      filtersKeys: getFiltersKeys(results),
      showLoading: false,
    })
  })

  const chartData = activeFilters.campaigns[0] !== ALL || activeFilters.datasources[0] !== ALL
    ? aggregateData(filterData(state.data, activeFilters))
    : aggregateData(state.data)

  return (
    <div style={mainStyle}>
      <Grid container={true} spacing={3}>
        <Instructions />
        <FiltersComponent filtersKeys={state.filtersKeys} setFilters={setActiveFilters} />
        <Chart data={chartData} filters={activeFilters} />
      </Grid>
    </div>
  )
}

export default App

import { Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { FiltersComponent, Instructions } from './components'
import { AggregatedDataItem, DataItem, FiltersKeys } from './types'
import { aggregateData, fetchData, getFiltersKeys } from './utils'

type AppState = {
  chartData: AggregatedDataItem[],
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
    chartData: [],
    filtersKeys: {
      campaigns: [],
      datasources: [],
    },
    showLoading: true,
  })
  const [activeFilters, setActiveFilters] = useState<FiltersKeys>({
    campaigns: [],
    datasources: [],
  })

  useEffect(() => {
    fetchData(onFetchComplete, DATA_PATH)
    // eslint-disable-next-line
  }, [])

  const onFetchComplete = ((results: DataItem[]) => {
    setState({
      chartData: aggregateData(results),
      filtersKeys: getFiltersKeys(results),
      showLoading: false,
    })
  })

  return (
    <div style={mainStyle}>
      <Grid container={true} spacing={3}>
        <Instructions />
        <FiltersComponent filtersKeys={state.filtersKeys} setFilters={setActiveFilters} />
        <Grid item={true} xs={12} md={9}>
          <Paper>Charts</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App

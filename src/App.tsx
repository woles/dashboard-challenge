import { Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { Instructions } from './components'
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
  // tslint:disable-next-line: no-object-literal-type-assertion
  const [state, setState] = useState({
    chartData: [],
    filtersKeys: {
      campaigns: [],
      dataSources: [],
    },
    showLoading: true,
  } as AppState)

  const onFetchComplete = ((results: DataItem[]) => {
    setState({
      chartData: aggregateData(results),
      filtersKeys: getFiltersKeys(results),
      showLoading: false,
    })
  })

  useEffect(() => {
    fetchData(onFetchComplete, DATA_PATH)
  }, [])

  return (
    <div style={mainStyle}>
      <Grid container={true} spacing={3}>
        <Instructions />
        <Grid item={true} xs={12} md={3}>
          <Paper>Filters</Paper>
        </Grid>
        <Grid item={true} xs={12} md={9}>
          <Paper>Charts</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App

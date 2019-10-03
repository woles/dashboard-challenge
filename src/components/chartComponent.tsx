import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Chart } from 'react-google-charts'

import { AggregatedDataItem, Filters, FiltersKeys } from '../types'

type ChartProps = {
  data: AggregatedDataItem[],
  filters: FiltersKeys,
}

const useStyles = makeStyles({
  h3: {
    padding: 20,
  },
  paper: {
    height: 600,
    textAlign: 'center',
  },
})

export const ChartComponent: React.FC<ChartProps> = ({ data, filters: { campaigns, datasources } }) => {

  const classes = useStyles()

  const hadingDatasurces = `${Filters.Datasource}: ${datasources.join(' & ')}`
  const hadingCampaign = `${Filters.Campaign}: ${campaigns.join(' & ')}`

  const options = {
    axes: {
      y: {
        Clicks: { label: 'Clicks' },
        Impressions: { label: 'Impressions' },
      },
    },
    explorer: {
      axis: 'horizontal',
      keepInBounds: true,
      maxZoomIn: 4.0,
    },
    height: 500,
    series: {
      0: { axis: 'Clicks' },
      1: { axis: 'Impressions' },
    },
  }

  return (
    <Grid item={true} md={9} xs={12}>
      <Paper className={classes.paper}>
        <h3 className={classes.h3}>{`${hadingDatasurces}; ${hadingCampaign}`}</h3>
        <Chart
          width={'100%'}
          chartType="Line"
          loader={<div>Loading Chart</div>}
          data={[[{ type: 'date', label: 'Day' }, 'Clicks', 'Impressions'], ...data ]}
          options={options}
        />
      </Paper>
    </Grid>
  )
}

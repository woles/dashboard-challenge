import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

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

export const Chart: React.FC<ChartProps> = ({ data, filters: { campaigns, datasources } }) => {

  const classes = useStyles()

  const hadingDatasurces = `${Filters.Datasource}: ${datasources.join(' & ')}`
  const hadingCampaign = `${Filters.Campaign}: ${campaigns.join(' & ')}`

  return (
    <Grid item={true} md={9} xs={12}>
      <Paper className={classes.paper}>
        <h3 className={classes.h3}>{`${hadingDatasurces}; ${hadingCampaign}`}</h3>
        Chart
      </Paper>
    </Grid>
  )
}

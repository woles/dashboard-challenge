import { Button, Grid, makeStyles, Paper } from '@material-ui/core'
import React, { useState } from 'react'

import { ALL } from '../const'
import { Filters, FiltersKeys } from '../types'
import { Filter } from './filter'

type FiltersProps = {
  filtersKeys: FiltersKeys,
  setFilters: (filters: FiltersKeys) => void,
}

const useStyles = makeStyles({
  apply: {
    margin: 10,
  },
  h2: {
    padding: 20,
  },
  paper: {
    height: 600,
    textAlign: 'center',
  },
})

export const FiltersComponent: React.FC<FiltersProps> = ({ filtersKeys: { campaigns, datasources }, setFilters }) => {

  const classes = useStyles()

  const [state, setState] = useState<FiltersKeys>({
    campaigns: [ALL],
    datasources: [ALL],
  })

  const handleFilterChange = (name: string, keys: string[]) => {
    setState({
      ...state,
      [name]: keys,
    })
  }

  const handleApply = () => {
    setFilters(state)
  }

  return (
    <Grid item={true} md={3} xs={12}>
      <Paper className={classes.paper}>
        <h2 className={classes.h2}>Filters dimension values</h2>
        <Filter keys={datasources} name={Filters.Datasource} onChange={handleFilterChange} />
        <Filter keys={campaigns} name={Filters.Campaign} onChange={handleFilterChange} />
        <Button className={classes.apply} color="primary" onClick={handleApply} variant="contained">
          Apply
        </Button>
      </Paper>
    </Grid>
  )
}

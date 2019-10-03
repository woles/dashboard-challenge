import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  p1: {
    fontSize: 12,
    marginLeft: 20,
    padding: 0,
  },
  p2: {
    padding: 20,
    paddingTop: 5,
  },
  ul: {
    marginBottom: 0,
    paddingTop: 10,
  },
})

export const Instructions: React.FC = () => {

  const classes = useStyles()

  return (
    <Grid item={true} xs={12}>
      <Paper>
        <div>
          <ul className={classes.ul}>
            <li>Select zero to N <i>Datasources</i></li>
            <li>Select zero to N <i>Campaigns</i></li>
          </ul>
          <p className={classes.p1}>(where zero means "All")</p>
          <p className={classes.p2}>
            Hitting "Apply", filters the chart to show a timeseries for both <i>Clicks</i>
            and <i>Impressions</i> for given <i>Datasources</i> and <i>Campaigns</i>
            - logical AND
          </p>
        </div>
      </Paper>
    </Grid>
  )
}

import { Grid, Paper } from '@material-ui/core'
import React from 'react'

export const Instructions: React.FC = () => {
  return (
    <Grid item={true} xs={12}>
      <Paper>
        <div>
          <ul>
            <li>Select zero to N <i>Datasources</i></li>
            <li>Select zero to N <i>Campaigns</i></li>
          </ul>
          <p>(where zero means "All")</p>
          <p>
            Hitting "Apply", filters the chart to show a timeseries for both <i>Clicks</i>
            and <i>Impressions</i> for given <i>Datasources</i> and <i>Campaigns</i>
            - logical AND
          </p>
        </div>
      </Paper>
    </Grid>
  )
}

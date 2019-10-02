import _ from 'lodash'

import { AggregatedDataItem, DataItem } from '../types'

export const aggregateData = (data: DataItem[]): AggregatedDataItem[] => _(data)
  .groupBy('Date')
  .map((items, key) => {
    return {
      Clicks: _.sumBy(items, 'Clicks'),
      Date: new Date(key),
      Impressions: _.sumBy(items, 'Impressions'),
    }
  })
  .value()

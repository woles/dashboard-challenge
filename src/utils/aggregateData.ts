import _ from 'lodash'

import { AggregatedDataItem, DataItem } from '../types'

export const aggregateData = (data: DataItem[]): AggregatedDataItem[] => _(data)
  .groupBy('Date')
  .map((items, key) => ([
    new Date(key.split('.').reverse().join('-')),
    _.sumBy(items, 'Clicks'),
    _.sumBy(items, 'Impressions'),
  ]))
  .value() as AggregatedDataItem[]

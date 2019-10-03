import _ from 'lodash'

import { DataItem, Filters, FiltersKeys } from '../types'

const getUniqKeys = (data: DataItem[], FilterName: Filters): string[] => _(data)
  .uniqBy(FilterName)
  .map((item) => item[FilterName])
  .value()

export const getFiltersKeys = (data: DataItem[]): FiltersKeys => ({
    campaigns: getUniqKeys(data, Filters.Campaign),
    datasources: getUniqKeys(data, Filters.Datasource),
})

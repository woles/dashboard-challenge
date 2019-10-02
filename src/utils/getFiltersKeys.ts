import _ from 'lodash'

import { DataItem, Filters, FiltersKeys } from '../types'

export const getFiltersKeys = (data: DataItem[]): FiltersKeys => {
  return {
    campaigns: _(data)
      .uniqBy(Filters.Campaign)
      .map((item) => item[Filters.Campaign])
      .value(),
    dataSources: _(data)
      .uniqBy(Filters.Datasource)
      .map((item) => item[Filters.Datasource])
      .value(),
  }
}

import { ALL } from '../const'
import { DataItem, FiltersKeys} from '../types'

export const filterData = (data: DataItem[], filters: FiltersKeys): DataItem[] => data
  .filter((item) => {
    if (filters.campaigns[0] !== ALL && filters.datasources[0] !== ALL) {
      return filters.datasources.indexOf(item.Datasource) >= 0 &&
        filters.campaigns.indexOf(item.Campaign) >= 0
    } else if (filters.campaigns[0] !== ALL) {
      return filters.campaigns.indexOf(item.Campaign) >= 0
    }
    return filters.datasources.indexOf(item.Datasource) >= 0
  })

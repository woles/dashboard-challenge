import { DataItem } from '../types'
import { getFiltersKeys } from './getFiltersKeys'

// tslint:disable-next-line
const data = [{"Date":"01.01.2019","Datasource":"Facebook Ads","Campaign":"Like Ads","Clicks":274,"Impressions":1979},{"Date":"01.01.2019","Datasource":"Facebook Ads","Campaign":"Offer Campaigns - Conversions","Clicks":10245,"Impressions":764627},{"Date":"01.01.2019","Datasource":"Google Adwords","Campaign":"B2B - Leads","Clicks":7,"Impressions":444},{"Date":"01.01.2019","Datasource":"Google Adwords","Campaign":"GDN Prospecting - App - Prio 1 Offer","Clicks":16,"Impressions":12535},{"Date":"01.01.2019","Datasource":"Google Adwords","Campaign":"GDN Prospecting - App - Prio 2 Offer","Clicks":93,"Impressions":18866}]

describe('Get kyes from data', () => {
  test('it get keys', () => {
    const results = getFiltersKeys(data as any)
    expect(results).toStrictEqual({
      campaigns: [
        'Like Ads',
        'Offer Campaigns - Conversions',
        'B2B - Leads',
        'GDN Prospecting - App - Prio 1 Offer',
        'GDN Prospecting - App - Prio 2 Offer',
      ],
      datasources: [
        'Facebook Ads',
        'Google Adwords',
      ],
    })
  })
})

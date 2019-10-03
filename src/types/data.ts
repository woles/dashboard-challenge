export type DataItem = {
  Campaign: string,
  Clicks: number | null,
  Datasource: string,
  Date: Date,
  Impressions: number | null,
}

export type AggregatedDataItem = [Date, number | null, number | null]

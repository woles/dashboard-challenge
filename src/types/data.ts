export type DataItem = {
  Campaign: string,
  Clicks: number | null,
  Datasource: string,
  Date: Date,
  Impressions: number | null,
}

export type AggregatedDataItem = {
  Clicks: number | null,
  Date: Date,
  Impressions: number | null,
}

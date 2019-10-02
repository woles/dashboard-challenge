
import Papa from 'papaparse'

import { DataItem } from '../types'

const PAPA_CONFIG = {
  dynamicTyping: true,
  header: true,
}

export const fetchData = async (onComplete: (results: DataItem[]) => void, dataPath: string) => {
  try {
    const file = await fetch(dataPath)
    const text = await file.text()
    Papa.parse(text, {
      ...PAPA_CONFIG,
      complete: (results) => {
        onComplete(results.data)
      },
    })
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}

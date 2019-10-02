import React, { useEffect, useState } from 'react'

import { DataItem } from './types'
import { fetchData } from './utils'

const DATA_PATH = process.env.PUBLIC_URL + '/data/data.csv'

const App: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true)
  const [data, setData] = useState([] as DataItem[])

  const onFetchComplete = ((results: DataItem[]) => {
    setData(results)
    setShowLoading(false)
  })

  useEffect(() => {
    fetchData(onFetchComplete, DATA_PATH)
  }, [])

  return (
    <div>
      {showLoading ? 'Loading...' : data.length}
    </div>
  )
}

export default App

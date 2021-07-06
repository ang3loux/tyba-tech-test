import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'

import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Router from './routes'

const App = () => {
  const [loading, setLoading] = useState(true)

  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets])
    setLoading(false)
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])

  if (loading) return <View />
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App

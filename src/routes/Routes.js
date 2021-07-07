import React from 'react'
import { useSelector } from 'react-redux'
import AuthNavigation from './auth-navigation'
import Navigation from './navigation'

const Routes = () => {
  const { token } = useSelector((state) => state.app)

  if (!token) return <AuthNavigation />
  return <Navigation />
}

export default Routes

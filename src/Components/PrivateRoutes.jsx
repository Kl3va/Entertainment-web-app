import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'

const PrivateRoutes = () => {
  let auth = { token: true }

  return auth.token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes

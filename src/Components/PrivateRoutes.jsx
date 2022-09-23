import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import { useAuth } from 'Hooks/useAuth'

const PrivateRoutes = ({ children }) => {
  const { state } = useAuth()

  if (state.initializing && state.user === null) return

  if (!state.initializing && !state.user) {
    return <Navigate to='/login' />
  }

  return !state.initializing && state.user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateRoutes

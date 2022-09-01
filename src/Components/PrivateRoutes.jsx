import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import { useGlobalContext } from 'Hooks/context'
import { getAuth } from 'firebase/auth'
import { useAuth } from 'Hooks/useAuth'

const PrivateRoutes = ({ children }) => {
  //const auth = getAuth()
  //let auth = { token: true }
  const { state } = useAuth()

  const { user } = useGlobalContext()

  if (state.initializing && state.user === null) return
  //console.log(state)
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

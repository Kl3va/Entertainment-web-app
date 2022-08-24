import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import { useGlobalContext } from 'Hooks/context'

const PrivateRoutes = ({ children }) => {
  //let auth = { token: true }

  const { user } = useGlobalContext()
  //console.log(user)

  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes

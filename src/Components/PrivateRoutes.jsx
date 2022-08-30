import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
//import { useGlobalContext } from 'Hooks/context'
import { getAuth } from 'firebase/auth'

const PrivateRoutes = ({ children }) => {
  const auth = getAuth()
  //let auth = { token: true }

  // const { user } = useGlobalContext()
  //console.log(user)
  return auth ? <Outlet /> : <Navigate to='/login' /> //return user?
}

export default PrivateRoutes

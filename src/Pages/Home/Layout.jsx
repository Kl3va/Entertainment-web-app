import React from 'react'
import SearchBar from 'Components/SearchBar'
import Navbar from 'Components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container'>
      <Navbar />
      <main className='mainwrapper'>
        <SearchBar />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

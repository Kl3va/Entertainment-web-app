import { onAuthStateChanged, getAuth } from 'firebase/auth'
import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import data from 'StarterAssets/data.json'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const auth = getAuth()

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return unSubscribe
  }, [auth])

  const searching = {
    home: 'Search for movies or TV series',
    tv: 'TV series',
    movies: 'movies',
    bookmarks: 'bookmarked shows',
  }

  return (
    <AppContext.Provider value={{ user, setUser, searching, data }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const searching = {
    tv: 'TV series',
    movies: 'movies',
    bookmarks: 'bookmarked shows',
  }

  return (
    <AppContext.Provider value={{ user, setUser, searching }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

import { onAuthStateChanged, getAuth } from 'firebase/auth'
import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
//import { Navigate } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
import data from 'StarterAssets/data.json'

//import { doc, getDoc } from 'firebase/firestore'
//import { app, database } from '../firebaseConfig'

const getLocalStorage = () => {
  let movieData = localStorage.getItem('movieData')
  if (movieData) {
    return JSON.parse(localStorage.getItem('movieData'))
  } else {
    return data
  }
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [movieData, setMovieData] = useState(getLocalStorage())
  //Previous code
  /* const auth = getAuth()
  //const navigate = useNavigate()
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)

      console.log(user)
    })

    return () => unSubscribe
  }, [])*/

  useEffect(() => {
    localStorage.setItem('movieData', JSON.stringify(movieData))
  }, [movieData])

  const searching = {
    home: 'Search for movies or TV series',
    tv: 'TV series',
    movies: 'movies',
    bookmarks: 'bookmarked shows',
  }

  return (
    <AppContext.Provider
      value={{ user, setUser, searching, setMovieData, movieData }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

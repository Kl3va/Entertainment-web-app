import React, { useState, useContext, useEffect } from 'react'
import { app, database } from '../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import data from 'StarterAssets/data.json'

//Toastify package
import { toast } from 'react-toastify'

//Get Data stored in local storage
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
  const [userID, setUserID] = useState('')
  const [movieData, setMovieData] = useState(getLocalStorage())
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    localStorage.setItem('movieData', JSON.stringify(movieData))
  }, [movieData])

  //loops over an array, compares the ids of passed and contained and changes the value of bookmarked prop
  const bookmarkMovie = (id) => {
    const newState = movieData.map((obj) => {
      // if id equals obj[id], update bookmarked property

      if (obj.id === id) {
        const { isBookmarked } = obj
        return { ...obj, isBookmarked: !isBookmarked }
      }

      // else return the object as it is
      return obj
    })

    setMovieData(newState)
  }

  const searching = {
    home: 'Search for movies or TV series',
    tv: 'TV series',
    movies: 'movies',
    bookmarks: 'bookmarked shows',
  }

  useEffect(() => {
    const sendData = async () => {
      await setDoc(doc(database, 'users', userID), { movieData })
    }

    sendData().catch((error) => toast.error(error))
  }, [movieData])

  return (
    <AppContext.Provider
      value={{
        userID,
        setUserID,
        searching,
        setMovieData,
        movieData,
        bookmarkMovie,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

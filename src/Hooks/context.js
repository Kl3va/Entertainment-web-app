import React, { useState, useContext, useEffect } from 'react'
import { app, database } from '../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import data from 'StarterAssets/data.json'
import { getAuth } from 'firebase/auth'
//Toastify package
import { toast } from 'react-toastify'
import { useAuth } from 'Hooks/useAuth'

//Get Data stored in local storage
/*const getSessionStorage = () => {
  let movieData = sessionStorage.getItem('movieData')
  if (movieData) {
    return JSON.parse(sessionStorage.getItem('movieData'))
  } else {
    return data
  }
}*/
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  //console.log(state.user)
  const [userID, setUserID] = useState('')

  const [movieData, setMovieData] = useState(data) //useState(getSessionStorage()) //data / useState([])
  //const [movieData, setMovieData] = useState(data)
  const [searchValue, setSearchValue] = useState('')
  console.log(userID)
  /*useEffect(() => {
    localStorage.setItem('movieData', JSON.stringify(movieData))
  }, [movieData])*/

  //loops over an array, compares the ids of passed and contained and changes the value of bookmarked prop
  const bookmarkMovie = (id) => {
    const newState = movieData.map((obj) => {
      // if id equals obj[id], update bookmarked property

      if (obj.id === id) {
        const { isBookmarked } = obj
        return { ...obj, isBookmarked: !isBookmarked }
      }

      // else return the movie as it is
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
    /*Store in the session for state persistence. Still exploring firebase, so this is a temporary fix. Will definitely refactor this later. */
    // sessionStorage.setItem('movieData', JSON.stringify(movieData))

    //update user's database on firebase. (Temporary set up)
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

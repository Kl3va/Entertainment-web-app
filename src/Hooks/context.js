import { onAuthStateChanged, getAuth } from 'firebase/auth'
import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import data from 'StarterAssets/data.json'

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
  const [user, setUser] = useState(null)
  const [movieData, setMovieData] = useState(getLocalStorage())

  //loops over an array, compares the ids of passed and contained and changes the value of bookmarked prop

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

  const bookmarkMovie = (id) => {
    /* setMovieData(
      movieData.map((movie) => {
        const { isBookmarked } = movie
        if (movie.id === id) {
          return { ...movie, isBookmarked: !isBookmarked }
        }
        //console.log(movie)
        return movie
      })
    )*/
    console.log(id)
    const newState = movieData.map((obj) => {
      // 👇️ if id equals obj[id], update bookmarked property

      if (obj.id === id) {
        const { isBookmarked } = obj
        return { ...obj, isBookmarked: !isBookmarked }
      }

      // 👇️ otherwise return object as is
      return obj
    })

    setMovieData(newState)
    console.log(movieData)
  }
  console.log(movieData)
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

  const searching = {
    home: 'Search for movies or TV series',
    tv: 'TV series',
    movies: 'movies',
    bookmarks: 'bookmarked shows',
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        searching,
        setMovieData,
        movieData,
        bookmarkMovie,
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

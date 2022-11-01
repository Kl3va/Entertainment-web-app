import React from 'react'
import {
  onAuthStateChanged,
  getAuth,
  browserSessionPersistence,
  setPersistence,
} from 'firebase/auth'

export const useAuth = () => {
  const auth = getAuth()
  const [state, setState] = React.useState(() => {
    const user = auth.currentUser
    return { initializing: !user, user }
  })
  function onChange(user) {
    setState({ initializing: false, user })
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, onChange)
    //console.log(auth)
    return () => unsubscribe()
  }, [auth])

  React.useEffect(() => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        /* Existing auth states are now persisted in the current
         session only. Closing the window would clear any existing state even
         if a user forgets to sign out.*/
        return setState({ initializing: false, user: auth.currentUser })
      })
      .catch((error) => {
        // Handle the Errors here. Not necessarily using this.
        //const errorCode = error.code
        const errorMessage = error.message
      })
  }, [])

  return { state }
}

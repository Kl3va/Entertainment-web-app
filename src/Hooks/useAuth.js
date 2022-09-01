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

    //console.log(user))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        //return auth//signInWithEmailAndPassword(auth, email, password)
        return setState({ initializing: false, user: auth.currentUser })
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
      })
  }, [])

  return { state }
}

import React from 'react'

//components n styles
import SignUpForm from 'Pages/SignUp/SignUpForm'
import logo from 'StarterAssets/assets/logo.svg'
import styles from 'Pages/Login/login.module.scss'
import { signupData } from 'Pages/SignUp/signupData'

const SignUp = () => {
  return (
    <>
      <header>
        <img src={logo} alt='logo' className={styles.logo} />
      </header>
      <main>
        <SignUpForm {...signupData} />
      </main>
    </>
  )
}

export default SignUp

import React from 'react'
import Form from 'Pages/Login/Form'
import logo from 'StarterAssets/assets/logo.svg'
import styles from 'Pages/Login/login.module.scss'
import { loginData } from 'Pages/Login/loginData'

const Login = () => {
  return (
    <>
      <header>
        <img src={logo} alt='logo' className={styles.logo} />
      </header>
      <main>
        <Form {...loginData} />
      </main>
    </>
  )
}

export default Login

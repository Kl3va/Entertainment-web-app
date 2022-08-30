import React from 'react'
import styles from 'Pages/Home/home.module.scss'
import { useGlobalContext } from 'Hooks/context'

const Home = () => {
  const { movieData, user } = useGlobalContext()
  console.log(movieData, user)

  return (
    <section className={styles.main}>
      <h1>Home-Page</h1>
      <p>Under Construction</p>
    </section>
  )
}

export default Home

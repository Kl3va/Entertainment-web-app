import React from 'react'
import searchIcon from 'StarterAssets/assets/icon-search.svg'
import { useGlobalContext } from 'Hooks/context'
import { useLocation } from 'react-router-dom'

import styles from 'Components/searchbar.module.scss'

const SearchBar = () => {
  const { searching } = useGlobalContext()
  console.log(searching)

  const { pathname } = useLocation()
  const path = pathname.slice(1)

  return (
    <section className={styles.section1}>
      <img src={searchIcon} alt='search' className={styles.search} />
      <input
        type='search'
        name='search'
        placeholder={path === '' ? searching.home : searching[path]}
        className={styles.filter}
      />
    </section>
  )
}

export default SearchBar

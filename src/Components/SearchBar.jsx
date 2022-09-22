import React from 'react'
import searchIcon from 'StarterAssets/assets/icon-search.svg'
import { useGlobalContext } from 'Hooks/context'
import { useLocation } from 'react-router-dom'

import styles from 'Components/searchbar.module.scss'

const SearchBar = () => {
  const { searching, searchValue, setSearchValue } = useGlobalContext()

  const { pathname } = useLocation()
  const path = pathname.slice(1)

  return (
    <section className={styles.section1}>
      <img src={searchIcon} alt='search' className={styles.search} />

      <input
        type='search'
        name='search'
        placeholder={
          path === '' ? searching.home : `Search for ${searching[path]}`
        }
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.filter}
      />
    </section>
  )
}

export default SearchBar

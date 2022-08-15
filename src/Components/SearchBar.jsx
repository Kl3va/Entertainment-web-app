import React from 'react'
import searchIcon from 'StarterAssets/assets/icon-search.svg'

import styles from 'Components/searchbar.module.scss'

const SearchBar = () => {
  return (
    <section className={styles.section1}>
      <img src={searchIcon} alt='search' className={styles.search} />
      <input
        type='search'
        name='search'
        placeholder='Search for movies or TV series'
        className={styles.filter}
      />
    </section>
  )
}

export default SearchBar

import React from 'react'
import styles from 'Pages/Home/home.module.scss'
import { useGlobalContext } from 'Hooks/context'
import Show from 'Components/Show'

const SearchResults = ({ movieArray }) => {
  const { searchValue, bookmarkMovie } = useGlobalContext()

  return (
    <section className={styles.main}>
      <h1 className='heading-large'>
        {`Found ${
          movieArray.filter((mov) =>
            mov.title.toLowerCase().includes(searchValue.toLowerCase())
          ).length
        } results for '${searchValue}'`}
      </h1>
      <div className={`${styles.recommend__grid} ${styles.gridTest}`}>
        {movieArray
          .filter((mov) =>
            mov.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((movie) => {
            return (
              <Show key={movie.id} {...movie} bookmarkMovie={bookmarkMovie} />
            )
          })}
      </div>
    </section>
  )
}

export default SearchResults

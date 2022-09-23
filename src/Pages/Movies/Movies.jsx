import React from 'react'
import { useGlobalContext } from 'Hooks/context'
import Show from 'Components/Show'
import styles from 'Pages/Home/home.module.scss'
import SearchResults from 'Components/SearchResults'

const Movies = () => {
  const { movieData, bookmarkMovie, searchValue } = useGlobalContext()
  //Array of movies section
  const moviesCategory = movieData.filter((movie) => {
    return movie.category === 'Movie'
  })

  if (searchValue) return <SearchResults movieArray={moviesCategory} />

  return (
    <section className={styles.main}>
      <h1>Movie Page</h1>
      <div className={styles.recommend__grid}>
        {moviesCategory.map((movie) => {
          return (
            <Show key={movie.id} {...movie} bookmarkMovie={bookmarkMovie} />
          )
        })}
      </div>
    </section>
  )
}

export default Movies

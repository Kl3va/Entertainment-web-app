import React from 'react'
import { useGlobalContext } from 'Hooks/context'
import Show from 'Components/Show'
import SearchResults from 'Components/SearchResults'
import styles from 'Pages/Home/home.module.scss'

const Tv = () => {
  const { movieData, bookmarkMovie, searchValue } = useGlobalContext()
  //Array of TV Series section
  const tvSeriesCategory = movieData.filter((movie) => {
    return movie.category === 'TV Series'
  })

  if (searchValue) return <SearchResults movieArray={tvSeriesCategory} />

  return (
    <section className={styles.main}>
      <h1>TV Series</h1>
      <div className={styles.recommend__grid}>
        {tvSeriesCategory.map((movie) => {
          return (
            <Show key={movie.id} {...movie} bookmarkMovie={bookmarkMovie} />
          )
        })}
      </div>
    </section>
  )
}

export default Tv

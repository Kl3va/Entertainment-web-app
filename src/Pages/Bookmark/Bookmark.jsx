import React, { useEffect } from 'react'
import { useGlobalContext } from 'Hooks/context'
import Show from 'Components/Show'
import styles from 'Pages/Home/home.module.scss'
import { useState } from 'react'

const Bookmark = () => {
  const [align, setAlign] = useState(null)
  const { movieData, bookmarkMovie } = useGlobalContext()
  //Array of Bookmarked Movies section
  const bookmarkCategory = movieData.filter((movie) => {
    return movie.isBookmarked
  })

  useEffect(() => {
    //This can be refactored using an array. This has been a huge experimental project. wow!!
    if (bookmarkCategory.length === 1) {
      setAlign(styles.recommend__column1)
    } else if (bookmarkCategory.length === 2) {
      setAlign(styles.recommend__column2)
    } else if (bookmarkCategory.length === 3) {
      setAlign(styles.recommend__column3)
    } else {
      setAlign(null)
    }
  }, [bookmarkCategory])

  return (
    <section className={styles.main}>
      <h1>Bookmarked Movies</h1>
      <div className={`${styles.recommend__grid} ${align}`}>
        {bookmarkCategory.map((movie) => {
          return (
            <Show key={movie.id} {...movie} bookmarkMovie={bookmarkMovie} />
          )
        })}
      </div>
    </section>
  )
}

export default Bookmark

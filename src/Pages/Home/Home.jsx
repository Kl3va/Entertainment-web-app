import React, { useState } from 'react'
import styles from 'Pages/Home/home.module.scss'
import { useGlobalContext } from 'Hooks/context'

//Abstract Data // Icons
import IconPlay from 'StarterAssets/assets/icon-play.svg'
import iconBookmarkEmpty from 'StarterAssets/assets/icon-bookmark-empty.svg'
import iconBookmarkFull from 'StarterAssets/assets/icon-bookmark-full.svg'

const Home = () => {
  const { movieData } = useGlobalContext()
  //console.log(movieData)

  //console.log(movieData)

  const trendingMovies = movieData.filter((movie) => {
    return movie.thumbnail?.trending
  })

  const recommendedMovies = movieData.filter((movie) => {
    return movie.thumbnail?.regular
  })

  return (
    <section className={styles.main}>
      <div className={styles.trending}>
        <h1 className='heading-large'>Trending</h1>
        {trendingMovies.map(
          ({
            title,
            id,
            thumbnail: { trending },
            year,
            category,
            rating,
            isBookmarked,
          }) => {
            return (
              <div key={id} className={`${styles.trend} packed`}>
                <picture className={styles.wrapper__image}>
                  <source media='(min-width: 801px)' srcSet={trending.large} />
                  <img src={trending.small} alt='Top Trending movie' />
                </picture>
                <div className={styles.icon__wrapper}>
                  <img src={IconPlay} alt='click to play movie' />
                  <p>Play</p>
                </div>

                <div className={styles.bookmark__wrapper}>
                  <img
                    src={isBookmarked ? iconBookmarkFull : iconBookmarkEmpty}
                    alt='click to bookmark'
                  />
                </div>
                <div className={styles.category__wrapper}>
                  <div className={styles.types}>
                    <p className={styles.year}>{year}</p>
                    <span></span>
                    <p className={styles.type}>{category}</p>
                    <span></span>
                    <p className={styles.rating}>{rating}</p>
                  </div>
                  <h2>{title}</h2>
                </div>
              </div>
            )
          }
        )}
      </div>
      <div className={styles.recommended}>
        <h1 className='heading-large'>Recommended For You</h1>
        <div className={styles.recommend__grid}>
          {recommendedMovies.map(
            ({
              title,
              id,
              thumbnail: { regular },
              year,
              category,
              rating,
              isBookmarked,
            }) => {
              return (
                <div key={id} className={`${styles.recommend}`}>
                  <div className={`${styles.picture} packed`}>
                    <picture className={styles.wrapper__image}>
                      <source
                        media='(min-width: 801px)'
                        srcSet={regular.large}
                      />
                      <source
                        media='(min-width: 400px)'
                        srcSet={regular.medium}
                      />
                      <img src={regular.small} alt='Top movie' />
                    </picture>
                    <div className={styles.icon__wrapper}>
                      <img src={IconPlay} alt='click to play movie' />
                      <p>Play</p>
                    </div>

                    <div className={styles.bookmark__wrapper}>
                      <img
                        src={
                          isBookmarked ? iconBookmarkFull : iconBookmarkEmpty
                        }
                        alt='click to bookmark'
                      />
                    </div>
                  </div>
                  <div className={styles.category__wrapper}>
                    <div className={styles.types}>
                      <p className={styles.year}>{year}</p>
                      <span></span>
                      <p className={styles.type}>{category}</p>
                      <span></span>
                      <p className={styles.rating}>{rating}</p>
                    </div>
                    <h2>{title}</h2>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default Home

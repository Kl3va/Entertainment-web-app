import React from 'react'
//Abstract Data // Icons
import IconPlay from 'StarterAssets/assets/icon-play.svg'
import iconBookmarkEmpty from 'StarterAssets/assets/icon-bookmark-empty.svg'
import iconBookmarkFull from 'StarterAssets/assets/icon-bookmark-full.svg'

//Styling using scss modules
import styles from 'Pages/Home/home.module.scss'

const Show = ({
  title,
  thumbnail: { regular },
  year,
  category,
  rating,
  isBookmarked,
  id,
  bookmarkMovie,
}) => {
  return (
    <div className={`${styles.recommend}`}>
      <div className={`${styles.picture} packed`}>
        <picture className={styles.wrapper__image}>
          <source media='(min-width: 801px)' srcSet={regular.large} />
          <source media='(min-width: 400px)' srcSet={regular.medium} />
          <img src={regular.small} alt='Top movie' />
        </picture>
        <div className={styles.icon__wrapper}>
          <img src={IconPlay} alt='click to play movie' />
          <p>Play</p>
        </div>

        <div
          className={styles.bookmark__wrapper}
          onClick={() => bookmarkMovie(id)}
        >
          <img
            src={isBookmarked ? iconBookmarkFull : iconBookmarkEmpty}
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

export default Show

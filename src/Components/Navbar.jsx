import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import styles from 'Components/navbar.module.scss'
import logo from 'StarterAssets/assets/logo.svg'
//import iconHome from "StarterAssets/assets/icon-nav-home.svg";
import { ReactComponent as IconHome } from 'StarterAssets/assets/icon-nav-home.svg'
import { ReactComponent as IconTv } from 'StarterAssets/assets/icon-nav-tv-series.svg'
import { ReactComponent as IconMovies } from 'StarterAssets/assets/icon-nav-movies.svg'
import { ReactComponent as IconBookmark } from 'StarterAssets/assets/icon-nav-bookmark.svg'
import profileImg from 'StarterAssets/assets/image-avatar.png'

const Navbar = () => {
  const { pathname } = useLocation()
  let path = pathname.slice(1)

  return (
    <aside className={styles.navcontainer}>
      <img src={logo} alt='logo' className={styles.logo} />
      <nav className={styles.nav}>
        {/*<img src={iconHome} alt="home" className={""} />*/}
        <Link to='/'>
          <IconHome className={`${path == '' ? styles.active : styles.svg}`} />
        </Link>
        <Link to='/tv'>
          <IconTv className={`${path == 'tv' ? styles.active : styles.svg}`} />
        </Link>
        <Link to='/movies'>
          <IconMovies
            className={`${path == 'movies' ? styles.active : styles.svg}`}
          />
        </Link>
        <Link to='/bookmarks'>
          <IconBookmark
            className={`${path == 'bookmarks' ? styles.active : styles.svg}`}
          />
        </Link>
      </nav>
      <img src={profileImg} alt='Profile' className={styles.profile} />
    </aside>
  )
}

export default Navbar

import React from 'react'
import styles from 'Components/navbar.module.scss'
import logo from 'StarterAssets/assets/logo.svg'
//import iconHome from "StarterAssets/assets/icon-nav-home.svg";
import { ReactComponent as IconHome } from 'StarterAssets/assets/icon-nav-home.svg'
import { ReactComponent as IconTv } from 'StarterAssets/assets/icon-nav-tv-series.svg'
import { ReactComponent as IconMovies } from 'StarterAssets/assets/icon-nav-movies.svg'
import { ReactComponent as IconBookmark } from 'StarterAssets/assets/icon-nav-bookmark.svg'
import profileImg from 'StarterAssets/assets/image-avatar.png'

const Navbar = () => {
  return (
    <aside className={styles.navcontainer}>
      <img src={logo} alt='logo' className={styles.logo} />
      <nav>
        {/*<img src={iconHome} alt="home" className={""} />*/}
        <IconHome className={styles.svg} />
        <IconTv className={styles.svg} />
        <IconMovies className={styles.svg} />
        <IconBookmark className={styles.svg} />
      </nav>
      <img src={profileImg} alt='Profile' className={''} />
    </aside>
  )
}

export default Navbar

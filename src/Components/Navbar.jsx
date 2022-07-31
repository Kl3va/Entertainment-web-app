import React from "react";
import styles from "Components/navbar.module.scss";
import logo from "StarterAssets/assets/logo.svg";
import iconHome from "StarterAssets/assets/icon-nav-home.svg";
import iconTv from "StarterAssets/assets/icon-nav-tv-series.svg";
import iconMovies from "StarterAssets/assets/icon-nav-movies.svg";
import iconBookmark from "StarterAssets/assets/icon-nav-bookmark.svg";
import profileImg from "StarterAssets/assets/image-avatar.png";

const Navbar = () => {
  return (
    <aside className={styles.navcontainer}>
      <img src={logo} alt="logo" className={styles.logo} />
      <nav>
        <img src={iconHome} alt="home" className={""} />
        <img src={iconTv} alt="tv-series" className={""} />
        <img src={iconMovies} alt="movies" className={""} />
        <img src={iconBookmark} alt="bookmarks" className={""} />
      </nav>
      <img src={profileImg} alt="Profile" className={""} />
    </aside>
  );
};

export default Navbar;

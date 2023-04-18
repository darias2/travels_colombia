import React from 'react';
import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarOptions}>
        <a href="#"> Travels Colombia</a>
        <a href="#"> Home </a>
        <a href="#"> About </a>
      </div>
      <div className={styles.navbarRight}>
        <a className={styles.navbarRightLogo}>
          <h1>Mountain</h1>
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <footer className={styles.footerContainer}>
        <div className={styles.footerContainerOptions}>
          <div className={styles.footerContainerOptionsElements}>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Trekking</a>
              </li>
              <li>
                <a href="#">Climbing</a>
              </li>
              <li>
                <a href="#">Trailing</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerContainerOptionsElements}>
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerContainerDescription}>
          <h3>TravelsColombia</h3>
          <p>
            Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
            ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
            lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
          </p>
        </div>
        {/* <div class="col item social" className={styles.footerSocialInfo}>
            <a href="#">
              <i class="icon ion-social-facebook"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-instagram"></i>
            </a>
          </div> */}
        <p className={styles.footerContainerCopyright}>Copyright © 2023</p>
      </footer>
    </div>
  );
}

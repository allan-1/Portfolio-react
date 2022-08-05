import React from 'react';
import styles from '../styles/nav.module.css';
import { Links } from './contents';

function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">{'<Allan/>'}</a>
      </div>
      <div className={styles.socials}>
        <ul>
          {Links.map((link) => (
            <div>
              <li>
                <a target="_blank" rel="noreferrer" href={link.url}>
                  <link.icons />
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;

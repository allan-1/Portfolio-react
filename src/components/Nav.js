import React, { useState } from 'react';
import styles from '../styles/nav.module.css';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Links } from './contents';

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>{'<Allan />'}</div>
      </Link>
      <div className={click ? 'menu active' : 'menu'}>
        <div className={styles.socials}>
          <ul>
            {Links.map((link) => (
              <div>
                <li onClick={closeMobileMenu}>
                  <a target="_blank" rel="noreferrer" href={link.url}>
                    <link.icons />
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;

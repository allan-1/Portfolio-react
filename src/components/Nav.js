import React, { useState } from 'react';
import styles from '../styles/nav.module.css';
import Navmodal from './comps/Navmodal';
import { FaBars } from 'react-icons/fa';
import { Links } from './contents';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
      <button className={styles.modalbtn} onClick={toggle}>
        <FaBars />
      </button>
      <Navmodal show={isOpen} onClose={toggle} />
    </div>
  );
}

export default Nav;

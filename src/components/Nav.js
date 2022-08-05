import React, { useState } from 'react';
import styles from '../styles/nav.module.css';
import { Links } from './contents';
import { Collapse, NavbarToggler } from 'reactstrap';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">{'<Allan/>'}</a>
      </div>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
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
        </Nav>
      </Collapse>
    </div>
  );
}

export default Nav;

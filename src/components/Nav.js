import React, { useState } from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
  FaTimes,
  FaBars,
} from 'react-icons/fa';



import resume from './docs/resumee.pdf';

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="logo">{'<Allan />'}</div>
      <div className={click ? 'menu active' : 'menu'}>
        {/* <ul className="navvs">
          <li onClick={closeMobileMenu}>About</li>
          <li onClick={closeMobileMenu}>Projects</li>

          <li onClick={closeMobileMenu}>Contact</li>

          <li className="resume" onClick={closeMobileMenu}>
            <a target="_blank" rel="noreferrer" href={resume}>
              Resume
            </a>
          </li>
        </ul> */}
        <div className="socials">
          <ul>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:amuturi01@gmail.com"
              >
                <FaEnvelope />{' '}
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Allan-1"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/allan-maina-ab78011aa/"
              >
                <FaLinkedin />
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/a0x001"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li className="resume" onClick={closeMobileMenu}>
              <a target="_blank" rel="noreferrer" href={resume}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Nav;
// menu

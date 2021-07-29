import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaGithubSquare, FaLinkedin, FaTwitterSquare, FaEnvelope} from 'react-icons/fa';

function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    return (
        <div className="navbar">
            <Link className="links" to='/'><div className="logo">{'<Allan />'}</div></Link>
            <div className={click ? "menu active" : "menu"}>
                <ul className="navvs">
                    <Link className="links" to="/about">
                        <li onClick={closeMobileMenu}>About</li>
                    </Link>
                    <Link className="links" to="/project">
                        <li onClick={closeMobileMenu}>Projects</li>
                    </Link>
                    <Link className="links" to="/contact">
                        <li onClick={closeMobileMenu}>Contact</li>
                    </Link>
                    <li className="resume" onClick={closeMobileMenu}>Resume</li>
                </ul>
                <div className="socials">
                    <ul>
                    <li onClick={closeMobileMenu}> 
                            <a target="_blank" rel="noreferrer" href="mailto:amuturi01@gmail.com">
                        <FaEnvelope /> </a></li>
                        <li onClick={closeMobileMenu}>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Allan-1">
                        <FaGithubSquare /></a></li>
                        <li onClick={closeMobileMenu}> 
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/allan-maina-ab78011aa/">
                       <FaLinkedin /></a></li>
                        <li onClick={closeMobileMenu}> 
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/a0x001">
                        <FaTwitterSquare /></a></li>
                    </ul>
                </div>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
            </div>
        </div>
    )
}

export default Nav
// menu
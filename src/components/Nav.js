import React, {useState} from 'react'
import {Link} from 'react-router-dom'

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
                    <li onClick={closeMobileMenu}>Resume</li>
                </ul>
                <div className="socials">
                    <ul>
                        <li onClick={closeMobileMenu}><i className="fab fa-github"></i></li>
                        <li onClick={closeMobileMenu}><i className="fab fa-twitter"></i></li>
                        <li onClick={closeMobileMenu}><i className="fab fa-linkedin-in"></i></li>
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
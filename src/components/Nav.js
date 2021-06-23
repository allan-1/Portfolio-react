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
                        <li onClick={closeMobileMenu}>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Allan-1">
                        <i className="fab fa-github"></i></a></li>
                        <li onClick={closeMobileMenu}> 
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/a0x001">
                        <i className="fab fa-twitter"></i></a></li>
                        <li onClick={closeMobileMenu}> 
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/allan-maina-ab78011aa/">
                        <i className="fab fa-linkedin-in"></i></a></li>
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
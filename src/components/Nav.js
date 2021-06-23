import React, {useState} from 'react'

function Nav() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    return (
        <div className="navbar">
            <div className="logo">{'<Allan />'}</div>
            <div className={click ? "menu active" : "menu"}>
                <ul className="navvs">
                    <li onClick={closeMobileMenu}>About</li>
                    <li onClick={closeMobileMenu}>Projects</li>
                    <li onClick={closeMobileMenu}>Contact</li>
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
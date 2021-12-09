import React from 'react'
import Allan from '../images/allan.jpg'

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-container">
                <div className="contactimg">
                    <img src={Allan} alt="Allan" />
                </div>
                <div className="name">Allan Muturi Maina</div>
                <div className="prof">Fullstack Developer</div>
                <div className="conlinks">
                    <div className="twitter"><a target="_blank" rel="noreferrer" href="https://twitter.com/a0x001">Twitter</a></div>
                    <div className="gmail"><a target="_blank" rel="noreferrer" href="mailto:amuturi01@gmail.com">Gmail</a></div>
                    <div className="linkedin"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/allan-maina-ab78011aa/">LinkedIn</a></div>
                    <div className="whatsapp"><a target="_blank" rel="noreferrer" href="https://wa.me/0711123120">WhatsApp</a></div>
                </div>
            </div>
        </div>
    )
}

export default Contact

import React from 'react'
import Allan from '../images/allan.jpg'
import BottomAbout from '../BottomAbout'

function About() {
    return (
        <div> 
            <div className="aboutmeintro">A short introduction about me</div>            
            <div className="About">
            <div className="imageme">
                <img src={Allan} alt="Allan" height='300' />
            </div>
            <div className="abouttext">
                <div className="headtext">
                    I'm Allan, 
                    <div>A Software Developer Based In Nairobi Kenya</div> 
                </div>
                <div className="details">
                    I am currently a student at the Multimedia University of Kenya
                    studying Mathematics and Computer Science.
                    I'm passionate about programming and everything technology and have
                    endeavored to be upto date with the current technologies and skills.
                </div>
                <div className="more">
                    I design and create beautiful and exceptional applications both 
                    for the web, Mobile or Computers. 
                    I dream of working on applications to be used by billions of people 
                    use and having an impact on the world with my work.
                </div>
                <div className="techstacks">
                    <div className="itro">
                        Here are a few technologies that I've been working with:
                    </div>
                    <div className="techs">
                        <div className="row">
                            <div><i className="fas fa-angle-right"></i> Javascript</div>
                            <div><i className="fas fa-angle-right"></i> Node.js</div>
                            <div><i className="fas fa-angle-right"></i> React</div>
                            <div> <i className="fas fa-angle-right"></i> Wordpress</div>
                            <div> <i className="fas fa-angle-right"></i> Dart</div>
                        </div>
                        <div className="row">
                            <div><i className="fas fa-angle-right"></i> Mongodb</div>
                            <div><i className="fas fa-angle-right"></i> React Native</div>
                            <div><i className="fas fa-angle-right"></i> Electron</div>
                            <div><i className="fas fa-angle-right"></i> Firebase</div>
                            <div> <i className="fas fa-angle-right"></i> Flutter</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
            <BottomAbout/>
        </div>
    )
}

export default About

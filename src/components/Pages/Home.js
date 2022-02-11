import React from 'react';
import Hello from '../images/undraw_Hello_re_3evm.svg';

function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="intro">
          <div className="text">Hi I'm Allan</div>
        </div>
        <div className="intro2">
          <div className="text">Mobile & <div>Web Developer</div></div>
        </div>
        <div className="button">
          <a href="#bottom">Get In Touch</a>
        </div>
      </div>
      <img className="image" src={Hello} alt="Hello" />
    </div>
  );
}

export default Home;

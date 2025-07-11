import React from 'react';
import pic from './WhatsApp Image 2024-12-07 at 7.58.44 PM.jpeg'
const DeveloperIntro = () => {
  return (
    <div className="container">
      <div className="intro-section">
        <h1>Hello, I'm a <span className='f-d'>Front-End Developer!</span></h1>
        <p>
          I specialize in creating interactive and visually appealing web applications using 
          React, JavaScript, and modern web technologies. Passionate about user experience 
          and responsive design.
        </p>
      </div>
      <div className="image-section">
        <img src={pic} alt="Front-End Developer" className="floating-image" />
      </div>
    </div>
  );
};

export default DeveloperIntro;

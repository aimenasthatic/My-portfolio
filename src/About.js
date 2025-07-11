import React from "react";
import pic from "./IMG-20241207-WA0013.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="image-section">
        <img src={pic} alt="Front-End Developer" className="floating-image" />
      </div>
      <div className="intro-section">
        <h1>About Me</h1>
        <p>
          Hi, I'm a passionate Front-End Developer with expertise in building
          dynamic and user-friendly web applications.<br></br> My skillset
          includes React, JavaScript, CSS, and modern front-end development
          practices.<br></br> I love creating seamless user experiences that
          combine functionality and design.
        </p>
        <p>
          When I'm not coding, you'll find me exploring the latest tech trends
          or honing my design skills <br></br> to stay ahead in this
          ever-evolving digital world.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

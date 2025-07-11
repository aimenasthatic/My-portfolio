import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills-container">
        <div data-aos="fade-left" className="skill">
          <h3>Front-End Development</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>
        <div data-aos="fade-right" className="skill">
          <h3>Graphic Design</h3>
          <p>Photoshop, Illustrator, Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import doctor from "./doctor.jpg";
// import Net from "./Net.jpg";
import pdfpic from "./pdfpic.jpg";
import NexTech from "./NexTech_IT_Solution_Provider.png";

const Projects = () => {
  const projectData = [
    // {
    //   id: 1,
    //   title: "Netflix Series Website",
    //   description:
    //     "A personal portfolio website built with React.js and styled-components.",
    //   image: Net,
    //   link: "https://drive.google.com/drive/my-drive",
    // },
    {
      id: 2,
      title: "Doctor Application",
      description:
        "A fully functional Doctor  application with patient registeration & appointment.",
      image: doctor,
      link: "https://hackathon-sable-eight.vercel.app/",
    },
    {
      id: 3,
      title: "PDF Down & Upload App",
      description: "A PDF downloaded & uploaded app using React.js, Node.js.",
      image: pdfpic,
      link: "https://final-hackathon-eight.vercel.app/",
    },
    {
      id: 4,
      title: "Investor & Enterpernure App",
      description:
        "Investor & Enterpernure collabration app using React.js, Node.js.",
      image: NexTech,
      link: "https://aimenasthatic.github.io/2nd-task/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

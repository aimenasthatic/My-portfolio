import React from "react";
// import Navbar from "./components/Navbar";
import DeveloperIntro from "./Home";
import AboutUs from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./project";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <DeveloperIntro />
      <AboutUs />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

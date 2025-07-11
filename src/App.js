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
=======
import React, { useEffect, useState } from "react";

import "./App.css";
import Timer from "./three";

function App() {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    console.log("App comp. is mounting....");
  }, []);

  return (
    <>
      <div className="toggle">
        {isVisible ? <Timer /> : null}
        <button onClick={() => setVisible(!isVisible)}> Toggle</button>
      </div>
    </>
  );
}

export default App;


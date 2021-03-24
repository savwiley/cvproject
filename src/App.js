import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="resume">
      <div className="faAtom">
        <FontAwesomeIcon icon={faAtom} className="faAtom" />
      </div>

      <Header />

      <Education />

      <Experience />

      <a href="https://github.com/savwiley/cv-project" className="faGithub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default App;

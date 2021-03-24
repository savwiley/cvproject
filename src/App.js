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
      <label class="switch">
        <input type="checkbox" onClick={preview} />
        <span class="slider round"></span>
      </label>

      <div className="faAtom">
        <FontAwesomeIcon icon={faAtom} className="faAtom" />
      </div>

      <Header />

      <Education />

      <Experience />

      <a href="https://github.com/savwiley/cvproject" className="faGithub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

function preview() {
  const forms = document.querySelectorAll("form");
  const btns = document.querySelectorAll("button");
  const box = document.querySelector("input[type=checkbox]");

  if (box.checked) {
    forms.forEach((e) => (e.style.display = "none"));
    btns.forEach((e) => (e.style.display = "none"));
  } else {
    btns.forEach((e) => (e.style.display = "block"));
  }
}

export default App;

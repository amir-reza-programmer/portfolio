import React from "react";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import "./Intro.css";

const Intro = (props) => {
  return (
    <div className="i-wrapper">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>AmirReza Zare</span>
          <span>
            i work as a frontend and backend developer. i have so many projects
            and plans.
          </span>
        </div>
        <button className="button">Hire Me</button>
        <div className="i-links">
          <a href="https://www.github.com">
            <img src={Github} alt="github profile" className="i-github" />
          </a>
          <a href="https://www.linkedin.com">
            <img src={LinkedIn} alt="linkedin profile" className="i-linkedin" />
          </a>
          <a href="https://www.instagram.com">
            <img
              src={Instagram}
              alt="instagram profile"
              className="i-instagram"
            />
          </a>
        </div>
      </div>
      <div className="i-right">right side</div>
    </div>
  );
};

export default Intro;

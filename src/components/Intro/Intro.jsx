import React from "react";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import Thumpup from "../../img/thumbup.png";
import GlassesImoji from "../../img/glassesimoji.png";

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
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={GlassesImoji} alt="" />
        <div
          className="blur"
          style={{
            backgroundColor: "rgb(238, 210, 255)",
            bottom: "5%",
            left: "-5%",
          }}
        ></div>
        <div
          className="blur"
          style={{ background: "#c1f5ff", top: "-10%", right: "0%" }}
        ></div>
        <div style={{ top: "-10%", right: "0%" }}>
          <FloatingDiv image={Crown} text1="Web" text2="Development" />
        </div>
        <div style={{ bottom: "5%", left: "-5%" }}>
          <FloatingDiv
            image={Thumpup}
            text1="Greate"
            text2="Developer and Designer"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

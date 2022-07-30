import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = (props) => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awsome">
        <span>My Awsome</span>
        <span>Services</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          <br />
          Lorem ipsum dolor sit goes
        </p>
        <button className="button s-button">Download CV</button>
        <div
          className="blur"
          //   rgb(100, 150, 200)
          style={{ background: "rgb(140, 178, 215)" }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ position: "relative", bottom: "3rem" }}>
          <Card
            image={HeartEmoji}
            title="Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing"
          />
        </div>

        <div style={{ position: "absolute", top: "16rem", left: "-5rem" }}>
          <Card
            image={Glasses}
            title="Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing"
          />
        </div>

        <div style={{ position: "absolute", top: "7rem", left: "16rem" }}>
          <Card
            image={Humble}
            title="Design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

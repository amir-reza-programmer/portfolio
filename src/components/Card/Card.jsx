import React from "react";
import "./Card.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div>
        <img src={image} alt="" />
      </div>

      <span>{title}</span>
      <p>{description}</p>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;

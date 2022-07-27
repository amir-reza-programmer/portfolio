import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">AmirReza</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Experiences</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button n-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
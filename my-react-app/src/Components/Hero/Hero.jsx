import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* There are two part in hero section left and right */}

        <div className="hero-left">Left Section</div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

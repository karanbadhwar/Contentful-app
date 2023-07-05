import React from "react";
import heroImg from "../assets/hero.svg";
// const heroImg = require("../assets/hero.svg") as string;

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia
            doloremque veniam sunt minus rem nobis consequatur, praesentium
            perspiciatis minima!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

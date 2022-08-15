import React from "react";

import "./heroSection.css";
const HeroSection = () => {
  return (
    <section className="main">
      <div className="clipPath"></div>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/kYMFdT5laU4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      <div className="typewriter">
        <h1>
          Design your community to match your branding. <br />
          Make it feel like your own product with complete <br />{" "}
          <span
            style={{
              color: "red",
              marginLeft: "180px",
              fontSize: "30px",
              textTransform: "upperCase",
            }}
          >
            customization & integration,{" "}
          </span>
          <br /> including mobile app.
        </h1>
      </div>
      <button className="heroButton">Have a Look</button>
      <div className="clipPath2"></div>
      <div className="clipPath3"></div>
    </section>
  );
};

export default HeroSection;

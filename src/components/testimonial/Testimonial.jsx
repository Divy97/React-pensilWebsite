import React from "react";
import Carousel from "react-bootstrap/Carousel";

import bg from "../../assets/bg.png";
import pen2 from "../../assets/photo2.jpg";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <section className="carousal">
      <div className="clipPath__testimonial"></div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block  img" src={bg} alt="First slide" />
          <Carousel.Caption>
            <img src={pen2} alt="img" className="imgPhoto" />
            <h3>Amar Shrivastav</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              cum excepturi quibusdam tempora, nobis consequuntur?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block  img" src={bg} alt="Second slide" />
          <Carousel.Caption>
            <img src={pen2} alt="img" className="imgPhoto" />
            <h3>Akbar Ali</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              cum excepturi quibusdam tempora, nobis consequuntur?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block  img" src={bg} alt="Third slide" />
          <Carousel.Caption>
            <img src={pen2} alt="img" className="imgPhoto" />
            <h3>Anthony Edward</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              cum excepturi quibusdam tempora, nobis consequuntur?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="clipPath__testimonialOne"></div>
    </section>
  );
};

export default Testimonial;

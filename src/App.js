import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Que from "./components/q&a/Que";
import Testimonial from "./components/testimonial/Testimonial";
const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Testimonial />
      <Que />
    </>
  );
};

export default App;

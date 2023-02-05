import React from "react";
import CallToAction from "../components/Hero/Hero";
import About from "../components/About/About";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";

function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;

import React from "react";
import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <Testimonials />
      <Chicago />
    </>
  );
}

export default Homepage;

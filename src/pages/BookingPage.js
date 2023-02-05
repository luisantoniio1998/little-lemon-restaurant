import React from "react";
import CallToAction from "../components/Hero/Hero";
import About from "../components/About/About";
import Booking from "../components/Booking/Booking";
import Testimonials from "../components/Testimonials/Testimonials";

function BookingPage() {
  return (
    <>
      <CallToAction />
      <Booking />
      <Testimonials />
      <About />
    </>
  );
}

export default BookingPage;

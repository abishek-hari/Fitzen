import React from "react";
import {
  Hero,
  Navbar,
  About,
  MuscleGroup,
  Footer,
} from "../components/components";

const Homelayout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MuscleGroup />
      <Footer />
    </div>
  );
};

export default Homelayout;

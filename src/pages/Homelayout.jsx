import React from "react";
import {
  Hero,
  Navbar,
  About,
  MuscleGroup,
  Footer,
} from "../components/Components";

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

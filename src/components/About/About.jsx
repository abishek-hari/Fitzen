import React from "react";
import "./About.css";
import aboutImg from "../../assets/BenefitsPageGraphic.png";

const About = () => {
  return (
    <div className='container section about__section'>
      <div className='about__container'>
        <div className='about__img-container'>
          <img src={aboutImg} alt='gym' className='about__img' />
        </div>
        <div className='about__desc'>
          <h2 className='about__title'>Discover FITZEN</h2>
          <p className='about__info'>
            Welcome to FITZEN, your go-to destination for all things fitness. At
            FITZEN, we're committed to helping you achieve your fitness goals by
            providing a comprehensive resource for every muscle group.
          </p>

          <p className='about__info'>
            Discover the perfect exercises tailored to your specific needs,
            whether you're looking to tone your Pectorals, build strong Leg
            muscles, or sculpt those Shoulders. With a user-friendly interface
            and step-by-step exercise guides, FITZEN makes it easy for you to
            find the right workouts for your fitness journey.
          </p>

          <p className='about__info'>
            Explore our wide range of exercises and start working on the muscle
            groups that matter to you. Your fitness transformation begins here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

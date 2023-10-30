import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/HomePageGraphic.png";

const Hero = () => {
  return (
    <section className='container section hero__container'>
      <div className='hero__info'>
        <h1 className='hero__title'>Your Wellness, Our Priority</h1>
        <p className='hero__desc'>
          Experience a healthier and happier life with FITZEN. We provide you
          with the tools and guidance to achieve balance and well-being.
        </p>
        <div className='fitzen'>
          <h1 className='hero__fitzen'>FITZEN</h1>
        </div>
      </div>
      <div className='hero__img'>
        <img src={HeroImg} alt='gym' className='hero__image' />
      </div>
    </section>
  );
};

export default Hero;

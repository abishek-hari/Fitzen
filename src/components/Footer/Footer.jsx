import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='container section footer__container'>
      <div className='footer__logo'>
        <h2 className='footer__title'>Fitzen</h2>
        <p className='footer__desc'>
          Experience a healthier and happier life with FITZEN. We provide you
          with the tools and guidance to achieve balance and well-being.
        </p>
      </div>
      <div className='footer__join'>
        <h3 className='join__title'>Join with us</h3>
        <p className='join__desc'>
          No matter what your preference may be, take a session from gymnastic
        </p>
        <form className='footer__form'>
          <input
            type='text'
            className='footer__input'
            placeholder='Subscribe'
          />
          <button className='footer__btn'>subscribe</button>
        </form>
      </div>
      <div className='footer__support'>
        <p className='support__desc'>About</p>
        <p className='support__desc'>Support</p>
        <p className='support__desc'>FAQ</p>
      </div>
    </div>
  );
};

export default Footer;

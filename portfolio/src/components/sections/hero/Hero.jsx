import React from 'react';
import './hero.css';
import hero from '../../../assets/hero.jpeg';
import  InteractiveGridBackground  from '../../lightswind/interactive-grid-background' 

const Hero = () => {
  return (
    <section className="hero">
      {/* Background */}
      <InteractiveGridBackground className="hero-bg" />

      {/* Left text */}
      <div className="hero-left">
        <h1>Hi, I'm Haytam Raba</h1>
        <p>
          I'm a Software & Network Engineering student passionate about coding, building projects, and sharing knowledge.
        </p>
        <h1 className="hero-btn">
          Contact Me
        </h1>
      </div>

      {/* Right image */}
      <div className="hero-right">
        <img src={hero} alt="Haytam Raba" className="hero-img"/>
      </div>
    </section>
  );
};

export default Hero;
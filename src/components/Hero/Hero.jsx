import React from 'react';
import Top from './Top';
import HeroMarquee from './HeroMarquee';
import GridSection from './GridSection';
import Navbar from '../Navbar.jsx/Navbar';

const Hero = () => {
  return (
    <>
      <div className="bg-[url(/Hero/hero-bg.png)] bg-no-repeat bg-cover bg-center min-h-[60vh]">
        <div className="relative w-full">
          <Top />
          <HeroMarquee />
        </div>
      </div>
      <GridSection />
    </>
  );
};

export default Hero;

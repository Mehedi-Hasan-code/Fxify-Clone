import React from 'react';
import Top from './Top';
import HeroMarquee from './HeroMarquee';
import GridSection from './GridSection';
import Navbar from '../Navbar.jsx/Navbar';
import Featured from './Featured';

const Hero = () => {
  return (
    // hero section
    <div className="pt-[192px] pb-[96px] relative px-[1.5rem]">
      {/* hero bg */}
      <div className="min-h-[60vh] absolute top-0 left-0 w-full flex justify-center items-start">
        <img
          className="min-w-[150%] 2xl:min-w-[100%]"
          src="/Hero/hero-bg.png"
          alt="hero background"
        />
      </div>

      {/* content */}
      <div className="max-w-[1440px] w-full mx-auto relative">
        <div className="flex flex-col items-center gap-6">
          <Top />
          <HeroMarquee />
          <GridSection />
          <Featured />
        </div>
      </div>
    </div>
  );
};

export default Hero;

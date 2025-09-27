import React from 'react';
import Hero from '../components/Hero/Hero';
import AddOns from '../components/AddOns/AddOns';
import Contact from '../components/Contact/Contact';
import FaqSection from '../components/FAQ/FaqSection';
import Benefits from '../components/Benefits/Benefits';
import Company from '../components/Company/Company';
import TrustPilot from '../components/TrustPilot/TrustPilot';
import Blog from '../components/Blog/Blog';
import GetStarted from '../components/GetStarted/GetStarted';
import HowItWorks from '../components/HowItWorks/HowItWorks';

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <AddOns />
      <Benefits />
      <Company />
      <TrustPilot />
      <Blog />
      <GetStarted />
      <FaqSection />
      <Contact />
    </>
  );
};

export default Home;

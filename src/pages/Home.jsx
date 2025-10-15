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
import Programs from '../components/Programs/Programs';
import OurPlatForm from '../components/OurPlatForm/OurPlatForm';
import DiscordSection from '../components/DiscordSection/DiscordSection';
import Payouts from '../components/Payouts/Payouts';
import Pricing from '../components/Pricing/Pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <Pricing />
      <HowItWorks />
      <Programs />
      <Benefits />
      <OurPlatForm />
      <Payouts />
      <AddOns />
      <DiscordSection />
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

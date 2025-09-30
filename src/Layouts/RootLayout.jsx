import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar.jsx/Navbar';
import Footer from '../components/Footer/Footer';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const RootLayout = () => {
  return (
    <div className="bg-[#0e1017] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      {/* fixed on screen */}
      <div>
        <PromoBanner />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;

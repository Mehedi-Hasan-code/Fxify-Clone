import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar.jsx/Navbar';
import Footer from '../components/Footer/Footer';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Chat from '../components/Chat/Chat';

const RootLayout = () => {
  return (
    <div className="bg-[#0e1017] min-h-screen relative">
      <Navbar />
      <Outlet />
      <Footer />
      {/* fixed on screen */}
      <div>
        <ScrollToTop />
        <Chat />
      </div>

      <PromoBanner />
    </div>
  );
};

export default RootLayout;

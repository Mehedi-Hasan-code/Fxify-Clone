import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar.jsx/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div className="bg-[#0e1017] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

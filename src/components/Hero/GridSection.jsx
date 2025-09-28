import React from 'react';
import Community from './Grid/Community';
import Payouts from './Grid/Payouts';
import Announcements from './Grid/Announcements';

const GridSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        className="border-t border-t-[#ffffff0d] border-b border-b-[#ffffff0d] flex flex-wrap"
      >
        {/* Top section */}
        <Community />
        {/* Middle section */}
        <Payouts />
        {/* Bottom section */}
        <Announcements />
      </div>
      
    </div>
  );
};

export default GridSection;

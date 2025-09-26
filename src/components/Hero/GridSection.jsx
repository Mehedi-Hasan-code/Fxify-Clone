import React from 'react';
import Community from './Grid/Community';
import Payouts from './Grid/Payouts';
import Announcements from './Grid/Announcements';

const GridSection = () => {
  return (
    <div>
      {/* Top section */}
      <Community />
      {/* Middle section */}
      <Payouts />
      {/* Bottom section */}
      <Announcements />
    </div>
  );
};

export default GridSection;

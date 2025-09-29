import React from 'react';

const SectionDetails = ({ label, width = 'w-full' }) => {
  return (
    <div className={`text-center text-white/60 text-[16px] not-italic font-[400] leading-[130%] w-[90%] sm:${width} mx-auto`}>
      {label}
    </div>
  );
};

export default SectionDetails;

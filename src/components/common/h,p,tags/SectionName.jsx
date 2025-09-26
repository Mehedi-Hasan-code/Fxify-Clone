import React from 'react';

const SectionName = ({ label }) => {
  return (
    <div className="text-center uppercase text-[#D4F7F1] font-['Source_Code_Pro',monospace] text-[14px] not-italic font-normal leading-[120%] opacity-60">
      {label}
    </div>
  );
};

export default SectionName;

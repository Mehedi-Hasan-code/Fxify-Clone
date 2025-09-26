import React from 'react';

const SectionTitle = ({label}) => {
  return (
    <h1 className="text-[30px] font-[500] bg-[linear-gradient(120deg,#FFF_44.15%,#1DAA91_87.75%)] bg-clip-text text-transparent text-center leading-[120%] tracking-[-1.5px] w-fit">
     {label}
    </h1>
  );
};

export default SectionTitle;

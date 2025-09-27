import React from 'react';

const ButtonSecondary = ({ label, width = 'w-fit' }) => {
  return (
    <button
      className={`flex px-4 py-[14px] justify-center items-center self-stretch ${width} min-w-[140px]
         rounded-md border border-white/15 no-underline text-center 
          text-[14px] not-italic font-semibold leading-none 
         text-white/70 bg-white/5 transition-all duration-700 ease-in-out hover:text-white hover:bg-white/15 hover:border-white/20 cursor-pointer`}
    >
      {label}
    </button>
  );
};

export default ButtonSecondary;

import React from 'react';

const ButtonPrimary = ({ label }) => {
  return (
    <div className="relative z-[999] h-10 w-auto p-2 bg-[#1daa91] transition-all duration-500 ease-out backdrop-blur-[20px] rounded-[10px] flex items-center justify-center hover:bg-[#1daa91] hover:opacity-80">
      <button className="flex items-center justify-center no-underline px-[10px] py-2 font-bold text-[15px] text-[#0b0c10] whitespace-nowrap">
        {label}
      </button>
    </div>
  );
};

export default ButtonPrimary;

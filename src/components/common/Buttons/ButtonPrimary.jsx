import React, { useState } from 'react';

const ButtonPrimary = ({ label }) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsTouched(false);
    }, 150);
  };

  return (
    <div className="relative z-[999] h-10 w-auto p-2 bg-[#1daa91] transition-all duration-500 ease-out backdrop-blur-[20px] rounded-[10px] flex items-center justify-center hover:bg-[#1daa91] hover:opacity-80">
      <button
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`flex items-center justify-center no-underline px-[10px] py-2 font-bold text-[15px] text-[#0b0c10] whitespace-nowrap transition-all duration-300 ${
          isTouched ? 'opacity-80' : ''
        }`}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonPrimary;

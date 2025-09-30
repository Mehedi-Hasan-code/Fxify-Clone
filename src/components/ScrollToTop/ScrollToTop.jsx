import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed z-[999999999] bottom-20 right-5 h-12 w-12 rounded-[10px] backdrop-blur-[10px] bg-[rgba(194,208,228,0.15)] flex justify-center items-center transition-all duration-[800ms] ease-in-out cursor-pointer hover:bg-[#c2d0e41a] ${
        isVisible
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-[140px]'
      }`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevrons-up transition-colors duration-300 hover:stroke-[#184E4A]"
      >
        <polyline id="first-arrow" points="17 11 12 6 7 11"></polyline>
        <polyline id="second-arrow" points="17 18 12 13 7 18"></polyline>
      </svg>
    </div>
  );
};

export default ScrollToTop;

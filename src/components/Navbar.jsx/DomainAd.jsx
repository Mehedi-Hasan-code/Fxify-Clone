import React from 'react';
import { Plus } from 'lucide-react';
const DomainAd = () => {
  return (
    <div className="absolute top-0 z-[999999] w-full border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-[10px]">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center">
        {/* domains */}
        <div className="flex items-stretch justify-start overflow-hidden">
          <span className="flex-[0_1_auto] px-5 py-2.5 transition-all duration-700 ease-in-out text-sm font-semibold leading-none flex flex-row flex-nowrap justify-center items-center no-underline border-t-[3px] border-solid gap-1.5 bg-white/[0.08] text-white border-t-[#03c3a1] cursor-pointer hover:bg-white/[0.05] hover:text-white/80">
            <img
              className="h-[12px] w-fit"
              src="/Navbar/ftm.svg"
              alt="Fixify image"
            />
          </span>

          <span className="flex-[0_1_auto] px-5 py-2.5 transition-all duration-700 ease-in-out bg-transparent text-white/60 text-sm font-semibold leading-none flex flex-row flex-nowrap justify-center items-center no-underline border-t-[3px] border-solid border-t-transparent gap-1.5 hover:bg-white/[0.05] hover:text-white/80 cursor-pointer">
            <img
              className="w-fit h-[12px]"
              src="/Navbar/fnew.svg"
              alt="New Image"
            />
            <div className="leading-none text-[10px] font-semibold bg-[#03c3a1] rounded-[2px] px-1 py-0.5 text-white/80">
              New
            </div>
          </span>
        </div>

        {/* promos */}
        <div className="hidden lg:flex md:items-center gap-2">
          {/* single promo */}
          <div className="flex gap-[8px] items-center">
            {/* title */}
            <div className="text-[#D4F7F1] text-[13px] font-[600] leading-[120%] flex items-center gap-1">
              <span className="font-[900] text-[#1DAA91]">40% OFF</span>
              On All Evaluations UP TO 50K
            </div>

            {/* sp code */}
            <div className="flex py-[5px] px-3 justify-center items-center rounded border border-[#1DAA9195] bg-gradient-to-b from-[rgba(29,170,145,0.1)] to-[rgba(29,170,145,0.3)] text-white text-xs font-[700] leading-none tracking-[-0.111px] transition-all duration-[800ms] ease-in-out cursor-pointer min-w-[70px] text-center hover:opacity-50">
              TV40
            </div>
          </div>

          {/* promo separator */}
          <div className="flex justify-center items-center h-[14px] w-[14px] text-[#D4F7F1]">
            <Plus />
          </div>

          {/* single promo */}
          <div className="flex gap-[8px] items-center">
            {/* title */}
            <div className="text-[#D4F7F1] text-[13px] font-[600] leading-[120%] flex items-center gap-1">
              <span className="font-[900] text-[#1DAA91]">25% OFF</span>
              On All Evaluations ABOVE 75K
            </div>

            {/* sp code */}
            <div className="flex py-[5px] px-3 justify-center items-center rounded border border-[#1DAA9195] bg-gradient-to-b from-[rgba(29,170,145,0.1)] to-[rgba(29,170,145,0.3)] text-white text-xs font-[700] leading-none tracking-[-0.111px] transition-all duration-[800ms] ease-in-out cursor-pointer min-w-[70px] text-center hover:opacity-50">
              TV25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainAd;

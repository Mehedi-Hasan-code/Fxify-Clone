import React from 'react';
import Marquee from 'react-fast-marquee';

const PromoBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[radial-gradient(50%_60px_at_center_bottom,rgba(212,247,241,0.2),rgba(212,247,241,0.05)),rgba(14,16,23,0.5)] backdrop-blur-[20px] z-[99999] transition-all duration-500 ease-in-out border-t border-[rgba(212,247,241,0.2)] overflow-hidden py-6 px-0 flex flex-col flex-nowrap gap-6 md:hidden">
      {/* Title */}
      <div className="text-center text-[15px] text-white opacity-80 leading-none tracking-normal font-medium m-0 p-0 transition-all duration-500 ease-in-out">
        SAVE WITH OUR EXCLUSIVE PROMOS
      </div>

      {/* promos */}
      <div className="py-0 [-webkit-mask-image:unset] max-w-[100%] mx-auto my-0 flex self-start w-full">
        <Marquee autoFill speed={120}>
          <div className="animate-none flex flex-row flex-nowrap flex-[1_0_auto] will-change-transform">
            <div className="p-2 rounded-[10px] border border-white/15 bg-white/10 backdrop-blur-[10px] flex flex-col flex-nowrap justify-center items-start transition-all duration-500 ease-in-out overflow-hidden md:flex-[1_1_0] mx-4">
              {/* title */}
              <div className="text-[#D4F7F1] text-[15px] font-semibold leading-[120%] pb-1.5">
                <span className="text-[#D4F7F1] font-[900]">40% OFF</span>
                On All Evaluations UP TO 50K
              </div>

              {/* expire */}
              <div className="text-xs font-normal text-white/60">
                Expires:{' '}
                <span className="font-bold text-white/80">
                  9th October 2025
                </span>
              </div>

              {/* code wrap */}
              <div></div>
            </div>

            <div className="p-2 rounded-[10px] border border-white/15 bg-white/10 backdrop-blur-[10px] flex flex-col flex-nowrap justify-center items-start transition-all duration-500 ease-in-out overflow-hidden md:flex-[1_1_0]">
              {/* title */}
              <div className="text-[#D4F7F1] text-[15px] font-semibold leading-[120%] pb-1.5">
                <span className="text-[#D4F7F1] font-[900]">40% OFF</span>
                On All Evaluations UP TO 50K
              </div>

              {/* expire */}
              <div className="text-xs font-normal text-white/60">
                Expires:{' '}
                <span className="font-bold text-white/80">
                  9th October 2025
                </span>
              </div>

              {/* code wrap */}
              <div></div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default PromoBanner;

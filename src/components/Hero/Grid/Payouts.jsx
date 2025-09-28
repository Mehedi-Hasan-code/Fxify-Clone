import { HandCoins } from 'lucide-react';
import React from 'react';

const Payouts = () => {
  return (
    <div className="flex-1 basis-[100%] md:basis-[45%] lg:basis-0 p-2 lg:border-r lg:border-r-[#ffffff0d]">
      <div className="rounded-[10px] border border-white/5 bg-[rgba(129,233,215,0.03)] backdrop-blur-[5px] flex flex-col gap-2 h-full">
        {/* card header */}
        <div className="overflow-hidden flex items-center px-3 py-2 gap-2 border-b border-white/5 relative before:content-[''] before:w-[150px] before:h-[25px] before:absolute before:left-[-5px] before:top-[-5px] before:bg-[rgba(29,170,144,0.25)] before:blur-[30px] before:rotate-[33.01deg]">
          {/* icon */}
          <HandCoins color="white" size={16} />

          {/* text */}
          <span className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-[120%] tracking-[-0.556px]">
            Payouts
          </span>
        </div>

        {/* card body */}
        <div className="flex flex-col flex-nowrap gap-1 px-2 flex-1">
          {/* payouts */}
          <div className="flex-1 flex flex-col sm:flex-row gap-1">
            {/* left */}
            <div className="flex-1 rounded-[6px] border border-white/5 flex flex-col gap-1 p-4 overflow-hidden relative before:content-[''] before:absolute before:left-[-53.249px] before:bottom-[0.156px] before:w-[256.632px] before:h-[54.785px] before:rotate-[11.567deg] before:rounded-[256.632px] before:bg-[rgba(29,170,145,0.2)] before:blur-[37.03704px]">
              {/* title */}
              <div className="text-white text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px]">
                30M+
              </div>
              {/* subtitle */}
              <div className="text-[#D4F7F1] text-[16px] not-italic font-normal leading-[120%]">
                Paid out
              </div>
              {/* image */}
              <div className="flex-1">
                <img
                  src="/Hero/hero-payout-1.svg"
                  className="absolute bottom-0 left-0 w-full h-auto"
                  alt="Payouts image"
                />
              </div>
            </div>

            {/* right */}
            <div className="flex-1 rounded-[6px] border border-white/5 flex flex-col gap-1 p-3 overflow-hidden text-right relative before:content-[''] before:absolute before:left-[-53.249px] before:bottom-[0.156px] before:w-[256.632px] before:h-[54.785px] before:rotate-[11.567deg] before:rounded-[256.632px] before:bg-[rgba(29,170,145,0.2)] before:blur-[37.03704px]">
              {/* title */}
              <div className="text-white text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px]">
                $117,000
              </div>
              {/* sub title */}
              <div className="text-[#D4F7F1] text-[16px] not-italic font-normal leading-[19.2px]">
                Single highest payout
              </div>
              {/* image */}
              <div className="grow shrink basis-[70px]">
                <img
                  className="absolute bottom-0 left-0 w-full h-auto"
                  src="Hero/hero-payout-2.svg"
                  alt="Hero Payout"
                />
              </div>
            </div>
          </div>

          {/* weekly payouts */}
          <div className="flex-1 rounded-[6px] border border-white/5 flex max-h-[180px] md:max-h-[100px] items-start relative overflow-hidden flex-nowrap mb-2">
            {/* title */}
            <div className="text-white text-[18px] not-italic font-medium leading-[21.6px] relative z-10 p-3">
              Top Payouts this Week
            </div>
            {/* image */}
            <div className="flex-1 basis-[100%] sm:basis-0 min-h-[80px]  h-full relative after:content-[''] after:absolute after:w-[256.632px] after:h-[54.785px] after:rotate-[11.567deg] after:right-[-65.967px] after:top-[-0.926px] after:rounded-[256.632px] after:bg-[rgba(29,170,145,0.2)] after:blur-[37.03704px]">
              <img
                className="h-[80%] lg:h-[80%] absolute w-auto bottom-0 right-0"
                src="/Hero/hero-wpayouts.png"
                alt="payout image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;

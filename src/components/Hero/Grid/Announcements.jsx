import React from 'react';

const Announcements = () => {
  return (
    <div className="flex-1 basis-[100%] md:basis-[45%] lg:basis-0 p-2">
      <div className="rounded-[10px] border border-[rgba(255,255,255,0.05)] bg-[rgba(129,233,215,0.03)] backdrop-blur-[5px] gap-2 flex flex-col h-full">
        {/* card header */}
        <div className="overflow-hidden flex items-center px-4 py-2 gap-2 border-b border-[rgba(255,255,255,0.05)] relative before:content-[''] before:w-[150px] before:h-[25px] before:absolute before:left-[-5px] before:top-[-5px] before:bg-[rgba(29,170,144,0.25)] before:blur-[30px] before:rotate-[33.01deg]">
          <img src="/Hero/micke.svg" alt="megaphone" />
          <span className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-[120%] tracking-[-0.556px]">
            Announcements
          </span>
        </div>

        {/* card body */}
        <div className="flex flex-col px-2 pb-2 gap-1 flex-1">
          <div className="flex gap-2 flex-row flex-wrap flex-1 basis-[100%]">
            {/* promotions */}
            <div className="flex flex-col gap-4 flex-1 basis-[100%] relative border border-[#ffffff0d] rounded-[6px] overflow-hidden sm:basis-0 before:content-[''] before:w-[256.632px] before:h-[54.785px] before:rotate-[11.567deg] before:absolute before:right-[-55.013px] before:bottom-[0.156px] before:blur-[37.037px] before:z-[-1] before:rounded-[256.632px] before:bg-[rgba(29,170,145,0.2)]">
              {/* hero title */}
              <div className="text-white text-[18px] not-italic font-medium leading-[120%] tracking-[-0.85px] px-3 py-3">
                Promotions
              </div>

              {/* a container */}
              <div className="flex flex-col gap-1 flex-1 px-2 py-2">
                {/* single promotion */}
                <div className="flex flex-col gap-2 border border-[#ffffff0d] rounded-[6px] p-2">
                  {/* sp title */}
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-1 shrink-0"
                      src="/Hero/dimond.svg"
                      alt="Dimond"
                    />
                    <div className="text-[#D4F7F1] text-sm font-semibold leading-tight">
                      40% OFF On All Evaluations UP TO 50K
                      <span className="text-[##1DAA91] font-[500]">
                        -40% OFF
                      </span>
                    </div>
                  </div>
                  {/* div class sp - text */}
                  <div className="flex items-stretch flex-col gap-2">
                    <div className="flex justify-center items-center text-white text-[12px] not-italic font-bold leading-[1] tracking-[-0.111px] cursor-pointer px-4 py-[5px]  rounded-[4px]  border border-[rgba(29,170,145,0.584)] bg-[linear-gradient(180deg,var(--accent-10,rgba(29,170,145,0.1))_0%,var(--accent-30,rgba(29,170,145,0.3))_100%)] transition-all duration-[0.8s] hover:opacity-50">
                      TV40
                    </div>
                    <div className="text-[10px] text-white opacity-50 not-italic font-normal leading-[120%] text-center">
                      expires on 9th October, 2025
                    </div>
                  </div>
                </div>

                {/* single promotion 2 */}
                <div className="flex flex-col p-2 gap-2 border border-[#ffffff0d] rounded-[6px]">
                  {/* sp title */}
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-1 shrink-0"
                      src="/Hero/dimond.svg"
                      alt="Dimond"
                    />
                    <div className="text-[#D4F7F1] text-sm font-semibold leading-tight">
                      25% OFF On All Evaluations ABOVE 75K
                      <span className="text-[##1DAA91] font-[500]">
                        -25% OFF
                      </span>
                    </div>
                  </div>
                  {/* div class sp - text */}
                  <div className="flex items-stretch flex-col gap-2">
                    <div className="flex justify-center items-center text-white text-[12px] not-italic font-bold leading-[1] tracking-[-0.111px] cursor-pointer px-4 py-[5px]  rounded-[4px]  border border-[rgba(29,170,145,0.584)] bg-[linear-gradient(180deg,var(--accent-10,rgba(29,170,145,0.1))_0%,var(--accent-30,rgba(29,170,145,0.3))_100%)] transition-all duration-[0.8s] hover:opacity-50">
                      TV25
                    </div>
                    <div className="text-[10px] text-white opacity-50 not-italic font-normal leading-[120%] text-center">
                      expires on 9th October, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* updates */}
            <div className="flex flex-col gap-4 flex-1 basis-[100%] relative border border-[#ffffff0d] rounded-[6px] overflow-hidden sm:basis-0 before:content-[''] before:w-[256.632px] before:h-[54.785px] before:rotate-[11.567deg] before:absolute before:right-[-55.013px] before:bottom-[0.156px] before:blur-[37.037px] before:z-[-1] before:rounded-[256.632px] before:bg-[#1daa9133]">
              {/* hero title 2 */}
              <div className="text-white text-[18px] not-italic font-medium leading-[120%] tracking-[-0.85px] px-3 py-3">
                Updates
              </div>

              {/* a container */}
              <div className="flex flex-col gap-1 flex-1 px-2">
                {/* single update */}
                <div className="flex flex-col gap-2 border border-[#ffffff0d] rounded-[6px] p-2">
                  {/* sp date */}
                  <div className="text-[#D4F7F1] text-[12px] not-italic font-semibold leading-[130%] opacity-40">
                    September 26, 2025
                  </div>

                  {/* sp title */}
                  <div className="flex items-start gap-2">
                    <img src="/Hero/loading.svg" alt="loading" />
                    <div className="text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%]">
                      TradingView Launched - Powered by Alchemy Markets.
                    </div>
                  </div>
                </div>

                {/* single update 2 */}
                <div className="flex flex-col p-2 gap-2 border border-[#ffffff0d] rounded-[6px]">
                  {/* sp date */}
                  <div className="text-[#D4F7F1] text-[12px] not-italic font-semibold leading-[130%] opacity-40">
                    September 1, 2025
                  </div>

                  {/* sp title */}
                  <div className="flex items-start gap-2">
                    <img src="/Hero/loading.svg" alt="loading" />
                    <div className="text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%]">
                      TradingView Launched - Powered by Alchemy Markets.
                    </div>
                  </div>
                </div>
                {/* single update 3 */}
                <div className="flex flex-col p-2 gap-2 border border-[#ffffff0d] rounded-[6px] mb-2">
                  {/* sp date */}
                  <div className="text-[#D4F7F1] text-[12px] not-italic font-semibold leading-[130%] opacity-40">
                    August 22, 2025
                  </div>

                  {/* sp title */}
                  <div className="flex items-start gap-2">
                    <img src="/Hero/loading.svg" alt="loading" />
                    <div className="text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%]">
                      FXIFY - Winner of the FTA25 - Best Broker Backed Prop Firm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

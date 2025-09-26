import React from 'react';
import ButtonSecondary from '../common/Buttons/ButtonSecondary';
import Marquee from 'react-fast-marquee';

const TrustPilot = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[1440px] w-11/12 mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* left */}
          <div className="flex-1 basis-[100%] md:basis-0 flex flex-col flex-nowrap gap-2">
            {/* top heading */}
            <div className="uppercase text-[#D4F7F1] font-['Source_Code_Pro',monospace] text-[14px] not-italic font-normal leading-[120%] opacity-60">
              What Traders Love
            </div>

            {/* h3 */}
            <h3
              className="w-fit font-sans text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px] 
              bg-[linear-gradient(120deg,#FFF_44.15%,#1DAA91_87.75%)] bg-clip-text text-transparent"
            >
              Hear From Our Traders
            </h3>

            {/* paragraph */}
            <p className="text-white/60 text-[16px] not-italic font-normal leading-[130%]">
              See what our community has to say about their FXIFY experience.
            </p>
            {/* button */}
            <div className="mt-4">
              <ButtonSecondary label={'All reviews'} />
            </div>
          </div>

          {/* right */}
          <div className="border">
            {/* top container */}
            <div className="flex flex-col flex-nowrap items-center gap-2">
              {/* rating */}
              <div className="text-white text-[18px] font-[600] leading-[1] flex items-center gap-2">
                <div>Great</div>
                <img
                  className="w-auto h-[20px]"
                  src="/TrustPilot/tpstars2.svg"
                  alt="tpstarts"
                />
              </div>
              {/* text */}
              <div className="text-white text-[14px] font-[700] leading-[130%] flex items-center gap-1 opacity-70">
                <div>
                  Rated 4.1 / 5 based on <strong>3,191 reviews</strong> on
                </div>
                <img
                  className="h-[18px] w-auto"
                  src="/TrustPilot/trustpilot.svg"
                  alt="trust pilot svg"
                />
              </div>
            </div>

            {/* review container */}
            <div
              className="flex gap-2 h-[400px] overflow-hidden 
            [mask-image:linear-gradient(to_bottom,transparent_0%,#fff_10%,#fff_90%,transparent_100%)] 
            [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#fff_10%,#fff_90%,transparent_100%)] border bg-red-300 w-[100%] p-2"
            >
              <div className="w-[50%] h-full bg-amber-600">
                
                
                
              </div>
              <div className="w-[50%] h-full bg-red-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPilot;

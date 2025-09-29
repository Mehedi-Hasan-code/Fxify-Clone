import React from 'react';

const Company = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto relative py-20 sm:py-28">
      <div className="flex flex-col flex-wrap w-11/12 mx-auto">
        {/* title */}
        <div className="text-4xl text-center sm:text-5xl md:text-6xl tracking-[-1.3px] sm:tracking-[-2.3px] md:tracking-[-3.3px] bg-[linear-gradient(to_right,rgba(255,255,255,0.7)_0.16%,#1DAA91_51.3%,rgba(255,255,255,0.7)_102.45%)] bg-clip-text text-transparent [mask-image:linear-gradient(to_right,rgba(255,255,255,0.1),#fff,rgba(255,255,255,0.1))]">
          Real People. Real Company.
        </div>
        {/* map */}
        <div className="flex self-stretch justify-center border-b border-b-[#ffffff0d]">
          <img className="w-full h-auto" src="/Company/map.svg" alt="map" />
        </div>
        {/* stats */}
        <div className="flex flex-wrap sm:flex-nowrap">
          <div
            className="grow shrink basis-[100%] sm:basis-0
            border-b border-b-[#ffffff0d] border-l border-l-[#ffffff0d] border-r border-r-[#ffffff0d] sm:border-l-transparent sm:border-b-transparent p-4 flex flex-col flex-nowrap gap-2"
          >
            <h3 className="text-white text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px]">
              100+
            </h3>
            <p className="text-[#D4F7F1] text-[16px] not-italic font-medium leading-[120%] w-[auto] lg:w-max max-[992px]:w-auto">
              Dedicated professionals
            </p>
          </div>
          <div
            className="grow shrink basis-[100%] sm:basis-0
            border-b border-b-[#ffffff0d] border-l border-l-[#ffffff0d] border-r border-r-[#ffffff0d] sm:border-l-transparent sm:border-b-transparent p-4 flex flex-col flex-nowrap gap-2"
          >
            <h3 className="text-white text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px]">
              4
            </h3>
            <p className="text-[#D4F7F1] text-[16px] not-italic font-medium leading-[120%] w-[auto] lg:w-max max-[992px]:w-auto">
              Global offices
            </p>
          </div>
          <div
            className="grow shrink basis-[100%] sm:basis-0
            border-b border-b-[#ffffff0d] border-l border-l-[#ffffff0d] border-r border-r-[#ffffff0d] sm:border-l-transparent sm:border-b-transparent p-4 flex flex-col flex-nowrap gap-2"
          >
            <h3 className="text-white text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px]">
              24/5
            </h3>
            <p className="text-[#D4F7F1] text-[16px] not-italic font-medium leading-[120%] w-[auto] lg:w-max max-[992px]:w-auto">
              Professional support
            </p>
          </div>

          <div className="grow shrink basis-[100%]  border-b border-b-[#ffffff0d] border-l border-l-[#ffffff0d] border-r border-r-[#ffffff0d] p-4 gap-2 flex sm:basis-auto sm:flex-col sm:flex-nowrap sm:border-b-transparent sm:border-r-transparent">
            <p className='text-[18px] w-fit text-[#D4F7F1] font-[500] leading-[120%] '>
              A company led by 20+ years of industry experience and part of a
              global group of fintech & FX companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;

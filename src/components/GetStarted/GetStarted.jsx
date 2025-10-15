import React from 'react';
import SectionName from '../common/h,p,tags/SectionName';
import ButtonAdvanced from '../common/Buttons/ButtonAdvanced'
const GetStarted = () => {
  return (
    <div className="bg-[url('/GetStarted/gsbg.svg')] bg-no-repeat bg-center bg-[length:100%_auto] pt-[128px] my-10">
      <div className="max-w-[1440px] w-11/12 mx-auto relative">
        <div className="flex flex-col flex-nowrap items-center gap-4">
          {/* top heading */}
          <SectionName label={'Get Started'} />

          {/* h3 */}
          <h3 className="text-[32px] tracking-[-1.5px] sm:text-[42px] md:text-[48px] sm:tracking-[-2px] text-white text-center font-[500] leading-[120%]">
            Get Funded with the{' '}
            <span className="block bg-gradient-to-b from-white via-white/90 to-[#1DAA91] bg-clip-text text-transparent">
              {' '}
              Most Trusted & Reliable{' '}
            </span>{' '}
            Prop Firm
          </h3>

          {/* paragraph */}
          <p className="max-w-[100%] md:max-w-[40%] text-center text-white/60 text-base font-normal leading-[130%]">
            Join thousands of successful traders getting funded with FXIFY -
            trusted, transparent, and built to support your growth.
          </p>

          {/* cta */}
          <div className='mt-8'>
            <ButtonAdvanced label={'Become a Funded Trader'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

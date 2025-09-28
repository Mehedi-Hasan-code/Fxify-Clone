import React from 'react';
import ButtonAdvanced from '../common/Buttons/ButtonAdvanced';
import ButtonSecondary from '../common/Buttons/ButtonSecondary';

const Top = () => {
  return (
    <>
      {/* top heading */}
      <div className="text-center py-1 px-4 text-[16px] flex justify-center items-center rounded-[100px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.1)] shadow-[0px_4px_6px_1px_rgba(255,255,255,0.05)] uppercase text-[#D4F7F1] not-italic font-normal leading-[120%] opacity-60 font-source-code">
        Your Trusted Trading Partner
      </div>

      {/* h1 */}
      <h1 className="text-center w-fit text-[36px] sm:text-[46px] not-italic font-[500] leading-[120%] tracking-[-1.5px] bg-[linear-gradient(120deg,#FFF_44.15%,#1DAA91_87.75%)] bg-clip-text text-transparent pb-[2px]">
        The Prop Firm Designed
        <br />
        For Every Trader
      </h1>

      {/* paragraph */}
      <p className="max-w-[100%] text-center text-[#D4F7F1] opacity-60 text-[16px] not-italic font-normal leading-[130%] sm:max-w-[40%] mx-auto">
        Join traders worldwide and become a funded trader with the world’s most
        trusted prop firm.
      </p>

      {/* buttons */}
      <div className="flex items-center gap-4 mt-4">
        <ButtonAdvanced label={'Get Funded Now'} />
        <ButtonSecondary label={'Explore Programs'} />
      </div>
    </>
  );
};

export default Top;

import React from 'react';
import ButtonAdvanced from '../common/Buttons/ButtonAdvanced';
import ButtonSecondary from '../common/Buttons/ButtonSecondary';

const Top = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center'>
      <span className="px-4 py-1 text-center rounded-[100px] font-[400]  border uppercase text-[16px] leading-[120%] opacity-[0.6]">
        Your Trusted Trading Partner
      </span>

      <h1 className="text-5xl text-center font-[500] leading-[120%] tracking-[-1.5px]">
        The Prop Firm Designed <br /> For Every Trader
      </h1>

      <p>
        Join traders worldwide and become a funded trader with the world’s most
        trusted prop firm.
      </p>
      <div>
        <ButtonAdvanced label={'Get Funded Now'} />
        <ButtonSecondary label={'Explore Programs'} />
      </div>
    </div>
  );
};

export default Top;

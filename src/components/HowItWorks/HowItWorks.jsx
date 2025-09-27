import React from 'react'
import SectionName from '../common/h,p,tags/SectionName'
import SectionDetails from '../common/h,p,tags/SectionDetails'
import SectionTitle from '../common/h,p,tags/SectionTitle'

const HowItWorks = () => {
  return (
    <div>
      <div className='max-w-[1440px] w-11/12 mx-auto '>
        <div className='flex flex-col flex-nowrap gap-2'>

          {/* Title */}
          <div className='flex justify-start'>
            <SectionName label={'How It Works'} />
          </div>

          {/* Hading */}
          <div>
            <SectionTitle label={'Trade. Get Paid. Repeat'} />
          </div>

          {/* paragraph */}
          <div className='text-[rgba(255,255,255,0.6)] text-[16px] not-italic font-normal leading-[130%] max-w-[90%]'>
          We reward talents. Prove your skills, trade our funds, and earn real income from the markets.
          </div>


          {/* card section */}
          <div className='mt-6 border-t border-[#ffffff0d] flex flex-wrap gap-4'>
            {/* card 1 */}
            <div className='flex-1 basis-[100%] sm:basis-[45%] lg:basis-0 px-[20px] pt-[20px] flex flex-col items-start gap-[19px] self-stretch rounded-[10px] relative bg-[linear-gradient(0deg,rgba(212,247,241,0.05)_0.08%,rgba(212,247,241,0)_99.92%)]'>

              {/* title */}
              <div className='text-[#D4F7F1] text-[18px] not-italic font-semibold leading-[120%]'>Choose Your Program</div>

              {/* text */}
              <div className='text-[#D4F7F1] text-[14px] not-italic font-[300] leading-[140%] opacity-60'>
                <p className='mb-2'>Choose your preferred funded trader program with account sizes up to $400,000 and customise it at checkout to align with your trading style, strategy, and goals.</p>
                <p className='mb-2'>Whether you’re looking for Instant Funding, popular evaluation programs, or something fast and affordable to achieve your trading goals, we have a program for every trader.</p>
              </div>

              {/* image */}
              <div className='grow-0 shrink basis-[220px] w-full'>
                <img className='absolute bottom-0 left-0 w-full h-auto max-h-[220px]' src="/HowItWorks/c1.svg" alt="How it works image" />
              </div>
            </div>

            {/* vertical */}
            <div className='w-[1px] bg-[#ffffff0d] hidden lg:block'></div>

            {/* card 2 */}
            <div className='flex-1 basis-[100%] sm:basis-[45%] lg:basis-0 px-[20px] pt-[20px] flex flex-col items-start gap-[19px] self-stretch rounded-[10px] relative bg-[linear-gradient(0deg,rgba(212,247,241,0.05)_0.08%,rgba(212,247,241,0)_99.92%)]'>

              {/* title */}
              <div className='text-[#D4F7F1] text-[18px] not-italic font-semibold leading-[120%]'>Become a Funded Trader</div>

              {/* text */}
              <div className='text-[#D4F7F1] text-[14px] not-italic font-[300] leading-[140%] opacity-60'>
                <p className='mb-2'>Start trading with your FXIFY account using your unique strategy while maintaining proper risk management practices and sticking within the allowed parameters of the program.</p>
                <p className='mb-2'>Prove your skills, meet all the trading objectives of the program to start earning a real income as an FXIFY-funded trader.</p>
              </div>

              {/* image */}
              <div className='grow-0 shrink basis-[220px] w-full'>
                <img className='absolute bottom-0 left-0 w-full h-auto max-h-[220px]' src="/HowItWorks/c2.svg" alt="How it works image" />
              </div>
            </div>

            {/* vertical */}
            <div className='w-[1px] bg-[#ffffff0d] hidden lg:block'></div>

            {/* card 3 */}
            <div className='flex-1 basis-[100%] sm:basis-[45%] lg:basis-0 px-[20px] pt-[20px] flex flex-col items-start gap-[19px] self-stretch rounded-[10px] relative bg-[linear-gradient(0deg,rgba(212,247,241,0.05)_0.08%,rgba(212,247,241,0)_99.92%)]'>

              {/* title */}
              <div className='text-[#D4F7F1] text-[18px] not-italic font-semibold leading-[120%]'>Get Paid for Your Skills</div>

              {/* text */}
              <div className='text-[#D4F7F1] text-[14px] not-italic font-[300] leading-[140%] opacity-60'>
                <p className='mb-2'>Trade your way to the top, earn up to 90% performance split, and request your first payout on demand. No minimum or maximum amount. </p>
              </div>

              {/* image */}
              <div className='grow-0 shrink basis-[220px] w-full'>
                <img className='absolute bottom-0 left-0 w-full h-auto max-h-[220px]' src="/HowItWorks/c1.svg" alt="How it works image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
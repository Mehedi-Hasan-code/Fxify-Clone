import { CircleCheck } from 'lucide-react'
import React from 'react'

const OurPlatForm = () => {
  return (
    <div>
      <div className='max-w-[1440px] w-11/12 mx-auto'>
      <div className='flex flex-col flex-nowrap gap-2'>
        
        {/* Top Heading */}
        <div className='uppercase text-[#D4F7F1] text-[14px] not-italic font-normal leading-[120%] opacity-60'>Our Platform</div>

        {/* h3 */}
        <h3 className='w-fit text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px] bg-[linear-gradient(120deg,#FFF_44.15%,#1DAA91_87.75%)] bg-clip-text text-transparent'>Broker-Backed, Built to Last</h3>

        {/* paragraph */}
        <p className='text-[rgba(255,255,255,0.6)] text-[16px] not-italic font-normal leading-[130%]'>Led by decades of brokerage and industry expertise, we’ve built a prop firm that is secure, reliable, and sustainable. This is why traders trust us.</p>

        {/* cards */}
        <div className='flex flex-wrap mt-8'>

          {/* big card */}
          <div className='min-h-[450px] sm:min-h-[600px] flex-1 basis-[100%] border-b border-b-[#ffffff0d] gap-0 p-0 flex flex-wrap items-stretch relative'>

            {/* left */}
            <div className='flex-1 basis-[100%] xl:basis-[35%] 2xl:basis-[25%] flex flex-col flex-nowrap gap-4'>
              {/* title */}
              <div className='text-white text-[18px] not-italic font-semibold leading-[120%]'>Industry-leading Dashboard</div>

              {/* text */}
              <div className='text-white text-[14px] not-italic font-light leading-[140%] opacity-60'>Traders need powerful insights, real-time data, and performance tracking in one place. That’s why we created our dashboard, designed to help you optimise your trading and easily track your progress.</div>

              {/* list */}
              <div className='flex flex-col flex-nowrap gap-4'>

                {/* list items 1 */}
                <div className='flex flex-nowrap items-center gap-2'>
                  <CircleCheck color='white' size={16} />
                  <div className='text-white text-[14px] not-italic font-normal leading-[130%] opacity-90'>Advanced Account Metrics</div>
                </div>
                {/* list items 2 */}
                <div className='flex flex-nowrap items-center gap-2'>
                  <CircleCheck color='white' size={16} />
                  <div className='text-white text-[14px] not-italic font-normal leading-[130%] opacity-90'>Comprehensive Trade Journal</div>
                </div>
                {/* list items 3 */}
                <div className='flex flex-nowrap items-center gap-2'>
                  <CircleCheck color='white' size={16} />
                  <div className='text-white text-[14px] not-italic font-normal leading-[130%] opacity-90'>Top Performers Leaderboard</div>
                </div>
                {/* list items 4 */}
                <div className='flex flex-nowrap items-center gap-2'>
                  <CircleCheck color='white' size={16} />
                  <div className='text-white text-[14px] not-italic font-normal leading-[130%] opacity-90'>Trading Central Tools</div>
                </div>

              </div>
            </div>

            {/* right */}
            <div className='flex-1 basis-[100%] flex flex-col flex-nowrap xl:basis-[65%] 2xl:basis-[75%]'>
              <div className='flex-[1_1_220px] w-full flex items-end h-full relative'>
                <img className='absolute left-0 w-full xl:left-[-30%] xl:w-[140%] 2xl:left-[-15%] 2xl:w-[120%]' src="/OurPlatForm/dbv2.png" alt="Image" />
              </div>
            </div>
          </div>

          {/* card 1 */}
          <div className='relative flex flex-wrap items-stretch flex-1 md:grow md:shrink-0 md:basis-0 basis-[100%] p-4 gap-4 md:border-r md:border-r-[#ffffff0d]'>

            {/* left */}
            <div className='flex-1 basis-[100%] flex flex-col flex-nowrap gap-4'>
              {/* title */}
              <div className='text-white text-[18px] not-italic font-semibold leading-[120%]'>Secure & Reliable Payouts</div>

              {/* text */}
              <div className='text-white text-[14px] not-italic font-light leading-[140%] opacity-60'>We have the operational resources and robust financial backing to ensure a fast, secure, and reliable payout experience.</div>
            </div>

            {/* right */}
            <div className='flex-1 basis-[100%] flex flex-col flex-nowrap gap-4'>
              <div className='flex-[1_1_220px] w-full flex items-end'>
                <img className='w-full h-auto' src="/OurPlatForm/db2.svg" alt="Image" />
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className='relative flex flex-wrap items-stretch flex-1 md:grow md:shrink-0 md:basis-0 basis-[100%] p-4 gap-4 md:border-r md:border-r-[#ffffff0d]'>

            {/* left */}
            <div className='flex-1 basis-[100%] flex flex-col flex-nowrap gap-4'>
              {/* title */}
              <div className='text-white text-[18px] not-italic font-semibold leading-[120%]'>Unmatched Trading Conditions</div>

              {/* text */}
              <div className='text-white text-[14px] not-italic font-light leading-[140%] opacity-60'>Choose between RAW price feed or commission-free trading (All-In) at checkout and experience spreads from as low as 0.0 on major FX pairs and Gold.</div>
            </div>

            {/* right */}
            <div className='flex-1 basis-[100%] flex flex-col flex-nowrap gap-4'>
              <div className='flex-[1_1_220px] w-full flex items-end'>
                <img className='w-full h-auto' src="/OurPlatForm/db3.svg" alt="Image" />
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className='relative flex flex-wrap items-stretch flex-1 md:grow md:shrink-0 md:basis-0 basis-[100%] p-4 gap-4'>

            {/* left */}
            <div className='flex-1 basis-[100%] flex flex-col flex-nowrap gap-4'>
              {/* title */}
              <div className='text-white text-[18px] not-italic font-semibold leading-[120%]'>Access to Popular Trading Platforms</div>

              {/* text */}
              <div className='text-white text-[14px] not-italic font-light leading-[140%] opacity-60'>Stick to what you’re comfortable with. Select from widely used trading platforms such as Platform 4, Platform 5, DXTrade, and more.</div>
            </div>

            {/* right */}
            <div className='flex-1 basis-[100%] flex flex-col flex-nowrap gap-4'>
              <div className='flex-[1_1_220px] w-full flex items-end'>
                <img className='w-full h-auto' src="/OurPlatForm/db4.svg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OurPlatForm
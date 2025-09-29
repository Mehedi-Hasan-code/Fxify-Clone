import React from 'react';
import SectionName from '../common/h,p,tags/SectionName';
import SectionTitle from '../common/h,p,tags/SectionTitle';
import SectionDetails from '../common/h,p,tags/SectionDetails';
import ButtonSecondary from '../common/Buttons/ButtonSecondary';
import ButtonAdvanced from '../common/Buttons/ButtonAdvanced';
import { CircleCheck } from 'lucide-react';

const Programs = () => {
  return (
    <div className="relative isolate">
      {/* bg left */}
      <div className="absolute left-0 bottom-0 w-auto h-full z-[-2]">
        <img
          className="h-[200px] max-w-[100%] w-auto sm:h-[300px] lg:h-full -z-10]"
          src="/Programs/prog-left.png"
          alt="prog image"
        />
      </div>

      {/* bg right */}
      <div className="absolute right-0 bottom-0 w-auto h-full">
        <img
          className="h-[200px] max-w-[100%] w-auto sm:h-[300px] lg:h-full z-[-2]"
          src="/Programs/prog-right.png"
          alt="prog image"
        />
      </div>

      {/* section container */}
      <div className="max-w-[1440px] mx-auto w-95/100 relative z-30 pt-32">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col flex-nowrap items-center gap-2">
            {/* top heading */}
            <SectionName label={'PROGRAMS'} />
            <SectionTitle label={`We have a program <br /> for every trader`} />
            <SectionDetails
              label={
                'Whether you’re looking for speed, accessibility, structure, or flexibility — we have everything you need in a prop firm.'
              }
              width='w-[70%]'
            />

            {/* Table */}
            <div className="flex p-4 mt-6 flex-wrap lg:flex-nowrap gap-2 lg:gap-0">
              {/* card 1 */}
              <div className="flex-1 basis-[100%] sm:basis-[45%] lg:basis-0 rounded-[10px] border border-[#ffffff0d] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] z-0 relative min-h-[440px] border-t border-t-[#ffffff0d]  border-b border-b-[#ffffff0d] border-l border-l-[#ffffff0d] lg:my-[calc(-1*16px)] lg:py-4 2xl:min-w-[360px]">
                {/* table inline */}
                <div className="flex flex-col flex-nowrap h-full">
                  {/* table top */}
                  <div className="flex flex-col flex-nowrap">
                    {/* top */}
                    <div className="flex flex-col flex-nowrap gap-4 px-6">
                      {/* title */}
                      <h5 className="text-white text-[20px] not-italic font-semibold leading-[120%] pt-6">
                        Instant Funding
                      </h5>

                      {/* text */}
                      <p className="text-[rgba(255,255,255,0.6)] text-[14px] not-italic font-normal leading-[140%] h-[80px] overflow-hidden">
                        Designed for confident traders seeking the fastest track
                        to funding and ready to start earning from day 1.
                      </p>
                    </div>

                    {/* ribbon - positioned at fixed height */}
                    <div className="text-[13px] not-italic font-normal leading-[120%] uppercase backdrop-blur-[10px] p-2 text-center mt-6 border-t border-b border-[rgba(29,170,145,0.15)] bg-[rgba(29,170,145,0.1)] text-[#1DAA91]">
                      Best Seller
                    </div>

                    {/* list */}
                    <div className="flex flex-col flex-nowrap gap-4 px-6 mt-6">
                      <div className="flex flex-col flex-nowrap gap-4">
                        {/* list items */}
                        {/* item1 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck color='#1DAA91' className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            No trading evaluation
                          </div>
                        </div>

                        {/* item2 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck color='#1DAA91' className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            No targets
                          </div>
                        </div>

                        {/* item 3 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck color='#1DAA91' className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Bi-weekly payouts
                          </div>
                        </div>

                        {/* item 4 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck color='#1DAA91' className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Up to 90% Performance Split
                          </div>
                        </div>

                        {/* item 5 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck color='#1DAA91' className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Up to $50K Starting Capital
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* table bottom */}
                  <div className="mt-auto p-6">
                    <ButtonAdvanced label={'learn more'} width="w-full" />
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="flex-1 basis-[100%] sm:basis-[45%] lg:basis-0 rounded-[10px] border border-[#ffffff0d] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] z-0 relative min-h-[440px] xl:rounded-[0] border-t border-t-[#ffffff0d]  border-b border-b-[#ffffff0d] border-l border-l-[#ffffff0d] lg:rounded-[0px] 2xl:min-w-[360px]">
                {/* table inline */}
                <div className="flex flex-col flex-nowrap h-full">
                  {/* table top */}
                  <div className="flex flex-col flex-nowrap">
                    {/* top */}
                    <div className="flex flex-col flex-nowrap gap-4 px-6">
                      {/* title */}
                      <h5 className="text-white text-[20px] not-italic font-semibold leading-[120%] pt-6">
                        Lightning Challenge
                      </h5>

                      {/* text */}
                      <p className="text-[rgba(255,255,255,0.6)] text-[14px] not-italic font-normal leading-[140%] h-[80px] overflow-hidden">
                        {' '}
                        For those seeking affordability and the fastest way to
                        prove their skills and get funded.{' '}
                      </p>
                    </div>

                    {/* ribbon - positioned at fixed height */}
                    <div className="text-white text-[13px] not-italic font-normal leading-[120%] uppercase border-t border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] p-2 text-center mt-6">
                      Most Accessible
                    </div>

                    {/* list */}
                    <div className="flex flex-col flex-nowrap gap-4 px-6 mt-6">
                      <div className="flex flex-col flex-nowrap gap-4">
                        {/* list items */}
                        {/* item1 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            1-step evaluation
                          </div>
                        </div>

                        {/* item2 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            5% Target
                          </div>
                        </div>

                        {/* item 3 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Program fees from as low as $59
                          </div>
                        </div>

                        {/* item 4 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Up to 90% performance split
                          </div>
                        </div>

                        {/* item 5 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Up to $100,000 starting capital
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* table bottom */}
                  <div className="mt-auto p-6">
                    <ButtonSecondary label={'learn more'} width="w-full" />
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className="flex-1 basis-[100%] sm:basis-[45%] lg:basis-0 rounded-[10px] border border-[#ffffff0d] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] z-0 relative min-h-[440px] xl:rounded-[0] border-t border-t-[#ffffff0d]  border-b border-b-[#ffffff0d] border-l border-l-[#ffffff0d] lg:rounded-[0px] 2xl:min-w-[360px]">
                {/* table inline */}
                <div className="flex flex-col flex-nowrap h-full">
                  {/* table top */}
                  <div className="flex flex-col flex-nowrap">
                    {/* top */}
                    <div className="flex flex-col flex-nowrap gap-4 px-6">
                      {/* title */}
                      <h5 className="text-white text-[20px] not-italic font-semibold leading-[120%] pt-6">
                        Evaluation Programs
                      </h5>

                      {/* text */}
                      <p className="text-[rgba(255,255,255,0.6)] text-[14px] not-italic font-normal leading-[140%] h-[80px] overflow-hidden">
                        For traders who prefer the conventional funded trader
                        route where they would require to prove their skills in
                        an evaluation to get funded.
                      </p>
                    </div>

                    {/* ribbon - positioned at fixed height */}
                    <div className="text-white text-[13px] not-italic font-normal leading-[120%] uppercase border-t border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] p-2 text-center mt-6">
                      Most Popular
                    </div>

                    {/* list */}
                    <div className="flex flex-col flex-nowrap gap-4 px-6 mt-6">
                      <div className="flex flex-col flex-nowrap gap-4">
                        {/* list items */}
                        {/* item1 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            First Payout On Demand
                          </div>
                        </div>

                        {/* item2 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            1-Phase, 2-Phase, & 3-Phase programs available
                          </div>
                        </div>

                        {/* item 3 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Static & Trailing Drawdown available
                          </div>
                        </div>

                        {/* item 4 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Unlimited Trading Days
                          </div>
                        </div>

                        {/* item 5 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Up to 90% Performance Split
                          </div>
                        </div>

                        {/* item 6 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Up to $400,000 starting capital
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* table bottom */}
                  <div className="mt-auto p-6">
                    <ButtonSecondary label={'learn more'} width="w-full" />
                  </div>
                </div>
              </div>

              {/* card 4 */}
              <div className="flex-1 basis-[100%] sm:basis-[45%] lg:basis-0 rounded-[10px] border border-[#ffffff0d] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] z-0 relative min-h-[440px] border-t border-t-[#ffffff0d]  border-b border-b-[#ffffff0d] border-l border-l-[#ffffff0d] lg:rounded-tl-[0px] lg:rounded-bl-[0px] 2xl:min-w-[360px]">
                {/* table inline */}
                <div className="flex flex-col flex-nowrap h-full">
                  {/* table top */}
                  <div className="flex flex-col flex-nowrap">
                    {/* top */}
                    <div className="flex flex-col flex-nowrap gap-4 px-6">
                      {/* title */}
                      <h5 className="text-white text-[20px] not-italic font-semibold leading-[120%] pt-6">
                        Futures Trading
                      </h5>

                      {/* text */}
                      <p className="text-[rgba(255,255,255,0.6)] text-[14px] not-italic font-normal leading-[140%] h-[80px] overflow-hidden">
                        For traders looking to trade futures markets with
                        institutional-grade conditions.
                      </p>
                    </div>

                    {/* ribbon - positioned at fixed height */}
                    <div className="text-white text-[13px] not-italic font-normal leading-[120%] uppercase border-t border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] p-2 text-center mt-6">
                      FXIFY Futures
                    </div>

                    {/* list */}
                    <div className="flex flex-col flex-nowrap gap-4 px-6 mt-6">
                      <div className="flex flex-col flex-nowrap gap-4">
                        {/* list items */}
                        {/* item1 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Funding in 3 days
                          </div>
                        </div>

                        {/* item2 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Free Level 1 data
                          </div>
                        </div>

                        {/* item 3 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Up to 100% performance split
                          </div>
                        </div>

                        {/* item 4 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Payouts every 14 days
                          </div>
                        </div>

                        {/* item 5 */}
                        <div className="flex flex-nowrap items-center gap-2">
                          <CircleCheck className="text-white" size={16} />
                          <div className="text-white text-[14px] not-italic font-normal leading-[130%] opacity-90">
                            Up to $450,000 simulated capital
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* table bottom */}
                  <div className="mt-auto p-6">
                    <ButtonSecondary label={'learn more'} width="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bg bottom */}
      <div className="hidden lg:block absolute w-full h-[100px] bottom-0 left-0 opacity-15 bg-[#1DAA91] mix-blend-lighten blur-[50px] z-20"></div>
    </div>
  );
};

export default Programs;

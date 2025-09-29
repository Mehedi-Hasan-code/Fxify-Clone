import React from 'react';
import ButtonSecondary from '../common/Buttons/ButtonSecondary';
import Marquee from 'react-fast-marquee';
import { CircleCheck } from 'lucide-react';

const TrustPilot = () => {
  return (
    <div className="relative overflow-hidden mb-20 sm:mb-28">
      <div className="max-w-[1440px] w-95/100 mx-auto relative">
        <div className="grid grid-cols-1 gap-10 md:gap-4 md:grid-cols-2">
          {/* left */}
          <div className="flex-1 basis-[100%] md:basis-0 flex flex-col flex-nowrap gap-2 justify-center">
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
          <div className="">
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
            [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#fff_10%,#fff_90%,transparent_100%)] w-[100%] p-2"
            >
              {/* marquee 1 */}
              <div className="w-[50%] h-full flex flex-col gap-6">
                {/* review 1 */}
                <div className="flex flex-col flex-nowrap gap-4 p-4 rounded-[10px] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
                  {/* top */}
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[14px]"
                      src="/TrustPilot/tpstars.svg"
                      alt="tp stars"
                    />
                    <div className="flex items-center gap-1">
                      <CircleCheck size={14} color="#ffffff99" />
                      <p className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
                        Verified
                      </p>
                    </div>
                  </div>

                  {/* middle */}
                  <div className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
                    <span className="text-white font-[600]">Paul, </span>5 day
                    ago
                  </div>

                  {/* bottom */}
                  <div className="flex gap-[6px] flex-col">
                    <div className="text-white text-[14px] not-italic font-bold leading-[120%]">
                      Support agent was very helpful
                    </div>

                    <div className="text-white text-[12px] not-italic font-normal leading-[130%] opacity-80">
                      Support agent was very helpful. Gave me the answers I was
                      looking for. Thanks Anfreas.
                    </div>
                  </div>
                </div>

                {/* review 2 */}
                <div className="flex flex-col flex-nowrap gap-4 p-4 rounded-[10px] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
                  {/* top */}
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[14px]"
                      src="/TrustPilot/tpstars.svg"
                      alt="tp stars"
                    />
                    {/* <div className="flex items-center gap-1">
                      <CircleCheck size={14} color="#ffffff99" />
                      <p className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
                        Verified
                      </p>
                    </div> */}
                  </div>

                  {/* middle */}
                  <div className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
                    <span className="text-white font-[600]">Imran Nawab, </span>
                    A day ago
                  </div>

                  {/* bottom */}
                  <div className="flex gap-[6px] flex-col">
                    <div className="text-white text-[14px] not-italic font-bold leading-[120%]">
                      Smooth process from Buying to payout recieved
                    </div>

                    <div className="text-white text-[12px] not-italic font-normal leading-[130%] opacity-80">
                      Every thing went smooth from buying the account to my
                      first payout. Ofcourse every organizations has some pros
                      and cons which i will experience in next days will be
                      shared in my next review. But at first look everything
                      looks good. Things improved a lot.
                    </div>
                  </div>
                </div>
              </div>

              {/* marquee 2 */}

              <div className="w-[50%] h-full flex flex-col gap-6">
                {/* review 1 */}
                <div className="flex flex-col flex-nowrap gap-4 p-4 rounded-[10px] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
                  {/* top */}
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[14px]"
                      src="/TrustPilot/tpstars.svg"
                      alt="tp stars"
                    />
                    {/* <div className="flex items-center gap-1">
                      <CircleCheck size={14} color="#ffffff99" />
                      <p className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
                        Verified
                      </p>
                    </div> */}
                  </div>

                  {/* middle */}
                  <div className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
                    <span className="text-white font-[600]">Imran Nawab, </span>
                    A day ago
                  </div>

                  {/* bottom */}
                  <div className="flex gap-[6px] flex-col">
                    <div className="text-white text-[14px] not-italic font-bold leading-[120%]">
                      Smooth process from Buying to payout recieved
                    </div>

                    <div className="text-white text-[12px] not-italic font-normal leading-[130%] opacity-80">
                      Every thing went smooth from buying the account to my
                      first payout. Ofcourse every organizations has some pros
                      and cons which i will experience in next days will be
                      shared in my next review. But at first look everything
                      looks good. Things improved a lot.
                    </div>
                  </div>
                </div>

                {/* review 2 */}
                <div className="flex flex-col flex-nowrap gap-4 p-4 rounded-[10px] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]">
                  {/* top */}
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[14px]"
                      src="/TrustPilot/tpstars.svg"
                      alt="tp stars"
                    />
                    <div className="flex items-center gap-1">
                      <CircleCheck size={14} color="#ffffff99" />
                      <p className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
                        Verified
                      </p>
                    </div>
                  </div>

                  {/* middle */}
                  <div className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
                    <span className="text-white font-[600]">Imran Nawab, </span>
                    A day ago
                  </div>

                  {/* bottom */}
                  <div className="flex gap-[6px] flex-col">
                    <div className="text-white text-[14px] not-italic font-bold leading-[120%]">
                      Smooth process from Buying to payout recieved
                    </div>

                    <div className="text-white text-[12px] not-italic font-normal leading-[130%] opacity-80">
                      Every thing went smooth from buying the account to my
                      first payout. Ofcourse every organizations has some pros
                      and cons which i will experience in next days will be
                      shared in my next review. But at first look everything
                      looks good. Things improved a lot.
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

export default TrustPilot;

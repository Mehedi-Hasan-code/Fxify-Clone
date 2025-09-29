import React from 'react';
import { UsersRound } from 'lucide-react';
const Community = () => {
  return (
    <div className="flex-1 basis-[100%] md:basis-[45%] lg:basis-0 p-2 lg:border-r lg:border-r-[#ffffff0d]">
      <div className="rounded-[10px] border border-white/5 bg-[rgba(129,233,215,0.03)] backdrop-blur-[5px] gap-2 flex flex-col h-full">
        {/* header */}
        <div className="overflow-hidden flex items-center px-3 py-2 gap-2 border-b border-white/5 relative  before:content-[''] before:w-[150px] before:h-[25px] before:absolute before:left-[-5px] before:top-[-5px] before:bg-[rgba(29,170,144,0.25)] before:blur-[30px] before:rotate-[33.01deg]">
          <UsersRound color="white" size={16} />
          <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-[120%] tracking-[-0.556px]">
            Community
          </p>
        </div>
        {/* body */}
        <div className="px-2 pb-2 flex flex-col flex-nowrap gap-1 flex-1">
          {/* active traders */}
          <div className="flex-1 rounded-[6px] border border-white/5 flex  items-stretch relative overflow-hidden">
            {/* left */}
            <div className="flex-1 p-5">
              <div className="text-white text-[30px] not-italic font-[500] leading-[120%] tracking-[-1.5px]">
                200K+
              </div>
              <div className="text-[#D4F7F1] text-[16px] not-italic font-normal leading-[120%] tracking-[-1.5px]">
                Active traders
              </div>
            </div>
            {/* right */}
            <div className="flex-1 relative after:content-[''] after:absolute after:right-[-65.967px] after:top-[-0.926px] after:w-[256.632px] after:h-[54.785px] after:rotate-[11.567deg] after:rounded-[256.632px] after:bg-[rgba(29,170,145,0.2)] after:blur-[37.03704px]">
              <img
                className="absolute h-full w-auto right-3 bottom-0"
                src="/Hero/hero-cl.svg"
                alt="hero-cl.svg"
              />
            </div>
          </div>

          {/* Countries */}

          <div className="flex-1 rounded-[6px] border border-white/5 flex p-3 items-center relative overflow-hidden">
            {/* left */}
            <div className="flex-1">
              <img
                src="/Hero/hero-cl2.png"
                alt=""
                className="absolute h-full w-auto left-0 bottom-0 -z-10"
              />
            </div>

            {/* right */}
            <div className="flex-1 text-right relative after:content-[''] after:absolute after:left-[-65.967px] after:top-[-0.926px] after:w-[256.632px] after:h-[54.785px] after:rotate-[11.567deg] after:rounded-[256.632px] after:bg-[rgba(29,170,145,0.2)] after:blur-[37.03704px] p-5">
              <div className="text-white text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px]">
                200
              </div>

              <div className="text-[#D4F7F1] text-[16px] not-italic font-normal leading-[120%]">
                Countries
              </div>
            </div>
          </div>

          {/* social */}

          <div className="flex flex-1 items-stretch gap-2">
            {/* discord */}
            <div className="relative before:content-[''] before:w-[103.196px] before:h-[18.411px] before:absolute before:right-[-14.622px] before:top-[-1.852px] before:bg-[rgba(29,170,145,0.2)] before:blur-[14px] before:transition-all before:duration-[800ms] before:ease-[ease] flex flex-col flex-1 gap-2 items-center justify-center p-2 rounded-[6px] border border-white/5 outline-none  overflow-hidden transition-all duration-[800ms] ease-[ease] no-underline hover:border-[#ffffff1a] hover:before:bg-[rgba(29,170,145,0.5)]">
              {/* icon */}
              <div className="flex justify-center items-center">
                <img
                  src="/Social/discord.svg"
                  className="h-[24px] w-auto drop-shadow-[0_0_1px_#FFFFFF90]"
                  alt="discord"
                />
              </div>
              {/* title */}
              <p className="text-white text-[15px] not-italic font-semibold leading-[120%] tracking-[-0.648px] mt-2">
                41K+
              </p>
              {/* text */}
              <p className="text-[#D4F7F1] text-[12px] not-italic font-normal leading-[120%] tracking-[-0.556px]">
                Members
              </p>
            </div>
            {/* twitter */}
            <div className="relative before:content-[''] before:w-[103.196px] before:h-[18.411px] before:absolute before:right-[-14.622px] before:top-[-1.852px] before:bg-[rgba(29,170,145,0.2)] before:blur-[14px] before:transition-all before:duration-[800ms] before:ease-[ease] flex flex-col flex-1 gap-2 items-center justify-center p-2 rounded-[6px] border border-white/5 outline-none  overflow-hidden transition-all duration-[800ms] ease-[ease] no-underline hover:border-[#ffffff1a] hover:before:bg-[rgba(29,170,145,0.5)]">
              {/* icon */}
              <div className="flex justify-center items-center">
                <img
                  src="/Social/x.svg"
                  className="h-[24px] w-auto drop-shadow-[0_0_1px_#FFFFFF90]"
                  alt="x"
                />
              </div>
              {/* title */}
              <p className="text-white text-[15px] not-italic font-semibold leading-[120%] tracking-[-0.648px] mt-2">
                31K+
              </p>
              {/* text */}
              <p className="text-[#D4F7F1] text-[12px] not-italic font-normal leading-[120%] tracking-[-0.556px]">
                Followers
              </p>
            </div>
            {/* Instagram */}
            <div className="relative before:content-[''] before:w-[103.196px] before:h-[18.411px] before:absolute before:right-[-14.622px] before:top-[-1.852px] before:bg-[rgba(29,170,145,0.2)] before:blur-[14px] before:transition-all before:duration-[800ms] before:ease-[ease] flex flex-col flex-1 gap-2 items-center justify-center p-2 rounded-[6px] border border-white/5 outline-none  overflow-hidden transition-all duration-[800ms] ease-[ease] no-underline hover:border-[#ffffff1a] hover:before:bg-[rgba(29,170,145,0.5)]">
              {/* icon */}
              <div className="flex justify-center items-center">
                <img
                  src="/Social/insta.svg"
                  className="h-[24px] w-auto drop-shadow-[0_0_1px_#FFFFFF90]"
                  alt="Instagram"
                />
              </div>
              {/* title */}
              <p className="text-white text-[15px] not-italic font-semibold leading-[120%] tracking-[-0.648px] mt-2">
                82K+
              </p>
              {/* text */}
              <p className="text-[#D4F7F1] text-[12px] not-italic font-normal leading-[120%] tracking-[-0.556px]">
                Followers
              </p>
            </div>
            {/* fb */}
            <div className="relative before:content-[''] before:w-[103.196px] before:h-[18.411px] before:absolute before:right-[-14.622px] before:top-[-1.852px] before:bg-[rgba(29,170,145,0.2)] before:blur-[14px] before:transition-all before:duration-[800ms] before:ease-[ease] flex flex-col flex-1 gap-2 items-center justify-center p-2 rounded-[6px] border border-white/5 outline-none  overflow-hidden transition-all duration-[800ms] ease-[ease] no-underline hover:border-[#ffffff1a] hover:before:bg-[rgba(29,170,145,0.5)]">
              {/* icon */}
              <div className="flex justify-center items-center">
                <img
                  src="/Social/fb.svg"
                  className="h-[24px] w-auto drop-shadow-[0_0_1px_#FFFFFF90]"
                  alt="facebook"
                />
              </div>
              {/* title */}
              <p className="text-white text-[15px] not-italic font-semibold leading-[120%] tracking-[-0.648px] mt-2">
                16K+
              </p>
              {/* text */}
              <p className="text-[#D4F7F1] text-[12px] not-italic font-normal leading-[120%] tracking-[-0.556px]">
                Likes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

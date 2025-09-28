import React from 'react';
import ButtonAdvanced from '../common/Buttons/ButtonAdvanced';
const DiscordSection = () => {
  return (
    <div className="relative overflow-hidden min-h-[600px]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(114,137,218,0.3)] via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-[1440px] w-11/12 mx-auto relative">
        <div className="flex flex-col flex-nowrap items-center gap-2">
          {/* top heading */}
          <div className="uppercase text-[#7289da] text-[14px] not-italic font-normal leading-[120%] opacity-60 text-center">
            Our Community
          </div>

          {/* h3 */}
          <h3 className="bg-gradient-to-r from-white via-white to-[#7289da] bg-clip-text text-transparent text-center w-fit font-sans text-[30px] font-medium leading-[120%] tracking-[-1.5px]">
            Be part of our <br /> Growing Community
          </h3>

          {/* paragraph */}
          <p className="text-[#bbc5ed99] text-center text-[16px] font-normal leading-[130%]">
            Learn and grow together in a community of experienced and aspiring
            traders alike.
          </p>

          {/* image */}
          <div className="mt-6">
            <img
              className="max-w-full h-auto"
              src="/Social/discord.png"
              alt="discord image"
            />
          </div>

          {/* channels */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center mt-[calc(-1*8px)] xl:mt-[calc(-1*96px)] gap-4 w-full max-w-6xl mx-auto">
            {/* Asset Chats Card */}
            <div className="bg-[linear-gradient(180deg,rgba(114,137,218,0.03)_0%,rgba(114,137,218,0.1)_100%),url('/Discord/ch1.png')] bg-no-repeat bg-[position:center_bottom] bg-[length:100%_auto] flex flex-col flex-nowrap w-full max-w-[400px]  border border-[rgba(114,137,218,0.1)] rounded-[10px] backdrop-blur-[10px] p-6 gap-4 transition-all duration-500 ease-in-out min-h-[220px]">
              {/* heading */}
              <div className="flex items-center gap-[6px] transition-all duration-500 ease-in-out">
                <img
                  className="h-[18px] w-[18px]"
                  src="/Discord/chat.svg"
                  alt=""
                />

                <div className="text-[#7289da] text-[16px] not-italic font-medium leading-[1]">
                  Asset Chats
                </div>
              </div>

              {/* paragraph */}
              <div className="text-[rgba(114,137,218,0.5)] text-[14px] not-italic font-medium leading-[120%]">
                Discuss ideas on specific asset classes.
              </div>

              {/* list */}
              <div className="flex flex-col flex-nowrap gap-3">
                {/* forex-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px]  flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat image"
                    />
                    forex-chat
                  </div>
                </div>

                {/* gold-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px]  flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat image"
                    />
                    gold-chat
                  </div>
                </div>

                {/* indices-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px]  flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat image"
                    />
                    indices-chat
                  </div>
                </div>

                {/* stocks-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px]  flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat image"
                    />
                    stocks-chat
                  </div>
                </div>

                {/* oil-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px]  flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat image"
                    />
                    oil-chat
                  </div>
                </div>

                {/* crypto-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px]  flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat image"
                    />
                    crypto-chat
                  </div>
                </div>
              </div>
            </div>

            {/* Trade Ideas Card */}
            <div className="bg-[linear-gradient(180deg,rgba(114,137,218,0.03)_0%,rgba(114,137,218,0.1)_100%),url('/Discord/ch2.png')] bg-no-repeat bg-[position:center_bottom] bg-[length:100%_auto] flex flex-col flex-nowrap w-full max-w-[400px] border border-[rgba(114,137,218,0.1)] rounded-[10px] backdrop-blur-[10px] p-6 gap-4 transition-all duration-500 ease-in-out min-h-[220px]">
              {/* heading */}
              <div className="flex items-center gap-[6px] transition-all duration-500 ease-in-out">
                <img
                  className="h-[18px] w-[18px]"
                  src="/Discord/chart.svg"
                  alt=""
                />

                <div className="text-[#7289da] text-[16px] not-italic font-medium leading-[1]">
                  Trade Ideas
                </div>
              </div>

              {/* paragraph */}
              <div className="text-[rgba(114,137,218,0.5)] text-[14px] not-italic font-medium leading-[120%]">
                Explore trade ideas from the community.
              </div>

              {/* list */}
              <div className="flex flex-col flex-nowrap gap-3">
                {/* trade-ideas channel */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px]  flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4c8.svg"
                      alt="Chart image"
                    />
                    trade-ideas
                  </div>
                </div>
              </div>
            </div>

            {/* Community Chat Card */}
            <div className="bg-[linear-gradient(180deg,rgba(114,137,218,0.03)_0%,rgba(114,137,218,0.1)_100%),url('/Discord/ch3.png')] bg-no-repeat bg-[position:center_bottom] bg-[length:100%_auto] flex flex-col flex-nowrap w-full max-w-[400px] border border-[rgba(114,137,218,0.1)] rounded-[10px] backdrop-blur-[10px] p-6 gap-4 transition-all duration-500 ease-in-out min-h-[220px]">
              {/* heading */}
              <div className="flex items-center gap-[6px] transition-all duration-500 ease-in-out">
                <img
                  className="h-[18px] w-[18px]"
                  src="/Discord/folder.svg"
                  alt=""
                />

                <div className="text-[#7289da] text-[16px] not-italic font-medium leading-[1]">
                  Community Chat
                </div>
              </div>

              {/* paragraph */}
              <div className="text-[rgba(114,137,218,0.5)] text-[14px] not-italic font-medium leading-[120%]">
                Ask questions, discuss or take on the markets together.
              </div>

              {/* list */}
              <div className="flex flex-col flex-nowrap gap-3">
                {/* ask-questions */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/question.svg"
                      alt="Question icon"
                    />
                    ask-questions
                  </div>
                </div>

                {/* general-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat icon"
                    />
                    general-chat
                  </div>
                </div>

                {/* español-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat icon"
                    />
                    español-chat
                  </div>
                </div>

                {/* competition-chat */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4ac.svg"
                      alt="Chat icon"
                    />
                    competition-chat
                  </div>
                </div>

                {/* trade-ideas */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/1f4c8.svg"
                      alt="Chart icon"
                    />
                    trade-ideas
                  </div>
                </div>

                {/* suggestions */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/bulb.svg"
                      alt="Bulb icon"
                    />
                    suggestions
                  </div>
                </div>

                {/* payout-proof */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/bulb.svg"
                      alt="Bulb icon"
                    />
                    payout-proof
                  </div>
                </div>

                {/* memes */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/haha.svg"
                      alt="Haha icon"
                    />
                    memes
                  </div>
                </div>
              </div>
            </div>

            {/* Announcements Card */}
            <div className="bg-[linear-gradient(180deg,rgba(114,137,218,0.03)_0%,rgba(114,137,218,0.1)_100%),url('/Discord/ch4.png')] bg-no-repeat bg-[position:center_bottom] bg-[length:100%_auto] flex flex-col flex-nowrap w-full max-w-[400px]  border border-[rgba(114,137,218,0.1)] rounded-[10px] backdrop-blur-[10px] p-6 gap-4 transition-all duration-500 ease-in-out relative overflow-hidden min-h-[220px]">
              {/* heading */}
              <div className="flex items-center gap-[6px] transition-all duration-500 ease-in-out">
                <img
                  className="h-[18px] w-[18px]"
                  src="/Discord/megaphone.svg"
                  alt=""
                />

                <div className="text-[#7289da] text-[16px] not-italic font-medium leading-[1]">
                  Announcements
                </div>
              </div>

              {/* paragraph */}
              <div className="text-[rgba(114,137,218,0.5)] text-[14px] not-italic font-medium leading-[120%]">
                Stay updated with the latest news from FXIFY.
              </div>

              {/* list */}
              <div className="flex flex-col flex-nowrap gap-3">
                {/* announcements channel */}
                <div className="flex items-center gap-1">
                  <img
                    src="/Discord/hash.svg"
                    alt="hash.svg"
                    className="h-auto max-w-full"
                  />
                  <div className="text-[#7289da] text-[14px] not-italic font-medium leading-[1] pb-[4px] flex gap-1">
                    <img
                      className="inline !border-none !shadow-none h-[1em] w-[1em] mx-[0.07em] align-[-0.1em] !bg-none p-0"
                      src="/Discord/micke.svg"
                      alt="Megaphone icon"
                    />
                    announcements
                  </div>
                </div>
              </div>

              {/* Decorative 3D Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
                {/* Podium */}
                <div className="absolute bottom-0 right-0 w-16 h-8 bg-gradient-to-t from-[rgba(114,137,218,0.3)] to-[rgba(114,137,218,0.1)] rounded-full blur-sm"></div>
                <div className="absolute bottom-2 right-2 w-12 h-6 bg-gradient-to-t from-[rgba(114,137,218,0.4)] to-[rgba(114,137,218,0.2)] rounded-full"></div>

                {/* Floating Coins */}
                <div className="absolute bottom-8 right-4 w-6 h-6 bg-gradient-to-br from-[rgba(114,137,218,0.4)] to-[rgba(114,137,218,0.2)] rounded-full flex items-center justify-center text-[10px] font-bold text-white blur-[0.5px]">
                  $
                </div>
                <div className="absolute bottom-12 right-8 w-5 h-5 bg-gradient-to-br from-[rgba(114,137,218,0.3)] to-[rgba(114,137,218,0.1)] rounded-full flex items-center justify-center text-[8px] font-bold text-white blur-[0.5px]">
                  $
                </div>

                {/* Light rays */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-radial from-[rgba(114,137,218,0.1)] to-transparent opacity-50"></div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col flex-nowrap items-center gap-2">
            <ButtonAdvanced label={'Join Discord'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordSection;

import ButtonAdvanced from '../common/Buttons/ButtonAdvanced';
import SectionTitle from '../common/h,p,tags/SectionTitle';

const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-11/12 flex flex-col lg:flex-row gap-6 mb-20">
      {/* left - Newsletter Subscription */}
      <div className="flex-1 bg-[url(/Contact/subscribebg.svg)] bg-no-repeat bg-cover bg-center border border-[#ffffff0d] rounded-[10px] relative overflow-hidden">
        <div className="p-[48px] flex flex-col justify-center items-center gap-6 h-full min-h-[400px]">
          <div className="w-[60%]">
            <SectionTitle
              label={
                'Stay Up-to-Date with Latest News, Exclusive Offers, & Updates'
              }
            />
          </div>

          <form className="flex flex-col gap-4 items-center w-full max-w-[400px]">
            <input
              name="name"
              className="border border-[#ffffff0d] rounded-[6px] bg-[#ffffff08] px-[16px] py-[12px] text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 w-full"
              type="text"
              placeholder="Your name*"
              required
            />
            <input
              name="email"
              className="border border-[#ffffff0d] rounded-[6px] bg-[#ffffff08] px-[16px] py-[12px] text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 w-full"
              type="email"
              placeholder="Your email*"
              required
            />
            <div className="w-full max-w-[400px] flex justify-center">
              <ButtonAdvanced label={'Subscribe'} />
            </div>
          </form>
        </div>
      </div>

      {/* right - Discord & Social */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Discord Section */}
        <div className="flex-1 bg-[linear-gradient(180deg,rgba(114,137,218,0.08)_0%,rgba(114,137,218,0.03)_100%)] border border-[rgba(114,137,218,0.15)] rounded-[10px] relative overflow-hidden min-h-[180px]">
          <div className="flex flex-row h-full">
            {/* Discord Content */}
            <div className="flex flex-col justify-center px-7 py-6 flex-1 z-10">
              <div className="text-[16px] text-[#7289da] uppercase leading-tight mb-2">
                JOIN OUR
              </div>
              <h4 className="text-white text-3xl font-semibold tracking-tight mb-4">
                Discord
              </h4>
              <div className="max-w-[120px] mt-[24px]">
                <button className="w-full">
                  <ButtonAdvanced
                    label={'Connect'}
                    border="border-[#7289dacc]"
                    bg="bg-[#7289da80]"
                    hoverBorder="hover:border-[#7289dacc]"
                    hoverBg="bg-[#7289da80]"
                    hoverShadow="hover:shadow-[0px_0px_10px_7px_rgba(114,137,218,0.4)]"
                    discord={true}
                  />
                </button>
              </div>
            </div>

            {/* Discord Background Image */}
            <div className="absolute right-0 top-0 bottom-0 w-full">
              <img
                src="/Contact/discordbg.svg"
                alt="Discord background"
                className="absolute right-0 bottom-0 h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex-1 bg-[linear-gradient(180deg,rgba(114,137,218,0.08)_0%,rgba(114,137,218,0.03)_100%)] border border-[rgba(114,137,218,0.15)] rounded-[10px] relative overflow-hidden min-h-[180px]">
          {/* Social Content */}
          <div className="flex flex-col justify-center px-7 py-6 flex-1 z-10">
            <div className="uppercase text-[#D4F7F1] text-[18px] not-italic font-normal leading-[120%]">
              Follow Us
            </div>
          </div>

          {/* Social Background Image */}
          <div className="absolute top-0 right-0 bottom-0 left-0 ">
            <img
              src="/Contact/socialbg.svg"
              alt="Social background"
              className="absolute top-0 bottom-0 left-48 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

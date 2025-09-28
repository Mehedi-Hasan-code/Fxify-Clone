import { CircleCheck } from 'lucide-react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const HeroMarquee = () => {
  return (
    <div className='overflow-hidden flex gap-4 self-start mt-6 sm:mt-12 w-full [mask-image:linear-gradient(to_right,transparent,#fff,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#fff,transparent)]'>
      <Marquee speed={120} autoFill pauseOnHover style={{ display: 'flex', gap: '16px' }}>
        <div className="flex gap-4">
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Up to $400,000 starting capital</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">First Withdrawal On Demand</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Unlimited Days Available</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Up to 90% Performance Split</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">EAs Allowed</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Backed by a Broker</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Bi-weekly Payouts Available</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Up to $400,000 starting capital</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">First Withdrawal On Demand</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Unlimited Days Available</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Up to 90% Performance Split</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">EAs Allowed</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Backed by a Broker</p>
          </div>
          <div className="flex px-4 py-2 justify-center items-center gap-[6px] rounded-[10px] border border-[rgba(129,233,215,0.1)] bg-[rgba(129,233,215,0.05)]">
            <CircleCheck color = '#D4F7F1' size={18} />
            <p className="text-[#D4F7F1] text-[14px] not-italic font-medium leading-normal opacity-80">Bi-weekly Payouts Available</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default HeroMarquee;

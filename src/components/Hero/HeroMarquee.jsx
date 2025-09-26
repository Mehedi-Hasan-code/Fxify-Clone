import { CircleCheck } from 'lucide-react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const HeroMarquee = () => {
  return (
    <Marquee autoFill pauseOnHover style={{ display: 'flex', gap: '16px' }}>
      <div className="flex gap-4 mt-[48px]">
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Up to $400,000 starting capital</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>First Withdrawal On Demand</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Unlimited Days Available</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Up to 90% Performance Split</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>EAs Allowed</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Backed by a Broker</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Bi-weekly Payouts Available</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Up to $400,000 starting capital</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>First Withdrawal On Demand</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Unlimited Days Available</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Up to 90% Performance Split</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>EAs Allowed</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Backed by a Broker</p>
        </div>
        <div className="flex justify-center items-center gap-[6px] border rounded-[10px] px-4 py-2">
          <CircleCheck size={18} />
          <p>Bi-weekly Payouts Available</p>
        </div>
      </div>
    </Marquee>
  );
};

export default HeroMarquee;

import React from 'react';

import AddOnsMarquee from './AddOnsMarquee';
import SectionName from '../common/h,p,tags/SectionName';
import SectionTitle from '../common/h,p,tags/SectionTitle';
import SectionDetails from '../common/h,p,tags/SectionDetails';

const AddOns = () => {
  return (
    <div className="bg-[url('AddOns/stars.svg'),url('AddOns/addonsbgpng.png'),radial-gradient(120.62%_103.22%_at_50%_0px,rgba(14,16,23,0)_0%,rgba(17,45,46,0.5)_68.07%,rgba(29,170,145,0.6)_100%)] bg-origin-border bg-no-repeat bg-[length:100%_auto,100%_auto,auto] bg-[position:center_top,center_bottom,center] min-h-24 max-w-[1440px] mx-auto w-11/12 border border-[#1daa9126] rounded-[25px] relative before:content-[''] before:absolute before:left-1/2 before:-translate-x-[50%] before:top-[-35%] before:w-[296px] before:h-[251px] before:opacity-60 before:bg-[linear-gradient(25deg,#1DAA91_15.39%,#D4F7F1_54.82%)] before:blur-[100px] before:z-10 overflow-hidden z-0 my-20">
      <div className="py-[96px]">
        {/* text section */}
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2">
            <SectionName label={'ADD-ONS'} />
          </div>
          <div className="mb-1">
            <SectionTitle label={'Tailor your Account'} />
          </div>
          <div className="mb-8">
            <SectionDetails
              label={'Customize your account with unique features at checkout.'}
            />
          </div>
        </div>
        {/* marquee section */}
        <AddOnsMarquee />
      </div>
    </div>
  );
};

export default AddOns;

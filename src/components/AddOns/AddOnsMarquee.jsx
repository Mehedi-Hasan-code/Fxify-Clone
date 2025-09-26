import React from 'react';
import Marquee from 'react-fast-marquee';

const AddOnsMarquee = () => {
  const data = [
    {
      img: '/AddOns/add1.png',
      title: 'Increase Leverage',
      text: 'Amplify your trades with increased leverage of up to 50:1',
    },
    {
      img: '/AddOns/add2.png',
      title: 'Increase Performance Split',
      text: 'Keep more of what you make by increasing your share to 90%.',
    },
    {
      img: '/AddOns/add3.png',
      title: 'Bi-Weekly Payouts',
      text: 'Request payouts more frequently—every two weeks.',
    },
    {
      img: '/AddOns/add4.png',
      title: 'Performance Protect',
      text: 'Withdraw the remaining of your earnings in the event of a drawdown breach.',
    },
    {
      img: '/AddOns/add5.png',
      title: 'Customise Price Feed',
      text: 'Select between RAW  or commission-free (All-in) price feed to suit your strategy.',
    },
  ];
  return (
    <Marquee speed={120} pauseOnHover style={{ display: 'flex', gap: '16px' }}>
      <div className="flex grow shrink-0 flex-row flex-nowrap gap-4 pt-[32px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col flex-nowrap grow shrink-0 basis-[320px] justify-end gap-1 p-4 border border-[#ffffff0d] rounded-[10px] overflow-hidden backdrop-blur-[10px] bg-[#ffffff08]"
          >
            <div className="flex grow shrink basis-[120px] mb-4 min-w-[400px]">
              <img
                src={item.img}
                className="w-full absolute left-0 top-0"
                alt="AddOnsPic"
              />
            </div>
            {/* title */}
            <div className="text-white text-[16px] not-italic font-semibold leading-[120%]">
              {item.title}
            </div>

            {/* text */}
            <div className="text-white text-[14px] not-italic font-medium leading-[16.8px] opacity-60">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default AddOnsMarquee;

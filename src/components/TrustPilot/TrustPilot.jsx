import React, { useEffect, useState } from 'react';
import ButtonSecondary from '../common/Buttons/ButtonSecondary';
import { CircleCheck } from 'lucide-react';

const TrustPilot = () => {
  const [translateY1, setTranslateY1] = useState(0);
  const [translateY2, setTranslateY2] = useState(0);
  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Paul',
      time: '5 day ago',
      title: 'Support agent was very helpful',
      content:
        'Support agent was very helpful. Gave me the answers I was looking for. Thanks Anfreas.',
      verified: true,
    },
    {
      id: 2,
      name: 'Imran Nawab',
      time: 'A day ago',
      title: 'Smooth process from Buying to payout recieved',
      content:
        'Every thing went smooth from buying the account to my first payout. Ofcourse every organizations has some pros and cons which i will experience in next days will be shared in my next review. But at first look everything looks good. Things improved a lot.',
      verified: false,
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      time: '2 days ago',
      title: 'Excellent customer service',
      content:
        'The team was very responsive and helped me through the entire process. Highly recommend!',
      verified: true,
    },
    {
      id: 4,
      name: 'Mike Chen',
      time: '3 days ago',
      title: 'Great platform for traders',
      content:
        'Been using this platform for months now. The interface is clean and the support is top-notch.',
      verified: true,
    },
  ];

  // Estimate height per review (including margin)
  const reviewHeight = 180; // approximate height including gap
  const totalContentHeight = reviews.length * reviewHeight;

  useEffect(() => {
    // Speed of 60 pixels per second (half of 120)
    // 60 pixels/second = 1 pixel per 16.67ms (60fps)
    const speed = 1;
    const intervalTime = 16.67; // ~60fps for smooth animation

    const interval1 = setInterval(() => {
      if (!isPaused1) {
        setTranslateY1((prev) => {
          const newValue = prev - speed;
          // Reset when one full cycle is complete to create seamless loop
          if (Math.abs(newValue) >= totalContentHeight) {
            return 0;
          }
          return newValue;
        });
      }
    }, intervalTime);

    const interval2 = setInterval(() => {
      if (!isPaused2) {
        setTranslateY2((prev) => {
          const newValue = prev + speed;
          // Reset when one full cycle is complete to create seamless loop
          if (newValue >= totalContentHeight) {
            return 0;
          }
          return newValue;
        });
      }
    }, intervalTime);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [totalContentHeight, isPaused1, isPaused2]);

  const renderReview = (review) => (
    <div
      key={review.id}
      className="flex flex-col flex-nowrap gap-4 p-4 rounded-[10px] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)] mb-2"
    >
      {/* top */}
      <div className="flex items-center gap-2">
        <img
          className="h-[14px]"
          src="/TrustPilot/tpstars.svg"
          alt="tp stars"
        />
        {review.verified && (
          <div className="flex items-center gap-1">
            <CircleCheck size={14} color="#ffffff99" />
            <p className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
              Verified
            </p>
          </div>
        )}
      </div>

      {/* middle */}
      <div className="text-white/60 text-[13px] not-italic font-normal leading-[120%]">
        <span className="text-white font-[600]">{review.name}, </span>
        {review.time}
      </div>

      {/* bottom */}
      <div className="flex gap-[6px] flex-col">
        <div className="text-white text-[14px] not-italic font-bold leading-[120%]">
          {review.title}
        </div>

        <div className="text-white text-[12px] not-italic font-normal leading-[130%] opacity-80">
          {review.content}
        </div>
      </div>
    </div>
  );
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
              {/* marquee 1 - bottom to top */}
              <div
                className="w-[50%] h-full relative overflow-hidden"
                onMouseEnter={() => setIsPaused1(true)}
                onMouseLeave={() => setIsPaused1(false)}
              >
                <div
                  className="absolute w-full"
                  style={{
                    transform: `translateY(${translateY1}px)`,
                    transition: 'none',
                  }}
                >
                  {/* First set of reviews */}
                  {reviews.map((review, index) => (
                    <div key={`marquee1-set1-${index}`}>
                      {renderReview({
                        ...review,
                        id: `marquee1-set1-${review.id}-${index}`,
                      })}
                    </div>
                  ))}
                  {/* Second set for seamless loop */}
                  {reviews.map((review, index) => (
                    <div key={`marquee1-set2-${index}`}>
                      {renderReview({
                        ...review,
                        id: `marquee1-set2-${review.id}-${index}`,
                      })}
                    </div>
                  ))}
                  {/* Third set for extra buffer */}
                  {reviews.map((review, index) => (
                    <div key={`marquee1-set3-${index}`}>
                      {renderReview({
                        ...review,
                        id: `marquee1-set3-${review.id}-${index}`,
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* marquee 2 - top to bottom */}
              <div
                className="w-[50%] h-full relative overflow-hidden"
                onMouseEnter={() => setIsPaused2(true)}
                onMouseLeave={() => setIsPaused2(false)}
              >
                <div
                  className="absolute w-full"
                  style={{
                    transform: `translateY(${
                      translateY2 - totalContentHeight
                    }px)`,
                    transition: 'none',
                  }}
                >
                  {/* First set of reviews */}
                  {reviews.map((review, index) => (
                    <div key={`marquee2-set1-${index}`}>
                      {renderReview({
                        ...review,
                        id: `marquee2-set1-${review.id}-${index}`,
                      })}
                    </div>
                  ))}
                  {/* Second set for seamless loop */}
                  {reviews.map((review, index) => (
                    <div key={`marquee2-set2-${index}`}>
                      {renderReview({
                        ...review,
                        id: `marquee2-set2-${review.id}-${index}`,
                      })}
                    </div>
                  ))}
                  {/* Third set for extra buffer */}
                  {reviews.map((review, index) => (
                    <div key={`marquee2-set3-${index}`}>
                      {renderReview({
                        ...review,
                        id: `marquee2-set3-${review.id}-${index}`,
                      })}
                    </div>
                  ))}
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

import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

const FxifyPricing = () => {
  const [activePhase, setActivePhase] = useState(1);
  const [activePrice, setActivePrice] = useState('25k');
  const [twoPhaseType, setTwoPhaseType] = useState('classic');

  const phases = [
    { id: 1, name: 'One Phase' },
    { id: 2, name: 'Two Phase' },
    { id: 3, name: 'Three Phase' },
    { id: 4, name: 'Instant Funding' },
    { id: 5, name: 'Lightning' },
  ];

  const pricingData = {
    1: {
      prices: ['5k', '10k', '15k', '25k', '50k', '100k', '200k', '400k'],
      plans: {
        '5k': {
          price: 159,
          original: 199,
          target: 2500,
          targetPercent: 10,
          dailyLoss: 3,
          maxDrawdown: 6,
          refundable: 100,
        },
        '10k': {
          price: 199,
          original: 249,
          target: 5000,
          targetPercent: 10,
          dailyLoss: 3,
          maxDrawdown: 6,
          refundable: 100,
        },
        '15k': {
          price: 239,
          original: 299,
          target: 7500,
          targetPercent: 10,
          dailyLoss: 3,
          maxDrawdown: 6,
          refundable: 100,
        },
        '25k': {
          price: 159,
          original: 199,
          target: 2500,
          targetPercent: 10,
          dailyLoss: 3,
          maxDrawdown: 6,
          refundable: 100,
        },
        '50k': {
          price: 299,
          original: 399,
          target: 5000,
          targetPercent: 10,
          dailyLoss: 3,
          maxDrawdown: 6,
          refundable: 100,
        },
        '100k': {
          price: 499,
          original: 599,
          target: 10000,
          targetPercent: 10,
          dailyLoss: 3,
          maxDrawdown: 6,
          refundable: 100,
        },
        '200k': {
          price: 899,
          original: 999,
          target: 20000,
          targetPercent: 10,
          dailyLoss: 3,
          maxDrawdown: 6,
          refundable: 100,
        },
        '400k': {
          price: 1599,
          original: 1799,
          target: 40000,
          targetPercent: 10,
          dailyLoss: 3,
          maxDrawdown: 6,
          refundable: 100,
        },
      },
      badge: 'Recommended',
      subtitle: 'One Phase, 1 step',
      drawdownType: 'Trailing',
    },
    2: {
      prices: ['5k', '10k', '15k', '25k', '50k', '100k', '200k', '400k'],
      plans: {
        classic: {
          '5k': {
            price: 47,
            original: 59,
            target: 250,
            targetPercent: 5,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '10k': {
            price: 87,
            original: 109,
            target: 500,
            targetPercent: 5,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '15k': {
            price: 127,
            original: 159,
            target: 750,
            targetPercent: 5,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '25k': {
            price: 187,
            original: 234,
            target: 1250,
            targetPercent: 5,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '50k': {
            price: 327,
            original: 409,
            target: 2500,
            targetPercent: 5,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '100k': {
            price: 547,
            original: 684,
            target: 5000,
            targetPercent: 5,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '200k': {
            price: 847,
            original: 1059,
            target: 10000,
            targetPercent: 5,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '400k': {
            price: 1547,
            original: 1934,
            target: 20000,
            targetPercent: 5,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
        },
        standard: {
          '5k': {
            price: 47,
            original: 59,
            target: 500,
            targetPercent: 10,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '10k': {
            price: 87,
            original: 109,
            target: 1000,
            targetPercent: 10,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '15k': {
            price: 127,
            original: 159,
            target: 1500,
            targetPercent: 10,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '25k': {
            price: 187,
            original: 234,
            target: 2500,
            targetPercent: 10,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '50k': {
            price: 327,
            original: 409,
            target: 5000,
            targetPercent: 10,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '100k': {
            price: 547,
            original: 684,
            target: 10000,
            targetPercent: 10,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '200k': {
            price: 847,
            original: 1059,
            target: 20000,
            targetPercent: 10,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
          '400k': {
            price: 1547,
            original: 1934,
            target: 40000,
            targetPercent: 10,
            dailyLoss: 4,
            maxDrawdown: 10,
            refundable: 100,
          },
        },
      },
      badge: 'For Beginners',
      subtitle: 'Two Phase - Classic, 2 steps',
      drawdownType: 'Static',
    },
    3: {
      prices: ['5k', '10k', '15k', '25k', '50k', '100k', '200k', '400k'],
      plans: {
        '5k': {
          price: 59,
          original: 74,
          target: 250,
          targetPercent: 5,
          dailyLoss: 5,
          maxDrawdown: 5,
          refundable: 100,
        },
        '10k': {
          price: 79,
          original: 99,
          target: 500,
          targetPercent: 5,
          dailyLoss: 5,
          maxDrawdown: 5,
          refundable: 100,
        },
        '15k': {
          price: 99,
          original: 124,
          target: 750,
          targetPercent: 5,
          dailyLoss: 5,
          maxDrawdown: 5,
          refundable: 100,
        },
        '25k': {
          price: 119,
          original: 149,
          target: 1250,
          targetPercent: 5,
          dailyLoss: 5,
          maxDrawdown: 5,
          refundable: 100,
        },
        '50k': {
          price: 199,
          original: 249,
          target: 2500,
          targetPercent: 5,
          dailyLoss: 5,
          maxDrawdown: 5,
          refundable: 100,
        },
        '100k': {
          price: 349,
          original: 437,
          target: 5000,
          targetPercent: 5,
          dailyLoss: 5,
          maxDrawdown: 5,
          refundable: 100,
        },
        '200k': {
          price: 649,
          original: 811,
          target: 10000,
          targetPercent: 5,
          dailyLoss: 5,
          maxDrawdown: 5,
          refundable: 100,
        },
        '400k': {
          price: 1199,
          original: 1499,
          target: 20000,
          targetPercent: 5,
          dailyLoss: 5,
          maxDrawdown: 5,
          refundable: 100,
        },
      },
      badge: 'Recommended',
      subtitle: 'Three Phase, 3 steps',
      drawdownType: 'Static',
    },
    4: {
      prices: ['1k', '2.5k', '5k', '10k', '25k', '50k', '75k', '100k'],
      plans: {
        '1k': {
          price: 79,
          original: 99,
          target: null,
          dailyLoss: 8,
          maxDrawdown: 8,
          refundable: 0,
        },
        '2.5k': {
          price: 159,
          original: 199,
          target: null,
          dailyLoss: 8,
          maxDrawdown: 8,
          refundable: 0,
        },
        '5k': {
          price: 279,
          original: 349,
          target: null,
          dailyLoss: 8,
          maxDrawdown: 8,
          refundable: 0,
        },
        '10k': {
          price: 359,
          original: 449,
          target: null,
          dailyLoss: 8,
          maxDrawdown: 8,
          refundable: 0,
        },
        '25k': {
          price: 799,
          original: 999,
          target: null,
          dailyLoss: 8,
          maxDrawdown: 8,
          refundable: 0,
        },
        '50k': {
          price: 1499,
          original: 1874,
          target: null,
          dailyLoss: 8,
          maxDrawdown: 8,
          refundable: 0,
        },
        '75k': {
          price: 2199,
          original: 2749,
          target: null,
          dailyLoss: 8,
          maxDrawdown: 8,
          refundable: 0,
        },
        '100k': {
          price: 2899,
          original: 3624,
          target: null,
          dailyLoss: 8,
          maxDrawdown: 8,
          refundable: 0,
        },
      },
      badge: 'Most popular',
      subtitle: 'Instant Funding, 0 steps',
      drawdownType: 'Trailing',
    },
    5: {
      prices: ['10k', '25k', '50k', '100k'],
      plans: {
        '10k': {
          price: 159,
          original: 199,
          target: 5000,
          targetPercent: 5,
          dailyLoss: 3,
          maxDrawdown: 4,
          maxDays: 7,
          minDays: 3,
          consistency: 30,
        },
        '25k': {
          price: 239,
          original: 299,
          target: 12500,
          targetPercent: 5,
          dailyLoss: 3,
          maxDrawdown: 4,
          maxDays: 7,
          minDays: 3,
          consistency: 30,
        },
        '50k': {
          price: 279,
          original: 349,
          target: 25000,
          targetPercent: 5,
          dailyLoss: 3,
          maxDrawdown: 4,
          maxDays: 7,
          minDays: 3,
          consistency: 30,
        },
        '100k': {
          price: 319,
          original: 399,
          target: 5000,
          targetPercent: 5,
          dailyLoss: 3,
          maxDrawdown: 4,
          maxDays: 7,
          minDays: 3,
          consistency: 30,
        },
      },
      badge: '---',
      subtitle: 'Lightning, 1 step',
      drawdownType: 'Mandatory SL',
    },
  };

  const currentData = pricingData[activePhase];
  const currentPlan =
    activePhase === 2
      ? currentData.plans[twoPhaseType][activePrice]
      : currentData.plans[activePrice];

  const getCurrentSubtitle = () => {
    if (activePhase === 2) {
      return twoPhaseType === 'classic'
        ? 'Two Phase - Classic, 2 steps'
        : 'Two Phase - Standard, 2 steps';
    }
    return currentData.subtitle;
  };

  const getCurrentDrawdownType = () => {
    if (activePhase === 2) {
      return twoPhaseType === 'classic' ? 'Static' : 'Trailing';
    }
    return currentData.drawdownType;
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-[1440px] w-95/100 mx-auto">
        {/* four grids parent */}
        <div>
          {/* Phase Selection Tabs */}
          <div className="w-full flex flex-nowrap gap-4 justify-center items-center overflow-x-auto">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => {
                  setActivePhase(phase.id);
                  setActivePrice(
                    pricingData[phase.id].prices[3] ||
                      pricingData[phase.id].prices[0]
                  );
                }}
                className={`flex-1 basis-[180px] cursor-pointer transition-all duration-700 ease-in-out shadow-[0_0_10px_3px_rgba(255,255,255,0)] rounded-[16px] relative ${
                  activePhase === phase.id ? '' : ''
                }`}
              >
                {/* outer */}
                <div
                  className="transition-all duration-700 ease-in-out relative before:content-[''] before:absolute before:inset-0 before:p-[2px] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)_border-box] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)_border-box] before:[mask-composite:exclude] before:[-webkit-mask-composite:xor] before:rounded-[16px] before:transition-all before:duration-700 before:ease-in-out before:opacity-30 before:bg-gradient-to-b before:from-[rgba(255,255,255,0.4)] before:to-[rgba(255,255,255,0.2)]
"
                >
                  {/* inner */}
                  <div
                    className={`transition-all duration-700 ease-in-out p-[10px] flex flex-nowrap flex-row gap-4 items-center relative rounded-[16px] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[40%] before:opacity-0 before:rounded-[16px] before:bg-[radial-gradient(80%_100%_at_center_bottom,rgba(255,255,255,0.25),transparent)] cursor-pointer hover:opacity-70 ${
                      activePhase === phase.id
                        ? 'opacity-100 hover:opacity-100'
                        : 'opacity-50'
                    }`}
                  >
                    {/* icon */}
                    <div
                      className={`transition-all duration-700 ease-in-out h-[50px] w-[50px] border-2 border-[rgba(255,255,255,0.2)] rounded-[14px] text-[20px] leading-[1] font-extrabold text-white flex justify-center items-center bg-gradient-to-b from-[rgb(255,255,255)] to-[rgba(255,255,255,0.5)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] overflow-hidden relative`}
                    >
                      {phase.id}
                    </div>

                    {/* title */}
                    <div
                      className={`transition-all duration-700 ease-in-out text-[18px] font-[600] text-white`}
                    >
                      {phase.name}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* account banners */}
          <div className="flex items-stretch gap-3">
            {/* Two Phase Type Selection */}
            {activePhase === 2 && (
              <div className="flex gap-2 mb-6 justify-start max-w-xs">
                <button
                  onClick={() => setTwoPhaseType('classic')}
                  className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                    twoPhaseType === 'classic'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  <div className="text-sm font-medium">Classic</div>
                  <div className="text-xs text-gray-500">Static</div>
                </button>
                <button
                  onClick={() => setTwoPhaseType('standard')}
                  className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                    twoPhaseType === 'standard'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  <div className="text-sm font-medium">Standard</div>
                  <div className="text-xs text-gray-500">Trailing</div>
                </button>
              </div>
            )}

            {/* Discount Banner */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-8 text-center">
              <span className="text-teal-400 font-semibold">20% OFF</span>
              <span className="text-white ml-2">On All Evaluations</span>
              <span className="ml-3 px-3 py-1 bg-teal-900 text-teal-300 rounded-md text-sm font-medium">
                BACKED20
              </span>
            </div>
          </div>

          {/* Price Selection */}
          <div className="w-full flex flex-nowrap items-center relative">
            {currentData.prices.map((price) => (
              <button
                key={price}
                onClick={() => setActivePrice(price)}
                className={`flex flex-col items-center transition-all ${
                  activePrice === price
                    ? 'opacity-100'
                    : 'opacity-50 hover:opacity-75'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 mb-2 flex items-center justify-center ${
                    activePrice === price
                      ? 'border-white bg-white'
                      : 'border-gray-600'
                  }`}
                >
                  {activePrice === price && (
                    <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                  )}
                </div>
                <span
                  className={`text-lg font-semibold ${
                    activePrice === price ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  ${price}
                </span>
              </button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[400px_1fr_350px] gap-5">
            <div>
              {/* Left Panel - Plan Details */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 ">
                {/* card phase */}
                <div className="flex flex-nowrap items-center gap-4">
                  {/* icon */}
                  <div
                    className="transition-all duration-[600ms] ease h-[50px] w-[50px] border border-[rgba(255,255,255,0.2)] rounded-[14px] text-[20px] leading-[1] font-extrabold text-white flex flex-col flex-nowrap justify-start items-center overflow-hidden relative
"
                  >
                    {/* stack transform */}
                    <div
                      className={`flex flex-col flex-nowrap transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.98,-0.01,0.64,0.58)] [transition:all_0.6s_cubic-bezier(0.98,-0.01,0.64,0.58),filter_0.4s_linear] translate-y-[0px]`}
                      style={{
                        transform: `translateY(-${(activePhase - 1) * 50}px)`,
                      }}
                    >
                      <div className="flex-1 basis-[50px] bg-gradient-to-b from-[rgb(255,255,255)] to-[rgba(255,255,255,0.5)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex justify-center items-center">
                        1
                      </div>
                      <div className="flex-1 basis-[50px] bg-gradient-to-b from-[rgb(255,255,255)] to-[rgba(255,255,255,0.5)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex justify-center items-center">
                        2
                      </div>
                      <div className="flex-1 basis-[50px] bg-gradient-to-b from-[rgb(255,255,255)] to-[rgba(255,255,255,0.5)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex justify-center items-center">
                        3
                      </div>
                      <div className="flex-1 basis-[50px] bg-gradient-to-b from-[rgb(255,255,255)] to-[rgba(255,255,255,0.5)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex justify-center items-center">
                        4
                      </div>
                      <div className="flex-1 basis-[50px] bg-gradient-to-b from-[rgb(255,255,255)] to-[rgba(255,255,255,0.5)] [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex justify-center items-center">
                        5
                      </div>
                    </div>
                  </div>
                  {/* title */}
                  <div className="text-xl font-semibold">
                    {phases[activePhase - 1].name}
                  </div>
                </div>

                {/* card badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-lg text-sm">
                    <span className="text-teal-400">✦</span>
                    <span className="text-gray-300">{currentData.badge}</span>
                  </div>
                </div>

                {/* card text */}
                <div className="text-gray-400 mb-2">{getCurrentSubtitle()}</div>

                {/* card price */}
                <div className="mb-8 border">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-teal-400 bg-teal-900 px-2 py-1 rounded">
                      With Code: BACKED20
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 mt-3">
                    <span className="text-4xl font-bold text-teal-400">
                      ${currentPlan.price}
                    </span>
                    <span className="text-2xl text-gray-600 line-through">
                      ${currentPlan.original}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    For ${activePrice} account
                  </div>
                </div>

                {/* cta */}
                <button className="w-full py-4 bg-teal-900 hover:bg-teal-800 text-teal-300 rounded-xl font-semibold transition-colors">
                  Start Trading
                </button>
              </div>

              {/* center - Account Features */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-6">
                  ${activePrice} {phases[activePhase - 1].name} account
                  includes:
                </h3>

                {/* Phase Badges */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {activePhase === 5 && (
                    <>
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        Assessment
                      </span>
                      <span className="px-3 py-1 bg-transparent border border-gray-700 text-gray-500 rounded-full text-sm">
                        Funded
                      </span>
                    </>
                  )}
                  {activePhase === 4 && (
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      Funded
                    </span>
                  )}
                  {activePhase <= 3 && (
                    <>
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        Phase 1
                      </span>
                      {activePhase >= 2 && (
                        <span className="px-3 py-1 bg-transparent border border-gray-700 text-gray-500 rounded-full text-sm">
                          Phase 2
                        </span>
                      )}
                      {activePhase === 3 && (
                        <span className="px-3 py-1 bg-transparent border border-gray-700 text-gray-500 rounded-full text-sm">
                          Phase 3
                        </span>
                      )}
                      <span className="px-3 py-1 bg-transparent border border-gray-700 text-gray-500 rounded-full text-sm">
                        Funded
                      </span>
                    </>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {/* Profit Target */}
                  {currentPlan.target !== null &&
                    currentPlan.target !== undefined && (
                      <div className="flex items-center justify-between py-3 border-b border-gray-800">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-teal-400" />
                          <span className="text-gray-300">Profit Target</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">
                            ${currentPlan.target.toLocaleString()}
                          </span>
                          <span className="px-2 py-1 bg-gray-800 rounded text-sm">
                            {currentPlan.targetPercent}%
                          </span>
                        </div>
                      </div>
                    )}

                  {/* Instant Funding - No Profit Target */}
                  {activePhase === 4 && (
                    <div className="flex items-center justify-between py-3 border-b border-gray-800">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-400" />
                        <span className="text-gray-300">Profit Target</span>
                      </div>
                      <span className="text-white font-semibold">-</span>
                    </div>
                  )}

                  {/* Daily Loss Limit */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-teal-400" />
                      <span className="text-gray-300">Daily Loss Limit</span>
                      <Info className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-white font-semibold">
                      {currentPlan.dailyLoss}%
                    </span>
                  </div>

                  {/* Max Drawdown */}
                  <div className="flex items-center justify-between py-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-teal-400" />
                      <span className="text-gray-300">
                        {activePhase === 5
                          ? 'Max Trailing Drawdown'
                          : activePhase === 2 && twoPhaseType === 'classic'
                          ? 'Max Static Drawdown'
                          : 'Max Trailing Drawdown'}
                      </span>
                      <Info className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-white font-semibold">
                      {currentPlan.maxDrawdown}%
                    </span>
                  </div>

                  {/* Lightning Specific Features */}
                  {activePhase === 5 && (
                    <>
                      <div className="flex items-center justify-between py-3 border-b border-gray-800">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-teal-400" />
                          <span className="text-gray-300">
                            Maximum Trading Days
                          </span>
                        </div>
                        <span className="text-white font-semibold">
                          {currentPlan.maxDays}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-gray-800">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-teal-400" />
                          <span className="text-gray-300">
                            Minimum Trading Days
                          </span>
                        </div>
                        <span className="text-white font-semibold">
                          {currentPlan.minDays}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3 border-b border-gray-800">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-teal-400" />
                          <span className="text-gray-300">
                            Consistency Rule
                          </span>
                        </div>
                        <span className="text-white font-semibold">
                          {currentPlan.consistency}%
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-teal-400" />
                          <span className="text-gray-300">
                            Stop Loss Required?
                          </span>
                        </div>
                        <span className="text-white font-semibold">Yes</span>
                      </div>
                    </>
                  )}

                  {/* Refundable Fee */}
                  {currentPlan.refundable !== undefined && (
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-teal-400" />
                        <span className="text-gray-300">Refundable Fee</span>
                        <Info className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-white font-semibold">
                        {currentPlan.refundable}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Panel - All Plans Include */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6">All plans include:</h3>

              <div className="space-y-6 text-sm">
                {/* Trading Days */}
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-400 mb-1">
                      {activePhase === 4
                        ? 'Minimum Trading Day'
                        : 'Minimum trading days'}
                      <Info className="w-3 h-3 inline ml-1 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 5
                        ? '3 days'
                        : activePhase === 4
                        ? 'N/A'
                        : activePhase === 2 && twoPhaseType === 'classic'
                        ? '4 days'
                        : '5 days'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">
                      {activePhase === 4
                        ? 'Maximum Trading Day'
                        : 'Maximum trading days'}
                      <Info className="w-3 h-3 inline ml-1 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 4
                        ? 'N/A'
                        : activePhase === 5
                        ? 'Unlimited'
                        : 'Unlimited'}
                    </div>
                  </div>
                </div>

                {/* Performance Split & Leverage */}
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-400 mb-1">
                      Performance Split
                      <Info className="w-3 h-3 inline ml-1 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 4 ? 'Up to 90%' : 'Up to 90%'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">
                      Leverage
                      <Info className="w-3 h-3 inline ml-1 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 2 && twoPhaseType === 'classic'
                        ? 'up to 30:1'
                        : 'up to 50:1'}
                    </div>
                  </div>
                </div>

                {/* Drawdown Type & EAs */}
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-400 mb-1">
                      Drawdown Type
                      <Info className="w-3 h-3 inline ml-1 text-gray-600" />
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {getCurrentDrawdownType()}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">EAs Allowed</div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 4 ? 'No' : 'Yes'}
                    </div>
                  </div>
                </div>

                {/* Refund & Weekend */}
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-400 mb-1">Refund</div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 4 ? 'No' : '100%'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Hold Over Weekend</div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 4 ? 'No' : 'Yes'}
                    </div>
                  </div>
                </div>

                {/* News Trading & Platform */}
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-400 mb-1">Trade Through News</div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 4 ? 'No' : 'Yes'}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1">Platform</div>
                    <div className="flex items-center gap-1 text-white">
                      <Check className="w-4 h-4" />
                      {activePhase === 5
                        ? 'Platform 5'
                        : 'MT4, MT5, DXTrade or TradingView'}
                    </div>
                  </div>
                </div>

                {/* Additional Features for Two Phase */}
                {activePhase === 2 && (
                  <div className="flex justify-between">
                    <div>
                      <div className="text-gray-400 mb-1">
                        Drawdown Lock Upon Payout
                      </div>
                      <div className="flex items-center gap-1 text-white">
                        <Check className="w-4 h-4" />
                        {twoPhaseType === 'standard' ? 'Yes' : 'No'}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Payout On Demand</div>
                      <div className="flex items-center gap-1 text-white">
                        <Check className="w-4 h-4" />
                        {twoPhaseType === 'standard' ? 'Yes' : 'No'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Payout Frequency */}
                {activePhase === 2 && (
                  <div className="flex justify-between">
                    <div>
                      <div className="text-gray-400 mb-1">Payout Frequency</div>
                      <div className="flex items-center gap-1 text-white">
                        <Check className="w-4 h-4" />
                        14 or 30 Days
                      </div>
                    </div>
                    <div></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FxifyPricing;

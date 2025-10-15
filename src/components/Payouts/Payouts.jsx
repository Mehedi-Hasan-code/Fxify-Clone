import React from 'react';

const Payouts = () => {
  return (
    <div className="my-20 sm:my-28">
      <div className="max-w-[1440px] w-full mx-auto relative">
        <div className="flex gap-2 flex-col lg:flex-row w-95/100 mx-auto">
          {/* left */}
          <div className="flex flex-col  gap-4">
            {/* top heading */}
            <div className="uppercase text-[#D4F7F1] text-sm  font-normal leading-[120%] opacity-60">
              Payouts
            </div>

            {/* h3 */}
            <h3 className="w-fit font-sans text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px] bg-[linear-gradient(120deg,#FFF_44.15%,#1DAA91_87.75%)] bg-clip-text text-transparent">
              Fast. Reliable. On-Demand.
            </h3>

            {/* paragraph */}
            <p className="text-white/60 font-sans text-[16px] not-italic font-normal leading-[130%]">
              Our traders don’t wait for payouts. Receive your first payout
              <strong> as early as your first funded trading day </strong>
              upon request — minimum amount 50 USD across all accounts.
            </p>

            {/* bottom container */}
            <div className="flex flex-1 flex-wrap md:flex-nowrap border-t border-t-[#ffffff0d]">
              {/* payout container */}
              <div className=" flex flex-col gap-4 pt-4 pr-4 border-r border-r-[#ffffff0d] flex-1 basis-[100%] md:basis-0">
                {/* title */}
                <div className="text-white text-[20px] not-italic font-medium leading-[120%]">
                  Real traders. Real payouts.
                </div>

                {/* payouts */}
                <div className="flex flex-col gap-1 flex-auto [mask-image:linear-gradient(to_bottom,#fff,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#fff,transparent)]">
                  {/* single payout 1 */}
                  <div className="flex p-2 justify-between items-center rounded-[10px] border border-white/5 bg-white/5 gap-2">
                    {/* name */}
                    <div className="text-white text-center text-[13px] not-italic font-medium leading-[120%]">
                      M****** G.
                    </div>
                    {/* country */}
                    <div className="flex flex-row items-center gap-[2px] rounded-[4px] border border-white/5 bg-white/5 px-[4px] py-[2px]">
                      {/* icon */}
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-[100%] h-auto"
                          height={10}
                          width={10}
                          src="/Payout/us.svg"
                          alt="us flag"
                        />
                      </div>

                      {/* text */}
                      <div className="text-white text-[12px] not-italic font-semibold leading-[1]">
                        US
                      </div>
                    </div>
                    {/* amount */}
                    <div className="ml-auto text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%] tracking-[-0.6px]">
                      $119,698.65
                    </div>
                  </div>
                  {/* single payout 2 */}
                  <div className="flex p-2 justify-between items-center rounded-[10px] border border-white/5 bg-white/5 gap-2">
                    {/* name */}
                    <div className="text-white text-center text-[13px] not-italic font-medium leading-[120%]">
                      R**** I.
                    </div>
                    {/* country */}
                    <div className="flex flex-row items-center gap-[2px] rounded-[4px] border border-white/5 bg-white/5 px-[4px] py-[2px]">
                      {/* icon */}
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-[100%] h-auto"
                          height={10}
                          width={10}
                          src="/Payout/us.svg"
                          alt="us flag"
                        />
                      </div>

                      {/* text */}
                      <div className="text-white text-[12px] not-italic font-semibold leading-[1]">
                        US
                      </div>
                    </div>
                    {/* amount */}
                    <div className="ml-auto text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%] tracking-[-0.6px]">
                      $119,698.65
                    </div>
                  </div>
                  {/* single payout 3 */}
                  <div className="flex p-2 justify-between items-center rounded-[10px] border border-white/5 bg-white/5 gap-2">
                    {/* name */}
                    <div className="text-white text-center text-[13px] not-italic font-medium leading-[120%]">
                      S********* S.
                    </div>
                    {/* country */}
                    <div className="flex flex-row items-center gap-[2px] rounded-[4px] border border-white/5 bg-white/5 px-[4px] py-[2px]">
                      {/* icon */}
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-[100%] h-auto"
                          height={10}
                          width={10}
                          src="/Payout/id.svg"
                          alt="us flag"
                        />
                      </div>

                      {/* text */}
                      <div className="text-white text-[12px] not-italic font-semibold leading-[1]">
                        ID
                      </div>
                    </div>
                    {/* amount */}
                    <div className="ml-auto text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%] tracking-[-0.6px]">
                      $67,202.38
                    </div>
                  </div>
                  {/* single payout 4 */}
                  <div className="flex p-2 justify-between items-center rounded-[10px] border border-white/5 bg-white/5 gap-2">
                    {/* name */}
                    <div className="text-white text-center text-[13px] not-italic font-medium leading-[120%]">
                      O**** K.
                    </div>
                    {/* country */}
                    <div className="flex flex-row items-center gap-[2px] rounded-[4px] border border-white/5 bg-white/5 px-[4px] py-[2px]">
                      {/* icon */}
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-[100%] h-auto"
                          height={10}
                          width={10}
                          src="/Payout/gb.svg"
                          alt="us flag"
                        />
                      </div>

                      {/* text */}
                      <div className="text-white text-[12px] not-italic font-semibold leading-[1]">
                        GB
                      </div>
                    </div>
                    {/* amount */}
                    <div className="ml-auto text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%] tracking-[-0.6px]">
                      $62,625.05
                    </div>
                  </div>
                  {/* single payout 5 */}
                  <div className="flex p-2 justify-between items-center rounded-[10px] border border-white/5 bg-white/5 gap-2">
                    {/* name */}
                    <div className="text-white text-center text-[13px] not-italic font-medium leading-[120%]">
                      A**** N.
                    </div>
                    {/* country */}
                    <div className="flex flex-row items-center gap-[2px] rounded-[4px] border border-white/5 bg-white/5 px-[4px] py-[2px]">
                      {/* icon */}
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-[100%] h-auto"
                          height={10}
                          width={10}
                          src="/Payout/gb.svg"
                          alt="us flag"
                        />
                      </div>

                      {/* text */}
                      <div className="text-white text-[12px] not-italic font-semibold leading-[1]">
                        GB
                      </div>
                    </div>
                    {/* amount */}
                    <div className="ml-auto text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%] tracking-[-0.6px]">
                      $67,202.38
                    </div>
                  </div>
                  {/* single payout 6 */}
                  <div className="flex p-2 justify-between items-center rounded-[10px] border border-white/5 bg-white/5 gap-2">
                    {/* name */}
                    <div className="text-white text-center text-[13px] not-italic font-medium leading-[120%]">
                      T****** T.
                    </div>
                    {/* country */}
                    <div className="flex flex-row items-center gap-[2px] rounded-[4px] border border-white/5 bg-white/5 px-[4px] py-[2px]">
                      {/* icon */}
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-[100%] h-auto"
                          height={10}
                          width={10}
                          src="/Payout/us.svg"
                          alt="us flag"
                        />
                      </div>

                      {/* text */}
                      <div className="text-white text-[12px] not-italic font-semibold leading-[1]">
                        US
                      </div>
                    </div>
                    {/* amount */}
                    <div className="ml-auto text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%] tracking-[-0.6px]">
                      $55,554.05
                    </div>
                  </div>
                  {/* single payout 7 */}
                  <div className="flex p-2 justify-between items-center rounded-[10px] border border-white/5 bg-white/5 gap-2">
                    {/* name */}
                    <div className="text-white text-center text-[13px] not-italic font-medium leading-[120%]">
                      R*** K.
                    </div>
                    {/* country */}
                    <div className="flex flex-row items-center gap-[2px] rounded-[4px] border border-white/5 bg-white/5 px-[4px] py-[2px]">
                      {/* icon */}
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-[100%] h-auto"
                          height={10}
                          width={10}
                          src="/Payout/in.svg"
                          alt="us flag"
                        />
                      </div>

                      {/* text */}
                      <div className="text-white text-[12px] not-italic font-semibold leading-[1]">
                        IN
                      </div>
                    </div>
                    {/* amount */}
                    <div className="ml-auto text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%] tracking-[-0.6px]">
                      $51,438.60
                    </div>
                  </div>
                  {/* single payout 8 */}
                  <div className="flex p-2 justify-between items-center rounded-[10px] border border-white/5 bg-white/5 gap-2">
                    {/* name */}
                    <div className="text-white text-center text-[13px] not-italic font-medium leading-[120%]">
                      S***** A.
                    </div>
                    {/* country */}
                    <div className="flex flex-row items-center gap-[2px] rounded-[4px] border border-white/5 bg-white/5 px-[4px] py-[2px]">
                      {/* icon */}
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-[100%] h-auto"
                          height={10}
                          width={10}
                          src="/Payout/gb.svg"
                          alt="us flag"
                        />
                      </div>

                      {/* text */}
                      <div className="text-white text-[12px] not-italic font-semibold leading-[1]">
                        GB
                      </div>
                    </div>
                    {/* amount */}
                    <div className="ml-auto text-[#D4F7F1] text-[13px] not-italic font-semibold leading-[120%] tracking-[-0.6px]">
                      $50,472.00
                    </div>
                  </div>
                </div>
              </div>

              {/* stats container */}
              <div className="flex flex-col flex-[1_1_0] bg-[url('/Payout/payouts3.svg'),_linear-gradient(to_bottom,rgba(29,170,145,0.05),transparent)] bg-no-repeat bg-[length:100%_auto] [background-position:top_center]">
                {/* stats 1 */}
                <div className="flex-1 flex flex-col p-4 gap-1 border-b border-b-[#ffffff0d]">
                  {/* title */}
                  <div className="text-white text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px]">
                    $30M+
                  </div>

                  {/* text */}
                  <div className="text-[#D4F7F1] text-[16px] not-italic font-normal leading-[120%]">
                    Paid to Traders
                  </div>
                </div>

                {/* stats 2 */}
                <div className="flex-1 flex flex-col p-4 gap-1">
                  {/* title */}
                  <div className="text-white text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px]">
                    200K+
                  </div>

                  {/* text */}
                  <div className="text-[#D4F7F1] text-[16px] not-italic font-normal leading-[120%]">
                    Payouts Made
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col sm:flex-row">

            {/* compare table fxify */}
            <div className="flex-1 flex flex-col overflow-hidden relative rounded-[10px] border border-[rgba(29,170,145,0.1)] bg-[rgba(29,170,145,0.05)] backdrop-blur-[5px] before:content-[''] before:absolute before:left-1/2 before:bottom-[-40px] before:w-[277.162px] before:h-[131.736px] before:-translate-x-1/2 before:rounded-[277.162px] before:bg-[rgba(29,170,145,0.2)] before:blur-[40px] sm:w-[50%] h-fit">
              {/* header */}
              <div className=" border-b border-b-[#ffffff0d] flex flex-col items-center justify-center gap-2 p-4 shrink-0 grow-0 basis-[110px]">
                <img className="w-[45px]" src="/Payout/l1.svg" alt="" />
                <div className="text-white text-center text-[16px] not-italic font-bold leading-normal tracking-[-0.7px] max-w-[70%]">
                  FXIFY™ On-Demand Payouts
                </div>
              </div>

              {/* row 1 */}
              <div className="text-[#D4F7F1] border-b border-b-[#ffffff0d] px-6 py-6 text-center text-[14px] not-italic font-medium leading-[140%]">
                <strong className="font-bold">No minimum trading days</strong>—
                request & receive payouts instantly from the first funded
                trading day
              </div>
              {/* row 2 */}
              <div className="text-[#D4F7F1] border-b border-b-[#ffffff0d] px-6 py-6 text-center text-[14px] not-italic font-medium leading-[140%]">
                <strong className="font-bold">No minimum targets</strong> — open
                & close a successful trade then request your first payout,
                applies for 1,2 and 3 Phase Evaluation accounts
              </div>
              {/* row 3 */}
              <div className="text-[#D4F7F1] border-b border-b-[#ffffff0d] px-6 py-6 text-center text-[14px] not-italic font-medium leading-[140%]">
                <strong className="font-bold">
                  No limits on the withdrawal
                </strong>
                amount with up to 90% performance split
              </div>
              {/* row */}
              <div className="text-[#D4F7F1] px-6 py-6 text-center text-[14px] not-italic font-medium leading-[140%]">
                <strong className="font-bold">No fine print</strong> — pass our
                challenges, get funded, and request your first payout on demand
              </div>
            </div>

            {/* compare table others */}
            <div className="opacity-60 border border-transparent flex flex-col relative sm:w-[50%]">
              {/* header */}
              <div className="border-b border-b-[#ffffff0d] flex flex-col items-center justify-center gap-2 p-4 flex-[0_0_110px]">
                {/* title */}
                <div className="text-white text-center text-[16px] not-italic font-bold leading-normal tracking-[-0.7px] max-w-[70%]">
                  {' '}
                  Other Prop Firms’ On-Demand Payouts
                </div>
              </div>

              {/* row 1 */}
              <div className="text-white border-b border-b-[#ffffff0d] px-4 py-6 text-center text-[14px] not-italic font-medium leading-[140%]">
                <strong>Up to 14 minimum trading days</strong>
                before you can request your first payout from your funded
                account
              </div>
              {/* row 2 */}
              <div className="text-white border-b border-b-[#ffffff0d] px-4 py-6 text-center text-[14px] not-italic font-medium leading-[140%]">
                <strong>Minimum targets required</strong>
                before qualifying for on-demand payouts
              </div>
              {/* row 3 */}
              <div className="text-white border-b border-b-[#ffffff0d] px-4 py-6 text-center text-[14px] not-italic font-medium leading-[140%]">
                <strong>Limits on withdrawal</strong>
                amount and performance split
              </div>
              {/* row4 */}
              <div className="text-white px-4 py-6 text-center text-[14px] not-italic font-medium leading-[140%]">
                <strong>Several fine prints</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;

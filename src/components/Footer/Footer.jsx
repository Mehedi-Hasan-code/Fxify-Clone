import React from 'react';

const Footer = () => {
  return (
    <div className="w-full pt-10">
      <div className="border border-[rgba(194,208,228,0.15)] backdrop-blur-[20px] rounded-t-[40px] py-[30px] px-4 sm:px-6 md:px-10 lg:px-12 bg-no-repeat bg-cover bg-[0%_0%] overflow-hidden w-95/100 mx-auto">
        {/* links */}
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 px-6">
          {/* flex item 1 */}
          <div className="w-full col-span-2 md:col-span-1 py-4 flex flex-col sm:p-5 lg:p-6">
            {/* logo */}
            <div className="mt-4">
              <span>
                <img
                  className="w-[150px] sm:w-[182px] h-auto"
                  src="/Navbar/ftm.svg"
                  alt=""
                />
              </span>
            </div>

            {/* footer social */}
            <div className="mt-8">
              {/* flex */}
              <div className="flex items-center flex-nowrap">
                {/* discord */}
                <div className="group flex justify-center items-center rounded-full p-1 transition-all duration-200 hover:scale-105 hover:bg-[#5865F2]/15 cursor-pointer">
                  <span className="flex justify-center items-center">
                    <svg
                      className="opacity-80 transition-all duration-200 text-white group-hover:text-[#5865F2] group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_#5865F299]"
                      height="30"
                      viewBox="0 0 34 27"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="discord-gradient-f"
                          x2="1"
                          y2="1"
                          gradientTransform="rotate(45)"
                        >
                          <stop offset="0%" stop-color="#ffffff"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M27.8653 3.68279C27.8566 3.66609 27.8422 3.653 27.8247 3.64588C25.7994 2.72348 23.6622 2.06574 21.4664 1.68911C21.4465 1.68543 21.4258 1.68809 21.4075 1.6967C21.3892 1.70532 21.374 1.71945 21.3642 1.7371C21.0732 2.26143 20.809 2.80001 20.5727 3.35077C18.2058 2.99412 15.7982 2.99412 13.4313 3.35077C13.1934 2.79861 12.925 2.2599 12.6273 1.7371C12.617 1.71984 12.6018 1.70603 12.5836 1.69747C12.5654 1.68891 12.545 1.686 12.525 1.68911C10.3291 2.06495 8.19165 2.72274 6.16662 3.64593C6.14928 3.65322 6.13466 3.66568 6.12475 3.68158C2.07509 9.68475 0.965733 15.5403 1.50995 21.3234C1.51148 21.3376 1.51586 21.3513 1.52285 21.3637C1.52983 21.3762 1.53926 21.3871 1.55059 21.3959C3.90867 23.129 6.54621 24.452 9.35066 25.3082C9.37041 25.3141 9.3915 25.3138 9.4111 25.3075C9.43069 25.3011 9.44785 25.2889 9.46026 25.2726C10.0626 24.459 10.5963 23.5975 11.056 22.6969C11.0623 22.6845 11.0659 22.671 11.0666 22.6572C11.0672 22.6433 11.0649 22.6295 11.0598 22.6166C11.0547 22.6037 11.0469 22.592 11.0369 22.5823C11.0269 22.5727 11.015 22.5652 11.0018 22.5604C10.1602 22.2408 9.34542 21.8554 8.5651 21.408C8.55093 21.3998 8.53903 21.3881 8.53044 21.3742C8.52186 21.3603 8.51686 21.3445 8.51589 21.3282C8.51492 21.3119 8.518 21.2956 8.52487 21.2808C8.53174 21.266 8.54218 21.2531 8.55528 21.2432C8.71901 21.1214 8.88285 20.9947 9.03919 20.8668C9.05308 20.8555 9.06989 20.8482 9.08772 20.8458C9.10556 20.8434 9.12371 20.846 9.14013 20.8533C14.2523 23.1692 19.7869 23.1692 24.8386 20.8533C24.855 20.8455 24.8734 20.8426 24.8915 20.8448C24.9096 20.8469 24.9267 20.8542 24.9408 20.8656C25.0972 20.9935 25.261 21.1214 25.4259 21.2432C25.4391 21.253 25.4496 21.2658 25.4566 21.2806C25.4636 21.2953 25.4668 21.3116 25.4659 21.3279C25.4651 21.3442 25.4602 21.36 25.4517 21.374C25.4432 21.388 25.4314 21.3997 25.4173 21.408C24.6388 21.8592 23.8232 22.2443 22.9794 22.5592C22.9663 22.5642 22.9544 22.5718 22.9445 22.5816C22.9345 22.5915 22.9268 22.6033 22.9218 22.6163C22.9168 22.6293 22.9146 22.6432 22.9154 22.6571C22.9161 22.671 22.9199 22.6845 22.9263 22.6969C23.3936 23.5925 23.9266 24.4529 24.5208 25.2711C24.5328 25.2879 24.5499 25.3005 24.5696 25.3071C24.5892 25.3138 24.6105 25.3141 24.6304 25.3081C27.4398 24.4547 30.082 23.1317 32.443 21.3959C32.4545 21.3876 32.4641 21.3769 32.4711 21.3646C32.4781 21.3523 32.4824 21.3387 32.4837 21.3246C33.1352 14.6388 31.3929 8.83119 27.8653 3.68279ZM11.8194 17.8021C10.2803 17.8021 9.0121 16.4001 9.0121 14.6782C9.0121 12.9563 10.2557 11.5541 11.8194 11.5541C13.3954 11.5541 14.6513 12.9685 14.6267 14.6781C14.6267 16.4001 13.3831 17.8021 11.8194 17.8021ZM22.199 17.8021C20.6599 17.8021 19.3917 16.4001 19.3917 14.6782C19.3917 12.9563 20.6353 11.5541 22.199 11.5541C23.7751 11.5541 25.0309 12.9685 25.0063 14.6781C25.0063 16.4001 23.7751 17.8021 22.199 17.8021Z"></path>
                    </svg>
                  </span>
                </div>

                {/* twitter */}
                <div className="group flex justify-center items-center rounded-full p-1 transition-all duration-200 hover:scale-105 hover:bg-[#1DA1F2]/15 cursor-pointer">
                  <span className="flex justify-center items-center">
                    <svg
                      className="opacity-80 transition-all duration-200 text-white group-hover:text-[#1DA1F2] group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_#1DA1F299]"
                      height="30"
                      viewBox="0 0 27 27"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="twitter-gradient-f"
                          x2="1"
                          y2="1"
                          gradientTransform="rotate(45)"
                        >
                          <stop offset="0%" stop-color="#ffffff"></stop>
                          <stop offset="100%" stop-color="#ffffff"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M24.2246 8.00023C24.2417 8.24007 24.2417 8.47996 24.2417 8.71979C24.2417 16.0351 18.6739 24.4641 8.49746 24.4641C5.36229 24.4641 2.44988 23.556 0 21.98C0.445447 22.0313 0.873703 22.0485 1.33629 22.0485C3.92317 22.0485 6.30455 21.1748 8.20621 19.6843C5.77346 19.6329 3.73475 18.0396 3.03233 15.8467C3.375 15.898 3.71762 15.9323 4.07742 15.9323C4.57423 15.9323 5.0711 15.8638 5.53363 15.7439C2.99811 15.2299 1.0964 13.0028 1.0964 10.3131V10.2446C1.83305 10.6557 2.68972 10.9127 3.59764 10.9469C2.10716 9.95325 1.13068 8.25721 1.13068 6.33841C1.13068 5.31051 1.40474 4.36826 1.88446 3.54592C4.60846 6.90378 8.70302 9.09663 13.2943 9.33652C13.2087 8.92535 13.1573 8.49709 13.1573 8.06879C13.1573 5.01926 15.6243 2.53516 18.6909 2.53516C20.2842 2.53516 21.7232 3.2033 22.7341 4.28262C23.9846 4.04278 25.1839 3.58019 26.2461 2.94633C25.8349 4.23125 24.9612 5.31057 23.8134 5.9958C24.927 5.87593 26.0063 5.56749 26.9999 5.13923C26.2462 6.23563 25.3039 7.21212 24.2246 8.00023Z"></path>
                    </svg>
                  </span>
                </div>

                {/* instagram */}
                <div className="group flex justify-center items-center rounded-full p-1 transition-all duration-200 hover:scale-105 hover:bg-[#E4405F]/15 cursor-pointer">
                  <span className="flex justify-center items-center">
                    <svg
                      className="opacity-80 transition-all duration-200 text-white group-hover:text-[#E4405F] group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_#E4405F99]"
                      height="30"
                      viewBox="0 0 20 21"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="instagram-gradient-f"
                          x2="1"
                          y2="1"
                          gradientTransform="rotate(45)"
                        >
                          <stop offset="0%" stop-color="#ffffff"></stop>
                          <stop offset="20%" stop-color="#ffffff"></stop>
                          <stop offset="50%" stop-color="#ffffff"></stop>
                          <stop offset="70%" stop-color="#ffffff"></stop>
                          <stop offset="100%" stop-color="#ffffff"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M15.14 0.5H4.85999C2.17999 0.5 0 2.68 0 5.36V15.64C0 18.32 2.17999 20.5 4.85999 20.5H15.14C17.82 20.5 20 18.32 20 15.64V5.36C20 2.68 17.82 0.5 15.14 0.5ZM15.15 6.41C14.58 6.41 14.12 5.95 14.12 5.39C14.12 4.82 14.58 4.36 15.15 4.36C15.71 4.36 16.17 4.82 16.17 5.39C16.17 5.95 15.71 6.41 15.15 6.41ZM10 6.18C12.38 6.18 14.32 8.12 14.32 10.5C14.32 12.88 12.38 14.82 10 14.82C7.62 14.82 5.67999 12.88 5.67999 10.5C5.67999 8.12 7.62 6.18 10 6.18Z"></path>
                    </svg>
                  </span>
                </div>

                {/* facebook */}
                <div className="group flex justify-center items-center rounded-full p-1 transition-all duration-200 hover:scale-105 hover:bg-[#1877F2]/15 cursor-pointer">
                  <span className="flex justify-center items-center">
                    <svg
                      className="opacity-80 transition-all duration-200 text-white group-hover:text-[#1877F2] group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_#1877F299]"
                      height="30"
                      viewBox="0 0 17 27"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="fb-gradient-f"
                          x2="1"
                          y2="1"
                          gradientTransform="rotate(45)"
                        >
                          <stop offset="0%" stop-color="#ffffff"></stop>
                          <stop offset="100%" stop-color="#ffffff"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M14.8291 15.1875L15.5845 10.3011H10.8612V7.13022C10.8612 5.7934 11.521 4.49033 13.6364 4.49033H15.7838V0.330117C15.7838 0.330117 13.8351 0 11.972 0C8.08223 0 5.53966 2.34035 5.53966 6.57703V10.3011H1.21582V15.1875H5.53966V27H10.8612V15.1875H14.8291Z"></path>
                    </svg>
                  </span>
                </div>

                {/* tiktok */}
                <div className="group flex justify-center items-center rounded-full p-1 transition-all duration-200 hover:scale-105 hover:bg-[#25F4EE]/15 cursor-pointer">
                  <span className="flex justify-center items-center">
                    <svg
                      className="opacity-80 transition-all duration-200 text-white group-hover:text-[#25F4EE] group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_#25F4EE99]"
                      height="28"
                      viewBox="0 0 21 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 9.84375V5.76562C20.9531 5.76562 20.9531 5.76562 20.9531 5.76562C19.8281 5.76562 18.75 5.4375 17.8594 4.82812C16.5469 3.98438 15.6094 2.625 15.3281 1.07812C15.2344 0.75 15.2344 0.421875 15.2344 0.09375C15.2344 0.046875 15.2344 0.046875 15.2344 0H11.1094V16.4062C11.1094 18.3281 9.51562 19.9219 7.59375 19.9219C5.67188 19.9219 4.07812 18.3281 4.07812 16.4062C4.07812 14.4844 5.67188 12.8906 7.59375 12.8906C7.96875 12.8906 8.29688 12.9375 8.67188 13.0781V8.85938C8.29688 8.8125 7.96875 8.76562 7.59375 8.76562C3.375 8.76562 0 12.1875 0 16.4062C0 20.625 3.375 24 7.59375 24C11.8125 24 15.2344 20.625 15.2344 16.4062V8.01562C16.8281 9.1875 18.7969 9.84375 20.9531 9.84375H21Z"></path>
                    </svg>
                  </span>
                </div>

                {/* telegram */}
                <div className="group flex justify-center items-center rounded-full p-1 transition-all duration-200 hover:scale-105 hover:bg-[#0088cc]/15 cursor-pointer">
                  <span className="flex justify-center items-center">
                    <svg
                      className="opacity-80 transition-all duration-200 text-white group-hover:text-[#0088cc] group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_#0088cc99]"
                      width="30"
                      height="30"
                      viewBox="0 0 26 27"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_813_456)">
                        <path d="M13 0.421875C5.82028 0.421875 0 6.27713 0 13.5C0 20.7229 5.82028 26.5781 13 26.5781C20.1797 26.5781 26 20.7229 26 13.5C26 6.27713 20.1797 0.421875 13 0.421875ZM19.0257 9.31606C18.8301 11.384 17.9836 16.4024 17.5527 18.7186C17.3705 19.6986 17.0117 20.0273 16.6643 20.0594C15.9095 20.1293 15.3361 19.5575 14.6049 19.0753C13.4608 18.3208 12.8144 17.8511 11.7037 17.1148C10.4202 16.2639 11.2523 15.7964 11.9837 15.0318C12.1752 14.8318 15.5015 11.7881 15.5658 11.512C15.5738 11.4774 15.5815 11.3485 15.5053 11.2808C15.4291 11.2131 15.3171 11.236 15.2362 11.2544C15.1214 11.2806 13.2936 12.496 9.75267 14.9006C9.2339 15.259 8.76397 15.4336 8.34291 15.4244C7.87873 15.4144 6.98588 15.1604 6.32209 14.9433C5.50796 14.6771 4.8609 14.5364 4.91725 14.0842C4.9466 13.8487 5.26898 13.6079 5.88439 13.3618C9.67417 11.7007 12.2013 10.6056 13.4657 10.0764C17.0759 8.56575 17.8261 8.30334 18.3151 8.29459C18.4226 8.2928 18.6631 8.31959 18.8188 8.44673C18.9224 8.5373 18.9884 8.66369 19.0039 8.80089C19.0302 8.97125 19.0376 9.14405 19.0257 9.31606Z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_813_456">
                          <rect width="26" height="27" fill="white"></rect>
                        </clipPath>
                        <linearGradient
                          id="telegram-gradient-f"
                          x2="1"
                          y2="1"
                          gradientTransform="rotate(45)"
                        >
                          <stop offset="0%" stop-color="#ffffff"></stop>
                          <stop offset="100%" stop-color="#ffffff"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>

              {/* legal */}
              <div>
                <div className="text-xs sm:text-sm text-white w-full mt-6 mb-0 p-0 leading-relaxed">
                  <p className="mb-1">
                    <b>FXIFY™ Markets LTD</b>
                  </p>
                  <p className="mb-1">
                    1-13(A), First Floor, Paragon, Jalan Tun Mustapha, 87009
                    Labuan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* flex item 2 */}
          <div className="w-full py-4 flex flex-col sm:p-5 lg:p-6">
            <h2 className="mt-0 mr-0 mb-[15px] ml-0 p-0 text-white text-lg sm:text-xl">
              Contacts
            </h2>
            <div>
              <ul className="m-0 p-0 list-none">
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Support Portal
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Live Chat
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Contact
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    FAQs
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Become a Partner
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* flex item 3 */}
          <div className="w-full py-4 flex flex-col sm:p-5 lg:p-6">
            <h2 className="mt-0 mr-0 mb-[15px] ml-0 p-0 text-white text-lg sm:text-xl">
              Important Links
            </h2>
            <div>
              <ul className="m-0 p-0 list-none">
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Trader Dashboard
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Competitions
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Jobs
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Purchase Assessment
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* flex item 4 */}
          <div className="w-full py-4 flex flex-col sm:p-5 lg:p-6">
            <h2 className="mt-0 mr-0 mb-[15px] ml-0 p-0 text-white text-lg sm:text-xl">
              Programs
            </h2>
            <div>
              <ul className="m-0 p-0 list-none">
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    How It Works
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    One Phase
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Two Phase
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Three Phase
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Instant Funding
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Lightning Challenge
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* flex item 5 */}
          <div className="w-full py-4 flex flex-col sm:p-5 lg:p-6">
            <h2 className="mt-0 mr-0 mb-[15px] ml-0 p-0 text-white text-lg sm:text-xl">
              Community
            </h2>
            <div>
              <ul className="m-0 p-0 list-none">
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Official Discord Community
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Official Twitter Community
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Official Facebook <br /> Community
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Official Instagram <br /> Community
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* flex item 6 */}
          <div className="w-full py-4 flex flex-col sm:p-5 lg:p-6">
            <h2 className="mt-0 mr-0 mb-[15px] ml-0 p-0 text-white text-lg sm:text-xl">
              Documents
            </h2>
            <div>
              <ul className="m-0 p-0 list-none">
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Terms and Conditions
                  </span>
                </li>
                <li className="text-[rgba(194,208,228,0.5)] text-sm sm:text-base my-2 mx-0">
                  <span className="text-[rgba(194,208,228,0.5)] no-underline transition-all duration-[400ms] ease-in-out cursor-pointer hover:text-[rgba(194,208,228,0.9)]">
                    Privacy Policy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* footer lower */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;

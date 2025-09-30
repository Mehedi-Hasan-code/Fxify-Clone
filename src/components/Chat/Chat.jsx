import React, { useState } from 'react';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <div
        className="fixed z-[999999998] bottom-5 right-5 h-12 w-12 rounded-full backdrop-blur-[10px] bg-[rgba(0,113,178,0.8)] flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer hover:bg-[rgba(0,113,178,1)] hover:scale-105"
        onClick={toggleChat}
      >
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 28 32"
          width="24"
          height="24"
          fill="white"
        >
          <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path>
        </svg>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed z-[999999997] bottom-20 right-5 w-80 h-96 bg-[rgba(14,16,23,0.95)] backdrop-blur-[15px] rounded-[15px] border border-[rgba(194,208,228,0.1)] shadow-2xl transition-all duration-300 ease-in-out">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-[rgba(194,208,228,0.1)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0071B2] to-[#184E4A] rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold">
                  Support Team
                </h3>
                <p className="text-[rgba(194,208,228,0.7)] text-xs">
                  Online now
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-[rgba(194,208,228,0.7)] hover:text-white transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              {/* Support Message */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#0071B2] to-[#184E4A] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="bg-[rgba(194,208,228,0.1)] rounded-[10px] p-3 max-w-[80%]">
                  <p className="text-white text-sm">
                    Hi! 👋 How can we help you today?
                  </p>
                  <p className="text-[rgba(194,208,228,0.6)] text-xs mt-1">
                    Just now
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-gradient-to-br from-[#0071B2] to-[#184E4A] rounded-[10px] p-3 max-w-[80%]">
                  <p className="text-white text-sm">
                    I have a question about the trading platform
                  </p>
                  <p className="text-[rgba(255,255,255,0.6)] text-xs mt-1 text-right">
                    Just now
                  </p>
                </div>
              </div>

              {/* Support Response */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#0071B2] to-[#184E4A] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="bg-[rgba(194,208,228,0.1)] rounded-[10px] p-3 max-w-[80%]">
                  <p className="text-white text-sm">
                    Of course! I'd be happy to help you with any questions about
                    our trading platform. What specific feature or issue would
                    you like to know about?
                  </p>
                  <p className="text-[rgba(194,208,228,0.6)] text-xs mt-1">
                    Just now
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-1 border-t border-[rgba(194,208,228,0.1)]">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-[rgba(194,208,228,0.1)] border border-[rgba(194,208,228,0.2)] rounded-[10px] px-4 py-3 text-white placeholder-[rgba(194,208,228,0.6)] text-sm focus:outline-none focus:border-[#0071B2] transition-colors duration-200"
                />
              </div>
              <button className="bg-gradient-to-br from-[#0071B2] to-[#184E4A] rounded-[10px] p-3 hover:opacity-90 transition-opacity duration-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;

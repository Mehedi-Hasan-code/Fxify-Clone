import React, { useState } from 'react';
import ButtonSecondary from '../common/Buttons/ButtonSecondary'
import ButtonAdvanced from '../common/Buttons/ButtonAdvanced';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'What are the pros and cons of being a prop trader?',
      answer:
        'Prop trading offers high earning potential and access to significant capital, but comes with risks including potential losses and performance-based compensation.',
    },
    {
      id: 2,
      question: 'Do prop firms really pay out?',
      answer:
        'Yes, legitimate prop trading firms do pay out profits to their traders according to their profit-sharing agreements and trading rules.',
    },
    {
      id: 3,
      question: 'What is a prop trading firm?',
      answer:
        'A proprietary trading firm is a company that provides traders with capital to trade financial instruments, sharing profits according to predetermined agreements.',
    },
    {
      id: 4,
      question:
        'Do you charge any other fees other than the initial assessment cost?',
      answer:
        'Our fee structure is transparent. The initial assessment fee covers the evaluation process, with no hidden charges or additional fees.',
    },
    {
      id: 5,
      question: 'What is the leverage?',
      answer:
        'Leverage varies by account type and trading instrument. Our standard accounts offer competitive leverage ratios while maintaining risk management protocols.',
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className=" text-white py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-gray-300 uppercase tracking-wider">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Have <span className="text-teal-400">Questions?</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Check our FAQs or start a chat with our support team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonAdvanced label={'See All FAQs'} />
                
              <ButtonSecondary label={'Chat with Support'} />
                

            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="border-b border-gray-800 pb-4">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left flex items-center justify-between py-4 group"
                >
                  <span className="text-lg font-medium pr-4 group-hover:text-teal-400 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${
                        openFaq === faq.id ? 'rotate-45' : ''
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-teal-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {openFaq === faq.id && (
                  <div className="mt-4 pl-0 pr-12">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

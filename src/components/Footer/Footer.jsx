import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* FXIFY Logo */}
            <div className="flex items-center mb-6">
              <div className="flex flex-col mr-3">
                <div className="w-1 h-3 bg-white mb-1"></div>
                <div className="w-1 h-3 bg-white mb-1"></div>
                <div className="w-1 h-3 bg-white"></div>
              </div>
              <span className="text-2xl font-bold">FXIFY™</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img
                  src="/Social/discord.svg"
                  alt="Discord"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src="/Social/x.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img
                  src="/Social/insta.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src="/Social/fb.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">TT</span>
                </div>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">TG</span>
                </div>
              </a>
            </div>

            {/* Company Info */}
            <div className="text-sm">
              <p className="font-semibold mb-1">FXIFY™ Markets LTD</p>
              <p className="text-gray-300">
                1-13(A), First Floor, Paragon,
                <br />
                Jalan Tun Mustapha,
                <br />
                87009 Labuan
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Contacts */}
            <div>
              <h3 className="font-semibold mb-4">Contacts:</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Support Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Become a Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="font-semibold mb-4">Important Links:</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Trader Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Competitions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Purchase Assessment
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-semibold mb-4">Programs:</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    One Phase
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Two Phase
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Three Phase
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Instant Funding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Lightning Challenge
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold mb-4">Community:</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Official Discord Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Official Twitter Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Official Facebook Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Official Instagram Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Documents */}
            <div>
              <h3 className="font-semibold mb-4">Documents:</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="hover:text-gray-300 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Lower Section - Legal Text */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-xs text-gray-300 space-y-4">
          <p>
            FXIFY Markets Ltd is licensed in Labuan, Malaysia, as a money broker
            under License No. MB/22/0097, with its registered office at 1-13(A),
            First Floor, Paragon, Jalan Tun Mustapha, 87009 Labuan.
          </p>
          <p>
            FXIFY Solutions Limited is a registered company in the United
            Kingdom (Company No. 14451720), with its registered office at 142
            Central Street, Clerkenwell, London, United Kingdom, EC1V 8AR,
            operating as a payment agent.
          </p>
          <p>
            All information provided on this website is intended for educational
            purposes only and is not directed at residents of any jurisdiction
            where such distribution or use would be contrary to local laws or
            regulations.
          </p>
          <p>
            The content on this site does not constitute investment advice,
            business recommendations, investment opportunity analysis, or any
            form of general recommendation regarding the trading of financial
            instruments and is intended for users 18 years and older.
          </p>
          <p>
            Before engaging in trading, ensure you fully understand the risks
            involved and, if necessary, seek independent financial advice.
          </p>
          <p>
            <strong>Restricted Jurisdictions:</strong> We do not establish
            accounts to residents of certain jurisdictions including the United
            States, Zimbabwe, Iran, Iraq, North Korea, Somalia, Vietnam,
            Burundi, Central African Republic, Ivory Coast, Liberia, Libya,
            Sudan, Cuba, Syria, Afghanistan, Yemen, Palestine, Myanmar,
            Nicaragua, Congo Republic, Crimea, Democratic Republic of Congo,
            Eritrea, Guinea, Guinea-Bissau, Papua New Guinea, South Sudan,
            Vanuatu, Venezuela, Algeria, Russia, Kenya and Ghana and/or any
            particular country or jurisdiction where such distribution or use
            would be contrary to local law or regulation. This website is
            intended for users who are 18 years and older.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

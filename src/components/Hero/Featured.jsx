import React from 'react';
import SectionName from '../common/h,p,tags/SectionName';

const Featured = () => {
  return (
    <div className="flex flex-col gap-6 max-w-xl w-11/12 mx-auto">
      <SectionName label={'We are featured in'} />

      {/* logos */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-6 justify-items-center">
        <span className="flex items-center cursor-pointer">
          <img
            className="h-[25px] w-auto opacity-60 transition-all duration-700 ease-in-out hover:opacity-100"
            src="/Hero/Featured/im.svg"
            alt="Brand Logo"
          />
        </span>
        <span className="flex items-center cursor-pointer">
          <img
            className="h-[25px] w-auto opacity-60 transition-all duration-700 ease-in-out hover:opacity-100"
            src="/Hero/Featured/marketwatch.svg"
            alt="Brand Logo"
          />
        </span>
        <span className="flex items-center cursor-pointer">
          <img
            className="h-[25px] w-auto opacity-60 transition-all duration-700 ease-in-out hover:opacity-100"
            src="/Hero/Featured/yahoo.svg"
            alt="Brand Logo"
          />
        </span>
        <span className="flex items-center cursor-pointer">
          <img
            className="h-[25px] w-auto opacity-60 transition-all duration-700 ease-in-out hover:opacity-100"
            src="/Hero/Featured/benzinga.svg"
            alt="Brand Logo"
          />
        </span>
      </div>
    </div>
  );
};

export default Featured;

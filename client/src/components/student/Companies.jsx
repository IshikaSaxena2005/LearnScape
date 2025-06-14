import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className="pt-4"> {/* decreased from pt-10 to pt-4 */}
      <p className="text-base text-gray-500 text-center">
        Trusted by learners from
      </p>

      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mt-3">
        <img src={assets.microsoft_logo} alt="Microsoft" className="w-20 md:w-28" />
        <img src={assets.walmart_logo} alt="Walmart" className="w-20 md:w-28" />
        <img src={assets.accenture_logo} alt="Accenture" className="w-20 md:w-28" />
        <img src={assets.adobe_logo} alt="Adobe" className="w-20 md:w-28" />
        <img src={assets.paypal_logo} alt="Paypal" className="w-20 md:w-28" />
      </div>
    </div>
  );
};

export default Companies;

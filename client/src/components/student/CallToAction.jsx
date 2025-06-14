import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-white py-16 px-6 md:px-16 text-center rounded-2xl shadow-lg">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        LearnScape empowers learners with flexible, on-demand access to quality educational content—anytime, anywhere. Whether you're exploring new skills or mastering old ones, LearnScape is your gateway to continuous learning.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg transition">
          Get Started
        </button>
        <button className="flex items-center gap-2 text-purple-600 hover:underline text-lg font-medium">
          Learn More <img src={assets.arrow_icon} alt="arrow_icon" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;

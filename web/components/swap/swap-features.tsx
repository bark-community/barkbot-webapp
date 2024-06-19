'use client';

import React from 'react';

const swapFeatures = [
  { title: 'Efficient Swaps', description: 'Execute token swaps quickly and efficiently on the Solana blockchain.' },
  { title: 'Low Fees', description: 'Enjoy low transaction fees for all your token swaps.' },
  { title: 'User-Friendly Interface', description: 'Experience a seamless and intuitive interface for executing swaps.' },
  { title: 'Real-Time Data', description: 'Access real-time market data to make informed trading decisions.' },
  { title: 'Secure Transactions', description: 'Benefit from advanced security measures to protect your swaps.' },
  { title: '24/7 Availability', description: 'Execute swaps anytime, anywhere with 24/7 platform availability.' },
];

const SwapFeatures: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-custom-orange font-poppins">Swap Features</h2>
        <p className="text-lg text-gray-500 mb-8 font-poppins">Discover the powerful features of our swap functionality designed to enhance your trading experience.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {swapFeatures.map((feature, index) => (
            <div key={index} className="p-6 bg-light-gray dark:bg-gray-800 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 font-poppins text-custom-orange">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SwapFeatures;

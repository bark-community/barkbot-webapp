'use client';

import React from 'react';

const features = [
  { title: 'Trading Bot', description: 'Efficient and secure trading of BARK and 2022-tokens on the Solana blockchain via an intuitive Telegram interface.' },
  { title: 'Fast Transactions', description: 'Enjoy lightning-fast trading speeds powered by the Solana blockchain.' },
  { title: 'Secure', description: 'Trade with confidence using advanced encryption and security protocols.' },
  { title: 'User-Friendly', description: 'Experience a seamless and intuitive trading interface designed for ease of use.' },
  { title: 'Buy Back & Donate', description: 'Transaction fees are allocated for BARK token buyback and charitable aid campaigns. Engage in governance voting to influence donation processes.' },
  { title: 'Real-Time Notifications', description: 'Comprehensive position management including market cap, profits, liquidity, and token balance. Receive instant notifications for trades and market movements.' },
];

const FeatureCards: React.FC = () => {
  return (
    <section className="bg-gray py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 font-poppins">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-light-gray rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 font-poppins">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

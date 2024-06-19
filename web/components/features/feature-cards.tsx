'use client';

import React from 'react';

const features = [
  { title: 'Trading Bot', description: 'Facilitate efficient and secure trading of BARK and 2022-tokens on the Solana blockchain through an intuitive Telegram interface.' },
  { title: 'Fast Transactions', description: 'Experience lightning-fast trading speeds on the Solana blockchain.' },
  { title: 'Secure', description: 'Trade securely with advanced encryption and security protocols.' },
  { title: 'User-Friendly', description: 'Enjoy a seamless and intuitive trading experience.' },
  { title: 'BARK Buy Back', description: 'Transaction fees are used for BARK token buyback and charity aid campaigns. Participate in governance voting to influence the donation process.' },
  { title: 'Real-Time Notifications', description: 'Receive instant notifications on your trades and market movements.' },
];

const FeatureCards: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-white to-light-gray py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 font-poppins">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 font-poppins">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

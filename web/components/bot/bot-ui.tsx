'use client';

import React from 'react';
import BotFeature from './bot-feature';

const BotUI: React.FC = () => {
  const features = [
    {
      title: 'Instant Transactions',
      description: 'Paste a token address into Telegram and instantly send a purchase transaction.',
    },
    {
      title: 'Powered by Jupiter',
      description: 'Routing powered by Jupiter ensures the fastest and most efficient trades.',
    },
    {
      title: 'Comprehensive Analytics',
      description: 'Gain insights into your trading performance with detailed analytics.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <div className="flex flex-wrap mt-8">
          {features.map((feature, index) => (
            <div key={index} className="w-full p-4 md:w-1/3">
              <BotFeature title={feature.title} description={feature.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotUI;

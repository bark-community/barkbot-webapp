'use client';

import React from 'react';

interface BotFeatureProps {
  title: string;
  description: string;
}

const BotFeature: React.FC<BotFeatureProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BotFeature;

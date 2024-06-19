'use client';

import React from 'react';

interface BotFeatureProps {
  title: string;
  description: string;
}

const BotFeature: React.FC<BotFeatureProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-4 text-custom-orange">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default BotFeature;

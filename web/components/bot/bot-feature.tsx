'use client';

import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

const BotFeature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-md">
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BotFeature;

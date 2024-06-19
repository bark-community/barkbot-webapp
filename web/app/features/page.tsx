'use client';

import React from 'react';
import SwapFeatures from '@/components/swap/swap-features';
import FeatureCards from '@/components/feature-cards';

const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 font-poppins text-custom-orange">Our Features</h1>
      <p className="text-lg text-gray-500 mb-12 font-poppins text-center">
        Explore the powerful features of our platform designed to enhance your trading experience.
      </p>
      <SwapFeatures />
      <FeatureCards />
    </div>
  );
};

export default FeaturesPage;

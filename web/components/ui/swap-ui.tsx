'use client';

import React from 'react';
import JupiterTerminal from '@/components/swap/integrated-terminal';
import SwapFeatures from '@/components/swap/swap-features';
import BotFeatures from '@/components/bot/BotFeatures';

const SwapUI: React.FC = () => {
  return (
    <div className="container mx-auto">
      <JupiterTerminal />
      <SwapFeatures />
      <BotFeatures />
    </div>
  );
};

export default SwapUI;

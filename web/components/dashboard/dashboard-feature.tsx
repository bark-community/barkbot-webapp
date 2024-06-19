'use client';

import React from 'react';
import { AppHero } from '@/components/ui/app-hero';
import FeatureCards from '@/components/features/feature-cards';
import FaqCards from '@/components/faq/faq-cards';

const LandingPage: React.FC = () => {
  return (
    <>
      <AppHero 
        title="Trading with Solana's Telegram Bot" 
        subtitle="BarkBOT is your advanced trading assistant, facilitating efficient and secure trading of BARK and 2022-tokens on the Solana blockchain." 
        demoLink="https://t.me/BarkBOT" 
        documentationLink="https://bark-protocol-1.gitbook.io/barkbot-or-telegram-solana-token-trading-bot/" 
      />
      <FeatureCards />
      <FaqCards />
    </>
  );
};

export default LandingPage;

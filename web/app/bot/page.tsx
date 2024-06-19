import React from 'react';
import Head from 'next/head';
import BotUI from '@/components/bot/bot-ui';
import BotData from '@/components/bot-data-access';
import BotFeature from '@/components/bot/bot-feature';

const BotPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>BarkBOT Features</title>
        <meta name="description" content="Explore the features of BARKBOT, the fastest way to trade BARK and 2022-tokens on the Solana blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-900 mt-4">BarkBOT Features</h1>
        <p className="mt-4 text-2xl text-gray-700">
          Discover the capabilities of BarkBOT and how it can streamline your trading experience.
        </p>
      </main>

      <BotUI />

      <section className="py-16 bg-gray-100">
        <Component/>
      </section>

      <footer className="py-8 bg-gray-800">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 BARK Protocol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BotPage;

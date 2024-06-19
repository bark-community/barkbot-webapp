'use client';

import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 font-poppins">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Here are some of the most common questions about BarkBOT and how it works.
        </p>
        <div className="space-y-8">
          <div className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 font-poppins">What is BarkBOT?</h2>
            <p className="text-gray-700">
              BarkBOT is a trading assistant designed to facilitate efficient and secure trading of BARK and 2022-tokens on the Solana blockchain.
            </p>
          </div>
          <div className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 font-poppins">How does BarkBOT work?</h2>
            <p className="text-gray-700">
              BarkBOT provides a seamless interface on Telegram for users to execute trades, track performance, and receive real-time notifications and analytics.
            </p>
          </div>
          <div className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 font-poppins">How do I get started with BarkBOT?</h2>
            <p className="text-gray-700">
              You can get started by registering on our platform, connecting your wallet, and following the steps outlined in our getting started guide.
            </p>
          </div>
          <div className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 font-poppins">Is BarkBOT secure?</h2>
            <p className="text-gray-700">
              Yes, BarkBOT uses robust security measures including JWT-based authentication, two-factor authentication (2FA), and rate limiting to protect user accounts and data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';

const FAQ = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">What is BarkBOT?</h2>
          <p>BarkBOT is a trading assistant designed to facilitate efficient and secure trading of BARK tokens on the Solana blockchain.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">How does BarkBOT work?</h2>
          <p>BarkBOT provides a seamless interface on Telegram for users to execute trades, track performance, and receive real-time notifications and analytics.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">How do I get started with BarkBOT?</h2>
          <p>You can get started by registering on our platform, connecting your wallet, and following the steps outlined in our getting started guide.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Is BarkBOT secure?</h2>
          <p>Yes, BarkBOT uses robust security measures including JWT-based authentication, two-factor authentication (2FA), and rate limiting to protect user accounts and data.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

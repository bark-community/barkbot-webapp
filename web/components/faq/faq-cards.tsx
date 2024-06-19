'use client';

import React from 'react';

const faqs = [
  { question: 'What is BarkBOT?', answer: 'BarkBOT is a trading assistant designed to facilitate efficient and secure trading of BARK and 2022-tokens on the Solana blockchain.' },
  { question: 'How does BarkBOT work?', answer: 'BarkBOT provides a seamless interface on Telegram for users to execute trades, track performance, and receive real-time notifications and analytics.' },
  { question: 'How do I get started with BarkBOT?', answer: 'You can get started by registering on our platform, connecting your wallet, and following the steps outlined in our getting started guide.' },
  { question: 'Is BarkBOT secure?', answer: 'Yes, BarkBOT uses robust security measures including JWT-based authentication, two-factor authentication (2FA), and rate limiting to protect user accounts and data.' },
];

const FaqCards: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 font-poppins">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-500 mb-8 font-poppins">Find answers to some of the most common questions about BarkBOT.</p>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-light-gray rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 font-poppins">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqCards;

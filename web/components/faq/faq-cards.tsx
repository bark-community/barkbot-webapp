'use client';

import React from 'react';

const faqs = [
  { question: 'What is BarkBOT?', answer: 'BarkBOT is an advanced trading assistant designed to facilitate efficient and secure trading of BARK and 2022-tokens on the Solana blockchain.' },
  { question: 'How do I use BarkBOT?', answer: 'You can use BarkBOT by connecting your Solana wallet and following the instructions on the dashboard.' },
  { question: 'Is BarkBOT secure?', answer: 'Yes, BarkBOT uses advanced encryption and security protocols to ensure your trades are safe.' },
  { question: 'How can I get support?', answer: 'Our support team is available 24/7 to assist you with any issues or inquiries.' },
];

const FaqCards: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-light-gray to-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 font-poppins">Frequently Asked Questions</h2>
        <p className="text-md md:text-lg text-gray-700 mb-8 font-poppins">Find answers to common questions about BarkBOT and how it works.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-300">
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

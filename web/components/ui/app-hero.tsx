'use client';

import React from 'react';

interface AppHeroProps {
  title: string;
  subtitle: string;
  demoLink: string;
  documentationLink: string;
}

export const AppHero: React.FC<AppHeroProps> = ({ title, subtitle, demoLink, documentationLink }) => {
  return (
    <section className="bg-gradient-to-r from-light-gray to-white py-16 px-4">
      <div className="container mx-auto text-center">
        <img src="/logo.png" alt="BarkBOT Logo" className="mx-auto mb-8 w-24 h-24" />
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-poppins shadow-md">{title}</h1>
        <p className="text-md md:text-lg text-gray-700 mb-8 font-poppins">{subtitle}</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 bg-custom-orange text-white rounded shadow-lg hover:shadow-xl transition duration-300"
          >
            Try Demo
          </a>
          <a 
            href={documentationLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 bg-dark-gray text-white rounded shadow-lg hover:shadow-xl transition duration-300"
          >
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppHero;

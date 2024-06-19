'use client';

import React, { useState, useEffect } from 'react';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { ReactQueryProvider } from '@/app/react-query-provider';
import '@/styles/globals.css';

const links: { label: string; path: string }[] = [
  { label: 'Account', path: '/account' },
  { label: 'Swap', path: '/swap' },
  { label: 'BOT', path: '/bot' },
  { label: 'Clusters', path: '/clusters' },
  { label: 'FAQ', path: '/faq' },
];

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const connectWallet = () => {
    // Implement wallet connection logic here
    console.log('Connecting wallet...');
  };

  return (
    <div className={theme}>
      <body className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <UiLayout links={links}>
                <div className="fixed top-4 right-4 flex items-center space-x-4">
                  <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-custom-orange text-white rounded hover:bg-black transition duration-300"
                  >
                    Toggle Theme
                  </button>
                  <button
                    onClick={connectWallet}
                    className="px-4 py-2 bg-custom-orange text-white rounded hover:bg-black transition duration-300"
                  >
                    Connect Wallet
                  </button>
                </div>
                {children}
              </UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </div>
  );
};

export default ClientLayout;

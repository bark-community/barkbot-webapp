import React from 'react';
import { AppProps } from 'next/app';
import UiLayout from '@/components/ui/ui-layout'; // Adjust the import path as needed
import '@/styles/globals.css';

const links = [
  { label: 'GitHub', path: 'https://github.com/bark-community/bark-bot-telegram-api' },
  { label: 'Twitter', path: 'https://twitter.com/bark_protocol' },
  { label: 'Discord', path: 'https://discord.com/invite/yourinvite' },
  { label: 'Telegram', path: 'https://t.me/bark_protocol' },
  { label: 'Medium', path: 'https://medium.com/@barkprotocol' },
  { label: 'Instagram', path: 'https://instagram.com/bark.protocol' },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiLayout links={links}>
      <Component {...pageProps} />
    </UiLayout>
  );
}

export default MyApp;

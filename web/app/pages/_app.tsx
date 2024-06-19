import React from 'react';
import { AppProps } from 'next/app';
import AppHero from '@/components/ui/app-hero';
import '@/styles/globals.css';

const links = [
  { label: 'GitHub', path: 'https://github.com/bark-community/bark-bot-telegram-api' },
  { label: 'Twitter', path: 'https://twitter.com/bark_protocol' },
  { label: 'Discord', path: 'https://discord.com/invite/yourinvite' },
  { label: 'Telegram', path: 'https://t.me/bark_protocol' },
  { label: 'Medium', path: 'https://medium.com/@barkprotocol' },
  { label: 'Instagram', path: 'https://instagram.com/bark.protocol' },
];

function BarkBOTApp({ Component, pageProps }: AppProps) {
  return (
    <AppHero links={links}>
      <Component {...pageProps} />
    </AppHero>
  );
}

export default BarkBOTApp;

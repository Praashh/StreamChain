import { Metadata } from 'next';

const TITLE = 'DEMI - Automatically collect your credit/rent using Solana Blockchain';
const DESCRIPTION =
  'StreamChain is a platform that allows shopkeeper to automatically collects their credit from customers using solana blockchain. It is a web3 application that allows you automatically collects your credit from a person using solana blockchain..';

const BASE_URL = process.env.BASE_URL;

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: 'DEMI',
  creator: 'praash',

  category: 'Blockchain',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'DEMI',
    'Solana',
    'Credit',
    'Rent',
    'solana transaction',
    'solana credit collections',
    'solana DEMI rent collections',
    'web3',
    'blockchain'
  ],
  metadataBase: new URL(BASE_URL!),
};

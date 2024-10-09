import { Metadata } from 'next';

const TITLE = 'DeZap - Airdrop and StreamFlow on Solana';
const DESCRIPTION =
  'DeZap is a platform that allows you to airdrop and streamflow on Solana. It is a web3 application that allows you to airdrop and streamflow on Solana.';

const BASE_URL = 'https://dezap.online';

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: 'DeZap',
  creator: '100XEngineers',

  category: 'Blockchain',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'DeZap',
    'Solana',
    'Airdrop',
    'StreamFlow',
    'solana transaction',
    'solana airdrop',
    'solana streamflow',
    'web3',
  ],
  metadataBase: new URL(BASE_URL),
};

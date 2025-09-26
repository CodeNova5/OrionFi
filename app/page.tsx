import { Metadata } from "next";
import HomePage from "./HomePage"; // client component


export const metadata: Metadata = {
  title: 'OrionFi || DeFi Platform',
  description: 'A next-gen DeFi platform for staking, lending, and cross-chain token swaps.',
  keywords: ['DeFi', 'staking', 'lending', 'cross-chain', 'token swaps', 'cryptocurrency', 'blockchain', 'finance', 'OrionFi'],
  authors: [{ name: 'Code Nova' }],
  openGraph: {
    title: 'OrionFi',
    description: 'A next-gen DeFi platform for staking, lending, and cross-chain token swaps.',
    url: 'https://orion-fi-theta.vercel.app',
    type: 'website',
    siteName: 'OrionFi',
    images: [
      {
        url: 'https://orion-fi-theta.vercel.app/orionfi-logo.jpg',
        alt: 'OrionFi logo',
      },
    ],
    locale: 'en_US',
  },
};

export default function Page() {
  return (
    <>
      <HomePage />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { networks, projectId } from "../config"; // define your networks + projectId
import "@reown/appkit-scaffold-ui";
import { useAccount } from "wagmi";
import { mainnet, arbitrum } from '@reown/appkit/networks'
import BalanceDashboard from "../components/BalanceDashboard";
import CryptoTable from "../components/CryptoTable";
import ActionPanel from "../components/ActionPanel";
import Header from "../components/Header";
import Footer from "../components/Footer";
let appKit: ReturnType<typeof createAppKit> | undefined;

function initAppKit() {
  if (!appKit && typeof window !== "undefined") {
    const wagmiAdapter = new WagmiAdapter({ networks, projectId });
    appKit = createAppKit({
      adapters: [wagmiAdapter],
      networks: [mainnet, arbitrum],
      projectId,
      metadata: {
        name: 'OrionFi',
        description: 'A next-gen DeFi platform for staking, lending, and cross-chain token swaps.',
        url: 'https://orion-fi-theta.vercel.app', // origin must match your domain & subdomain
        icons: ['https://orion-fi-theta.vercel.app/favicon.ico']
      },
    });
  }
}

export default function HomePage() {
  const { address, isConnected } = useAccount();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initAppKit();
    setInitialized(true);
  }, []);

  return (

    <main className="p-4 sm:p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
  <Header />

  <h1 className="text-2xl sm:text-4xl text-center font-bold mb-4 sm:mb-6 mt-10 sm:mt-20">
    🚀 OrionFi
  </h1>

  <div className="flex justify-center mb-6">
    <w3m-button />
  </div>

  {initialized && isConnected && (
    <div className="mt-6 sm:mt-10">
      <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center sm:text-left">
        Connected as:{" "}
        <strong className="text-blue-400 break-words">{address}</strong>
      </p>

      <BalanceDashboard />
      <ActionPanel />

      <div className="mt-10 sm:mt-16">
        <CryptoTable />
      </div>

      <div className="mt-10 sm:mt-16">
        <Footer />
      </div>
    </div>
  )}
</main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { networks, projectId } from "../config"; // define your networks + projectId
import "@reown/appkit-scaffold-ui";
import { useAccount } from "wagmi";
import { mainnet, arbitrum } from '@reown/appkit/networks'
import BalanceDashboard from "../components/BalanceDashboard";
import CryptoTable from "@/components/CryptoTable";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

  const openSwap = () => {
    appKit?.open({ view: "Swap", arguments: { /* optional prefills */ } });
  };
  const openSend = () => appKit?.open({ view: "WalletSend" });
  const openAccount = () => appKit?.open({ view: "Account" });
  const openConnect = () => appKit?.open({ view: "Connect" });
  const openBuyCrypto = () => appKit?.open({ view: "OnRampProviders" });
  const openAllWallets = () => appKit?.open({ view: "AllWallets" });
  const openNetworks = () => appKit?.open({ view: "Networks" });

  return (
   
   <main className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      <h1 className="text-4xl text-center font-bold mb-6">🚀 OrionFi</h1>
      <w3m-button />

      {initialized && isConnected && (
        <div className="mt-10">
          <p className="text-lg mb-6">
            Connected as:{" "}
            <strong className="text-blue-400">{address}</strong>
          </p>
          <BalanceDashboard />
          {/* Action Panel */}
          <div className="space-y-10">

            {/* Assets Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">💎 Assets</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Swap */}
                <div onClick={openSwap} className="action-card bg-green-600">🔄 Swap</div>
                {/* Send */}
                <div onClick={openSend} className="action-card bg-purple-600">📤 Send</div>
                {/* Buy */}
                <div onClick={openBuyCrypto} className="action-card bg-yellow-600">💰 Buy</div>
              </div>
            </section>

            {/* Wallet Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">👛 Wallet</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Account */}
                <div onClick={openAccount} className="action-card bg-blue-600">👤 Account</div>
                {/* Wallets */}
                <div onClick={openAllWallets} className="action-card bg-red-600">👛 Wallets</div>
                {/* Connect */}
                <div onClick={openConnect} className="action-card bg-pink-600">🔗 Connect</div>
              </div>
            </section>

            {/* Network Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">🌐 Network</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Networks */}
                <div onClick={openNetworks} className="action-card bg-teal-600">🌐 Networks</div>
              </div>
            </section>

          </div>
          <div className="mt-16">
            <CryptoTable />
          </div>

        </div>
      )}
      <Footer />
    </main>
  );
}

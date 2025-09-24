"use client";

import { useEffect, useState } from "react";
import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { networks, projectId } from "../config"; // define your networks + projectId
import "@reown/appkit-scaffold-ui";
import { useAccount } from "wagmi";
import { mainnet, arbitrum } from '@reown/appkit/networks'

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

  return (
    <main className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">🚀 OrionFi</h1>
      <w3m-button />

      {initialized && isConnected && (
        <div className="mt-10">
          <p className="text-lg mb-6">
            Connected as:{" "}
            <strong className="text-blue-400">{address}</strong>
          </p>

          {/* Action Panel */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div
              onClick={openSwap}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center space-y-3 hover:scale-105 transition cursor-pointer"
            >
              <div className="px-4 py-2 rounded-lg bg-green-600 text-white">
                🔄 Swap
              </div>
              <span className="text-sm text-gray-300">Swap Tokens</span>
            </div>

            <div
              onClick={openSend}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center space-y-3 hover:scale-105 transition cursor-pointer"
            >
              <div className="px-4 py-2 rounded-lg bg-purple-600 text-white">
                📤 Send
              </div>
              <span className="text-sm text-gray-300">Send Assets</span>
            </div>

            <div
              onClick={openAccount}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center space-y-3 hover:scale-105 transition cursor-pointer"
            >
              <div className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                👤 Account
              </div>
              <span className="text-sm text-gray-300">View Account</span>
            </div>

            <div
              onClick={openConnect}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center space-y-3 hover:scale-105 transition cursor-pointer"
            >
              <div className="px-4 py-2 rounded-lg bg-pink-600 text-white">
                🔗 Connect
              </div>
              <span className="text-sm text-gray-300">Switch Wallet</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

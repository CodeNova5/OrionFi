"use client";

import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";

export default function BalanceDashboard() {
  const { address, isConnected } = useAccount();

  const { data: balance } = useBalance({
    address,
    chainId: 1,
    query: {
      refetchInterval: 10000, // refresh every 10s
    },
  });

  const [usdPrice, setUsdPrice] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const data = await res.json();
        setUsdPrice(data.ethereum.usd);
      } catch (err) {
        console.error("Price fetch error:", err);
      }
    }
    fetchPrice();
  }, []);

  if (!isConnected) return null;

  const ethBalance = parseFloat(balance?.formatted || "0");
  const usdBalance = usdPrice ? (ethBalance * usdPrice).toFixed(2) : null;

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">💰 Balance</h2>

      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300">Address:</span>
        <span className="font-mono text-blue-400 truncate max-w-[150px]">
          {address}
        </span>
      </div>

      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300">ETH Balance:</span>
        <span className="font-semibold">{ethBalance.toFixed(4)} ETH</span>
      </div>

      {usdBalance && (
        <div className="flex justify-between items-center">
          <span className="text-gray-300">≈ USD Value:</span>
          <span className="font-semibold">${usdBalance}</span>
        </div>
      )}
    </div>
  );
}

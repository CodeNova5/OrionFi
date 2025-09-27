"use client";

import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";

export default function BalanceDashboard() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address,
    chainId: 1, // ETH Mainnet
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
    <div className="w-full max-w-sm sm:max-w-md mx-auto bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg text-white">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">💰 Balance</h2>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
        <span className="text-gray-300 text-sm sm:text-base">Address:</span>
        <span className="font-mono text-blue-400 truncate max-w-[200px] sm:max-w-[250px] text-xs sm:text-sm">
          {address}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
        <span className="text-gray-300 text-sm sm:text-base">ETH Balance:</span>
        <span className="font-semibold text-sm sm:text-base">
          {ethBalance.toFixed(4)} ETH
        </span>
      </div>

      {usdBalance && (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
          <span className="text-gray-300 text-sm sm:text-base">≈ USD Value:</span>
          <span className="font-semibold text-sm sm:text-base">
            ${usdBalance}
          </span>
        </div>
      )}
    </div>
  );
}

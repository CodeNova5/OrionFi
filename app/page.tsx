"use client";

import "@reown/appkit-scaffold-ui"; // registers <w3m-button>
import { useAccount, useBalance, useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { useState } from "react";

export default function HomePage() {
  const { address, isConnected } = useAccount();
  const { data: balance, isLoading: balanceLoading } = useBalance({ address });

  const { sendTransaction } = useSendTransaction();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("0.01"); // default 0.01 ETH

  const handleSend = () => {
    if (!recipient || !amount) return;
    try {
      sendTransaction({
        to: recipient as `0x${string}`,
        value: parseEther(amount),
      });
    } catch (err) {
      console.error("Transaction failed:", err);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">🚀 OrionFi</h1>
      <w3m-button />

      {isConnected && (
        <div className="mt-6 space-y-4">
          <p className="text-lg">
            Connected as: <strong>{address}</strong>
          </p>

          {balanceLoading ? (
            <p>Loading balance...</p>
          ) : (
            <p>
              Balance: {balance?.formatted} {balance?.symbol}
            </p>
          )}

          <div className="space-y-2">
            <input
              type="text"
              placeholder="Recipient address (0x...)"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
            <input
              type="number"
              placeholder="Amount in ETH"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
            <button
              className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleSend}
            >
              Send ETH
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";

export default function FAQ() {
  return (
    <main className="max-w-4xl mx-auto p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">OrionFi – Frequently Asked Questions</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">❓ What is OrionFi?</h2>
          <p className="text-gray-400">
            OrionFi is a decentralized finance (DeFi) platform that enables token
            swaps, staking, lending, and more across multiple blockchains.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓ Do I need to create an account?</h2>
          <p className="text-gray-400">
            No. OrionFi is non-custodial. You simply connect your crypto wallet
            (e.g., MetaMask, WalletConnect) to access features.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓ Is OrionFi safe?</h2>
          <p className="text-gray-400">
            OrionFi integrates audited smart contracts, but using DeFi always
            carries risk. Please exercise caution and never invest more than you
            can afford to lose.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓ Which tokens are supported?</h2>
          <p className="text-gray-400">
            OrionFi supports major ERC-20 tokens, stablecoins, and selected
            cross-chain assets. Token availability may vary by network.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓ How do I buy crypto?</h2>
          <p className="text-gray-400">
            You can use the "Buy" feature in OrionFi to purchase crypto directly
            with fiat using supported on-ramp providers.
          </p>
        </div>
      </div>
    </main>
  );
}

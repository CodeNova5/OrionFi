"use client";

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">OrionFi – Terms of Service</h1>
      <p className="mb-4 text-gray-300">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p className="mb-4 text-gray-400">
        Welcome to OrionFi. By accessing or using our decentralized finance
        (DeFi) platform, you agree to comply with these Terms of Service. Please
        read them carefully before using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Eligibility</h2>
      <p className="mb-4 text-gray-400">
        You must be at least 18 years old or the age of majority in your
        jurisdiction to use OrionFi. By using the platform, you confirm that you
        meet this requirement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. No Financial Advice</h2>
      <p className="mb-4 text-gray-400">
        OrionFi is a decentralized protocol. We do not provide financial, legal,
        or tax advice. All interactions with digital assets are at your own
        risk.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Risks</h2>
      <p className="mb-4 text-gray-400">
        Cryptocurrency and DeFi involve significant risk, including loss of
        funds. You understand and accept that smart contracts, market volatility,
        and third-party integrations may expose you to potential losses.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4 text-gray-400">
        OrionFi and its contributors are not liable for any damages, financial
        losses, or interruptions arising from your use of the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Amendments</h2>
      <p className="mb-4 text-gray-400">
        We may update these Terms from time to time. Continued use of OrionFi
        after changes are posted means you accept the revised Terms.
      </p>
    </main>
  );
}

"use client";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">OrionFi – Privacy Policy</h1>
      <p className="mb-4 text-gray-300">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p className="mb-4 text-gray-400">
        OrionFi respects your privacy. This policy explains what information we
        collect, how we use it, and your rights as a user.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Data We Collect</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-400">
        <li>Wallet addresses (public blockchain data)</li>
        <li>Transaction details on supported networks</li>
        <li>Optional analytics data (non-identifiable)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Use Data</h2>
      <p className="mb-4 text-gray-400">
        We use collected data to operate OrionFi, improve user experience, and
        ensure platform security. We do not sell or rent personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4 text-gray-400">
        OrionFi integrates third-party services like wallet providers and
        analytics. These services may collect information in accordance with
        their own policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4 text-gray-400">
        Since OrionFi is a decentralized application, we do not collect
        personally identifiable data. You may manage your privacy via your
        wallet provider and blockchain settings.
      </p>
    </main>
  );
}

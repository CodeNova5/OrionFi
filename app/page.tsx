"use client";

import "@reown/appkit-scaffold-ui"; // registers <appkit-button>, <appkit-connect-button>, etc.

export default function HomePage() {
  return (
    <main>
      <h1>🚀 OrionFi</h1>
      <appkit-button></appkit-button>
      <appkit-connect-button></appkit-connect-button>
      <appkit-network-button></appkit-network-button>
      <appkit-account-button></appkit-account-button>
    </main>
  );
}

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { headers } from "next/headers"; // added
import ContextProvider from "@/context";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "OrionFi",
  description: "A next-gen DeFi platform for staking, lending, and cross-chain token swaps.",
  openGraph: {
    title: "OrionFi",
    description: "A next-gen DeFi platform for staking, lending, and cross-chain token swaps.",
    url: "https://orion-fi-theta.vercel.app",
    siteName: "OrionFi",
    images: [
      {
        url: "https://orion-fi-theta.vercel.app/orionfi-logo.jpg",
        width: 1200,
        height: 630,
        alt: "OrionFi Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrionFi",
    description: "A next-gen DeFi platform for staking, lending, and cross-chain token swaps.",
    images: ["https://orion-fi-theta.vercel.app/og-image.jpg"],
    creator: "Code Nova",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white`}>
        
        <ContextProvider cookies={cookies}>
          <Header />
          <main className="min-h-screen max-w-full overflow-x-hidden">
            {children}
          </main>
        </ContextProvider>
        <Footer />
      </body>

    </html>

  );
}

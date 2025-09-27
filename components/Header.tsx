"use client";

import { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import Image from "next/image";

import { useAccount } from "wagmi";
export default function Header() {
    const [copied, setCopied] = useState(false);
    const { address } = useAccount();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address || "");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <header className="w-full flex items-center justify-between bg-gray-900 backdrop-blur-md px-6 py-3 border-b border-gray-700 fixed top-0 left-0 z-50">
            {/* Left: Logo + Name */}
            <div className="flex items-center space-x-3">
                <Image
                    src="/orionfi-logo.jpg" // put your logo in /public
                    alt="OrionFi Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <h1 className="text-xl font-bold text-white">OrionFi</h1>
            </div>
            <div className="flex items-center space-x-4">
                {/* Copy Address */}
                <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gray-700 hover:bg-gray-600 text-sm text-white transition"
                >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? "Copied!" : "Copy"}</span>
                </button>

            
            </div>
        </header>
    );
}

"use client";
import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white py-10 mt-16">
      <hr style={{borderColor: 'gray'}} />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">OrionFi</h2>
          <p className="text-gray-400 leading-relaxed">
            OrionFi is a next-gen DeFi platform offering staking, lending, and cross-chain token swaps. Our mission is to make decentralized finance accessible to everyone, everywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <span>+234 907 208 9091</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-white" />
              <span>codenova02@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={18} className="text-white" />
              <a
                href="https://wa.me/2349072089091"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tunebay. All rights reserved.
      </div>
    </footer>
  );
}

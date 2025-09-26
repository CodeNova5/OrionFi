"use client";

import { useEffect, useState } from "react";

export default function CryptoTable() {
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchCoins = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageNum}&sparkline=false&price_change_percentage=24h,7d,30d`
      );
      const data = await res.json();
      setCoins(data);
    } catch (err) {
      console.error("Error fetching coins:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins(page);
  }, [page]);

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => Math.max(1, p - 1));

  const PaginationControls = () => (
    <div className="flex justify-between items-center my-4">
      <button
        onClick={prevPage}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50 hover:bg-gray-600"
      >
        ⬅ Prev
      </button>
      <span className="text-gray-300">Page {page}</span>
      <button
        onClick={nextPage}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
      >
        Next ➡
      </button>
    </div>
  );

  if (loading) {
    return <p className="text-gray-400">Loading crypto prices...</p>;
  }

  return (
    <div className="overflow-x-auto bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📊 Top Cryptocurrencies</h2>

      {/* Top Pagination */}
      <PaginationControls />

      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-800 text-gray-300 text-left">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">24h %</th>
            <th className="px-4 py-2">7d %</th>
            <th className="px-4 py-2">30d %</th>
            <th className="px-4 py-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, idx) => (
            <tr
              key={coin.id}
              className="border-b border-gray-700 hover:bg-gray-800"
            >
              <td className="px-4 py-2">{(page - 1) * 100 + idx + 1}</td>
              <td className="px-4 py-2 flex items-center space-x-2">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-6 h-6 rounded-full"
                />
                <span>{coin.name}</span>
                <span className="text-gray-400 uppercase text-xs">
                  ({coin.symbol})
                </span>
              </td>
              <td className="px-4 py-2">
                ${coin.current_price.toLocaleString()}
              </td>

              <td
                className={`px-4 py-2 ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>

              <td
                className={`px-4 py-2 ${
                  coin.price_change_percentage_7d_in_currency > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
              </td>

              <td
                className={`px-4 py-2 ${
                  coin.price_change_percentage_30d_in_currency > 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coin.price_change_percentage_30d_in_currency?.toFixed(2)}%
              </td>

              <td className="px-4 py-2">
                ${coin.market_cap.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bottom Pagination */}
      <PaginationControls />
    </div>
  );
}

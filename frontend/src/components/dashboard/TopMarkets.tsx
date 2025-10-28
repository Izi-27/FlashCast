"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Market {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: number;
}

const markets: Market[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 45000,
    change: 2.5,
    volume: 28500000000,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 2800,
    change: -1.2,
    volume: 15200000000,
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: 95,
    change: 5.8,
    volume: 2100000000,
  },
  {
    id: 4,
    name: "Cardano",
    symbol: "ADA",
    price: 1.2,
    change: -0.5,
    volume: 1500000000,
  },
];

function formatNumber(num: number): string {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "B";
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  }
  return num.toString();
}

const TopMarkets = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-white/5 border border-white/10"
    >
      <h2 className="text-xl font-bold mb-6">Top Markets</h2>
      <div className="space-y-4">
        {markets.map((market) => (
          <div key={market.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center font-bold">
                {market.symbol}
              </div>
              <div>
                <p className="font-medium">{market.name}</p>
                <p className="text-sm text-zinc-400">{market.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${market.price.toLocaleString()}</p>
              <p
                className={`text-sm flex items-center gap-1 ${
                  market.change >= 0 ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {market.change >= 0 ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
                {Math.abs(market.change)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default TopMarkets;
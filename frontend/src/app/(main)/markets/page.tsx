"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, TrendingUp, ArrowUpRight, ArrowDownRight, Star, BarChart3, Flame, Sparkles } from "lucide-react";

const MarketCard = ({ market, index }: { market: any; index: number }) => {
  const isPositive = market.change >= 0;
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl border-2 border-purple-200">
              {market.symbol.charAt(0)}
            </div>
            {market.trending && (
              <div className="absolute -top-2 -right-2 p-1 bg-orange-500 rounded-full">
                <Flame className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-bold text-xl text-zinc-800">{market.name}</h3>
            <p className="text-sm text-zinc-500 flex items-center gap-1">
              {market.symbol}
              <span className="text-xs px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full border border-purple-200">
                {market.category}
              </span>
            </p>
          </div>
        </div>
        <button
          title="Toggle Favorite"
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className="p-2 hover:bg-purple-50 rounded-lg transition-colors"
        >
          <Star className={`w-5 h-5 ${isFavorite ? "fill-yellow-400 text-yellow-400" : "text-zinc-400"}`} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-zinc-500 mb-1">Current Price</p>
          <p className="text-2xl font-bold text-zinc-800">${market.price.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-zinc-500 mb-1">24h Change</p>
          <div className={`flex items-center gap-1 text-lg font-bold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}>
            {isPositive ? (
              <ArrowUpRight className="w-5 h-5" />
            ) : (
              <ArrowDownRight className="w-5 h-5" />
            )}
            {Math.abs(market.change)}%
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-purple-100">
        <div className="flex items-center gap-2 text-sm text-zinc-600">
          <BarChart3 className="w-4 h-4" />
          <span>Vol: ${(market.volume / 1e9).toFixed(1)}B</span>
        </div>
        <button className="px-4 py-2 bg-linear-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm">
          Trade Now
        </button>
      </div>
    </motion.div>
  );
};

const MarketsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Trending", icon: <Flame className="w-4 h-4" /> },
    { name: "New", icon: <Star className="w-4 h-4" /> },
    { name: "Top Gainers", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Top Losers", icon: <ArrowDownRight className="w-4 h-4" /> },
  ];

  const markets = [
    { id: 1, name: "Bitcoin", symbol: "BTC", price: 45000, change: 2.5, volume: 28500000000, category: "Crypto", trending: true },
    { id: 2, name: "Ethereum", symbol: "ETH", price: 2800, change: -1.2, volume: 15200000000, category: "Crypto", trending: false },
    { id: 3, name: "Solana", symbol: "SOL", price: 95, change: 5.8, volume: 2100000000, category: "Crypto", trending: true },
    { id: 4, name: "Cardano", symbol: "ADA", price: 1.2, change: -0.5, volume: 1500000000, category: "Crypto", trending: false },
    { id: 5, name: "Polkadot", symbol: "DOT", price: 18, change: 3.2, volume: 890000000, category: "Crypto", trending: false },
    { id: 6, name: "Chainlink", symbol: "LINK", price: 25, change: 4.1, volume: 1200000000, category: "Crypto", trending: true },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50/30 via-white to-pink-50/30">
      <div className="space-y-8 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-br from-purple-600 to-pink-500 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Markets
            </h1>
          </div>
          <p className="text-zinc-600 text-lg ml-14">
            Explore and analyze market predictions
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 ml-14">
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Search markets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border-2 border-purple-100 focus:border-purple-400 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300 font-semibold text-purple-600">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.name
                  ? "bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-md border-2 border-purple-400"
                  : "bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-100 hover:border-purple-300"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Markets", value: "156", change: "+12" },
            { label: "24h Volume", value: "$48.2B", change: "+8.3%" },
            { label: "Active Traders", value: "12.5K", change: "+5.2%" },
            { label: "Avg. Liquidity", value: "$2.1M", change: "+3.1%" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-md transition-all duration-300"
            >
              <p className="text-sm text-zinc-500 mb-1">{stat.label}</p>
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <span className="text-sm font-semibold text-green-600">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <MarketCard key={market.id} market={market} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <button className="px-8 py-4 bg-white text-purple-600 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all duration-300 font-bold">
            Load More Markets
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketsPage;
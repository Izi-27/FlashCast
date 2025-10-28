"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, Clock, ArrowUpRight, ArrowDownRight, Search, Filter, Zap, Activity } from "lucide-react";

// Stat Card Component with Subtle Border
const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-linear-to-br from-purple-50 to-pink-50 rounded-xl">
          <div className="text-purple-600">{stat.icon}</div>
        </div>
        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
          stat.change.startsWith("+") 
            ? "bg-green-50 text-green-600 border border-green-200" 
            : "bg-red-50 text-red-600 border border-red-200"
        }`}>
          {stat.change}
        </span>
      </div>
      <div>
        <p className="text-zinc-500 text-sm font-medium">{stat.label}</p>
        <h3 className="text-3xl font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mt-1">
          {stat.value}
        </h3>
      </div>
    </motion.div>
  );
};

// Market Card Component
const MarketCard = ({ market, index }: { market: any; index: number }) => {
  const isPositive = market.change >= 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="p-4 bg-white rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg border-2 border-purple-200">
              {market.symbol.charAt(0)}
            </div>
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              isPositive ? "bg-green-500" : "bg-red-500"
            }`}></div>
          </div>
          <div>
            <p className="font-bold text-zinc-800">{market.name}</p>
            <p className="text-sm text-zinc-500">{market.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg text-zinc-800">${market.price.toLocaleString()}</p>
          <div className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}>
            {isPositive ? (
              <ArrowUpRight className="w-4 h-4" />
            ) : (
              <ArrowDownRight className="w-4 h-4" />
            )}
            {Math.abs(market.change)}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Activity Item Component
const ActivityItem = ({ activity, index }: { activity: any; index: number }) => {
  const isBuy = activity.type === "buy";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center justify-between p-4 bg-linear-to-r from-purple-50/50 to-pink-50/50 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${
          isBuy 
            ? "bg-linear-to-br from-green-500 to-emerald-600" 
            : "bg-linear-to-br from-red-500 to-rose-600"
        }`}>
          {isBuy ? (
            <ArrowUpRight className="w-5 h-5 text-white" />
          ) : (
            <ArrowDownRight className="w-5 h-5 text-white" />
          )}
        </div>
        <div>
          <p className="font-semibold text-zinc-800">
            {isBuy ? "Bought" : "Sold"} {activity.coin}
          </p>
          <p className="text-sm text-zinc-500">
            {activity.amount} {activity.coin} @ ${activity.price.toLocaleString()}
          </p>
        </div>
      </div>
      <span className="text-sm text-zinc-400 font-medium">{activity.time}</span>
    </motion.div>
  );
};

const DashboardPage = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");

  const stats = [
    {
      label: "Total Value Locked",
      value: "$2.5M",
      change: "+12.5%",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      label: "24h Volume",
      value: "$850K",
      change: "+5.2%",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      label: "Active Users",
      value: "2.8K",
      change: "+8.1%",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Avg. Resolution Time",
      value: "45s",
      change: "-15%",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const markets = [
    { id: 1, name: "Bitcoin", symbol: "BTC", price: 45000, change: 2.5 },
    { id: 2, name: "Ethereum", symbol: "ETH", price: 2800, change: -1.2 },
    { id: 3, name: "Solana", symbol: "SOL", price: 95, change: 5.8 },
    { id: 4, name: "Cardano", symbol: "ADA", price: 1.2, change: -0.5 },
  ];

  const activities = [
    { id: 1, type: "buy", coin: "BTC", amount: 0.5, price: 45000, time: "2h ago" },
    { id: 2, type: "sell", coin: "ETH", amount: 2.5, price: 2800, time: "5h ago" },
    { id: 3, type: "buy", coin: "SOL", amount: 15, price: 95, time: "8h ago" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50/30 via-white to-pink-50/30">
      <div className="space-y-8 p-8">
        {/* Header with Animated Gradient */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-br from-purple-600 to-pink-500 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Dashboard Overview
            </h1>
          </div>
          <p className="text-zinc-600 text-lg ml-14">
            Welcome back! Here's what's happening with your markets.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-zinc-800 flex items-center gap-2">
                <Activity className="w-6 h-6 text-purple-600" />
                Market Overview
              </h2>
              <div className="flex gap-2">
                {["24h", "7d", "30d"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedTimeRange(range)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      selectedTimeRange === range
                        ? "bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-md"
                        : "bg-purple-50 text-purple-600 hover:bg-purple-100 border border-purple-200"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Chart Placeholder */}
            <div className="h-[300px] bg-linear-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <p className="text-zinc-400">Chart visualization goes here</p>
              </div>
            </div>
          </motion.div>

          {/* Top Markets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 h-full"
          >
            <h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              Top Markets
            </h2>
            <div className="space-y-3">
              {markets.map((market, index) => (
                <MarketCard key={market.id} market={market} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-zinc-800 flex items-center gap-2">
              <Activity className="w-6 h-6 text-purple-600" />
              Recent Activity
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-50 to-pink-50 text-purple-600 rounded-lg hover:from-purple-100 hover:to-pink-100 border border-purple-200 transition-all duration-300 font-semibold">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <ActivityItem key={activity.id} activity={activity} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Create Prediction", icon: <Sparkles className="w-6 h-6" />, color: "purple" },
            { title: "Explore Markets", icon: <Search className="w-6 h-6" />, color: "pink" },
            { title: "View Analytics", icon: <TrendingUp className="w-6 h-6" />, color: "purple" },
          ].map((action, index) => (
            <motion.button
              key={action.title}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-linear-to-br ${
                  action.color === "purple" 
                    ? "from-purple-500 to-purple-600" 
                    : "from-pink-500 to-pink-600"
                } text-white`}>
                  {action.icon}
                </div>
                <span className="font-bold text-lg text-zinc-800">{action.title}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
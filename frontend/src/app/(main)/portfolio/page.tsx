"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Activity,
  DollarSign,
  Target,
} from "lucide-react";

const PortfolioPage = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");

  const portfolioStats = [
    {
      label: "Total Value",
      value: "$15,482.65",
      change: "+12.5%",
      icon: <DollarSign className="w-6 h-6" />,
      positive: true,
    },
    {
      label: "24h Change",
      value: "+$1,234.50",
      change: "+8.7%",
      icon: <TrendingUp className="w-6 h-6" />,
      positive: true,
    },
    {
      label: "Total Predictions",
      value: "156",
      change: "+23",
      icon: <Target className="w-6 h-6" />,
      positive: true,
    },
    {
      label: "Success Rate",
      value: "76.3%",
      change: "+2.1%",
      icon: <Activity className="w-6 h-6" />,
      positive: true,
    },
  ];

  const assetDistribution = [
    {
      name: "BTC",
      percentage: 45,
      value: "$6,967.19",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "ETH",
      percentage: 30,
      value: "$4,644.80",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "SOL",
      percentage: 15,
      value: "$2,322.40",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Others",
      percentage: 10,
      value: "$1,548.26",
      color: "from-zinc-400 to-zinc-500",
    },
  ];

  const recentPredictions = [
    {
      id: 1,
      coin: "Bitcoin",
      type: "up",
      confidence: 85,
      timeFrame: "24h",
      status: "active",
      profit: "+$245",
    },
    {
      id: 2,
      coin: "Ethereum",
      type: "down",
      confidence: 72,
      timeFrame: "1w",
      status: "completed",
      profit: "+$180",
    },
    {
      id: 3,
      coin: "Solana",
      type: "up",
      confidence: 68,
      timeFrame: "12h",
      status: "active",
      profit: "+$95",
    },
    {
      id: 4,
      coin: "Cardano",
      type: "up",
      confidence: 91,
      timeFrame: "3d",
      status: "completed",
      profit: "+$320",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50/30 via-white to-pink-50/30">
      <div className="space-y-8 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-br from-purple-600 to-pink-500 rounded-xl">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>
          <p className="text-zinc-600 text-lg ml-14">
            Track and manage your predictions
          </p>
        </motion.div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-linear-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-purple-600">{stat.icon}</div>
                </div>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    stat.positive
                      ? "bg-green-50 text-green-600 border border-green-200"
                      : "bg-red-50 text-red-600 border border-red-200"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-zinc-500 text-sm font-medium">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-bold text-zinc-800 mt-1">
                  {stat.value}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-zinc-800 flex items-center gap-2">
                <Activity className="w-6 h-6 text-purple-600" />
                Portfolio Performance
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

            <div className="h-[300px] bg-linear-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <p className="text-zinc-400">Performance chart goes here</p>
              </div>
            </div>
          </motion.div>

          {/* Asset Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-2">
              <PieChart className="w-6 h-6 text-purple-600" />
              Asset Distribution
            </h2>

            {/* Doughnut Placeholder */}
            <div className="h-48 bg-linear-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 flex items-center justify-center mb-6">
              <PieChart className="w-16 h-16 text-purple-400" />
            </div>

            <div className="space-y-3">
              {assetDistribution.map((asset, index) => (
                <motion.div
                  key={asset.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-linear-to-br ${asset.color}`}
                    ></div>
                    <span className="font-medium text-zinc-800">
                      {asset.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-zinc-800">
                      {asset.percentage}%
                    </p>
                    <p className="text-sm text-zinc-500">{asset.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Predictions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-4 md:p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-xl md:text-2xl font-bold text-zinc-800 mb-4 md:mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            Recent Predictions
          </h2>
          <div className="space-y-4">
            {recentPredictions.map((prediction, index) => (
              <motion.div
                key={prediction.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-linear-to-r from-purple-50/50 to-pink-50/50 border border-purple-100 hover:border-purple-200 transition-all duration-300 space-y-4 md:space-y-0"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl shrink-0 ${
                      prediction.type === "up"
                        ? "bg-linear-to-br from-green-500 to-emerald-600"
                        : "bg-linear-to-br from-red-500 to-rose-600"
                    }`}
                  >
                    {prediction.type === "up" ? (
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-zinc-800">{prediction.coin}</p>
                    <p className="text-sm text-zinc-500 truncate">
                      {prediction.confidence}% confidence •{" "}
                      {prediction.timeFrame}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-[52px] md:ml-0">
                  <span className="font-bold text-green-600 order-1 md:order-0">
                    {prediction.profit}
                  </span>
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold order-2 md:order-0 ${
                      prediction.status === "active"
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "bg-green-50 text-green-600 border border-green-200"
                    }`}
                  >
                    {prediction.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, TrendingDown, Clock, Zap, ArrowUpRight, ArrowDownRight } from "lucide-react";

const PredictionsPage = () => {
  const [selectedAsset, setSelectedAsset] = useState("BTC");
  const [predictionType, setPredictionType] = useState("up");
  const [confidence, setConfidence] = useState(75);

  const stats = [
    { label: "Active Predictions", value: "12", icon: <Target className="w-6 h-6" />, color: "purple" },
    { label: "Success Rate", value: "76%", icon: <TrendingUp className="w-6 h-6" />, color: "green" },
    { label: "Avg Time Frame", value: "24h", icon: <Clock className="w-6 h-6" />, color: "blue" },
    { label: "Total Predictions", value: "156", icon: <Zap className="w-6 h-6" />, color: "pink" },
  ];

  const predictionHistory = [
    { asset: "Bitcoin", type: "up", timeFrame: "24h", confidence: 85, result: "success", date: "2025-10-27", profit: "+$245" },
    { asset: "Ethereum", type: "down", timeFrame: "12h", confidence: 70, result: "failed", date: "2025-10-26", profit: "-$80" },
    { asset: "Solana", type: "up", timeFrame: "1w", confidence: 90, result: "success", date: "2025-10-25", profit: "+$320" },
    { asset: "Cardano", type: "up", timeFrame: "3d", confidence: 82, result: "success", date: "2025-10-24", profit: "+$190" },
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
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Predictions
            </h1>
          </div>
          <p className="text-zinc-600 text-lg ml-14">
            Create and track your market predictions
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-zinc-500 text-sm font-medium">{stat.label}</p>
                  <h3 className="text-3xl font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mt-1">
                    {stat.value}
                  </h3>
                </div>
                <div className={`p-3 rounded-xl bg-linear-to-br ${
                  stat.color === "purple" ? "from-purple-500 to-purple-600" :
                  stat.color === "green" ? "from-green-500 to-green-600" :
                  stat.color === "blue" ? "from-blue-500 to-blue-600" :
                  "from-pink-500 to-pink-600"
                } text-white`}>
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Prediction Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600" />
            Create New Prediction
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Asset Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Asset</label>
                <div className="grid grid-cols-3 gap-3">
                  {["BTC", "ETH", "SOL"].map((asset) => (
                    <button
                      key={asset}
                      type="button"
                      onClick={() => setSelectedAsset(asset)}
                      className={`p-4 rounded-xl font-bold transition-all duration-300 ${
                        selectedAsset === asset
                          ? "bg-linear-to-br from-purple-600 to-pink-500 text-white shadow-md"
                          : "bg-purple-50 text-purple-600 hover:bg-purple-100 border-2 border-purple-200"
                      }`}
                    >
                      {asset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prediction Type */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Prediction Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPredictionType("up")}
                    className={`p-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                      predictionType === "up"
                        ? "bg-linear-to-br from-green-500 to-emerald-600 text-white shadow-md"
                        : "bg-green-50 text-green-600 hover:bg-green-100 border-2 border-green-200"
                    }`}
                  >
                    <TrendingUp className="w-5 h-5" />
                    Price Up
                  </button>
                  <button
                    type="button"
                    onClick={() => setPredictionType("down")}
                    className={`p-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                      predictionType === "down"
                        ? "bg-linear-to-br from-red-500 to-rose-600 text-white shadow-md"
                        : "bg-red-50 text-red-600 hover:bg-red-100 border-2 border-red-200"
                    }`}
                  >
                    <TrendingDown className="w-5 h-5" />
                    Price Down
                  </button>
                </div>
              </div>

              {/* Time Frame */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Time Frame</label>
                <select
                  title="time"
                  className="w-full p-4 rounded-xl bg-white border-2 border-purple-100 focus:border-purple-400 focus:outline-none text-zinc-800 font-medium"
                >
                  <option>12 Hours</option>
                  <option>24 Hours</option>
                  <option>3 Days</option>
                  <option>1 Week</option>
                </select>
              </div>

              {/* Confidence Level */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700 flex justify-between">
                  <span>Confidence Level</span>
                  <span className="text-purple-600">{confidence}%</span>
                </label>
                <input
                  title="level"
                  type="range"
                  min="0"
                  max="100"
                  value={confidence}
                  onChange={(e) => setConfidence(Number(e.target.value))}
                  className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-xs text-zinc-500 font-medium">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full p-4 rounded-xl bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Create Prediction
            </button>
          </form>
        </motion.div>

        {/* Prediction History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-600" />
            Prediction History
          </h2>
          <div className="space-y-4">
            {predictionHistory.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-linear-to-r from-purple-50/50 to-pink-50/50 border border-purple-100 hover:border-purple-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    prediction.type === "up"
                      ? "bg-linear-to-br from-green-500 to-emerald-600"
                      : "bg-linear-to-br from-red-500 to-rose-600"
                  }`}>
                    {prediction.type === "up" ? (
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-800">{prediction.asset}</p>
                    <p className="text-sm text-zinc-500">
                      {prediction.confidence}% confidence • {prediction.timeFrame}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-zinc-500 font-medium">{prediction.date}</span>
                  <span className={`font-bold ${
                    prediction.result === "success" ? "text-green-600" : "text-red-600"
                  }`}>
                    {prediction.profit}
                  </span>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                    prediction.result === "success"
                      ? "bg-green-50 text-green-600 border border-green-200"
                      : "bg-red-50 text-red-600 border border-red-200"
                  }`}>
                    {prediction.result}
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

export default PredictionsPage;
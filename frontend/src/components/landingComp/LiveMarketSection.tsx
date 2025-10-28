"use client";

import { motion } from "framer-motion";
import { Timer, TrendingUp, Trophy } from "lucide-react";
import FloatingCard from "../ui/FloatingCard";

const LiveMarketsSection = () => {
  const markets = [
    {
      id: 1,
      title: "Next Goal in Real Madrid vs Barcelona",
      timeLeft: "1:30",
      volume: "5.2K USDC",
      type: "Sports",
      odds: { yes: 2.5, no: 1.65 },
      color: "from-green-500/20 to-blue-500/20",
    },
    {
      id: 2,
      title: "BTC > $40K in next 60s",
      timeLeft: "0:45",
      volume: "12.5K USDC",
      type: "Crypto",
      odds: { yes: 3.1, no: 1.4 },
      color: "from-orange-500/20 to-yellow-500/20",
    },
    {
      id: 3,
      title: "Next Kill in LoL World Finals",
      timeLeft: "2:00",
      volume: "8.7K USDC",
      type: "Esports",
      odds: { yes: 1.95, no: 1.95 },
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section className="py-32 bg-linear-to-b from-black via-purple-900/5 to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Live Markets
          </h2>
          <p className="text-xl text-gray-400">
            Real-time predictions happening now
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <FloatingCard key={market.id} delay={index * 0.15}>
              <div
                className={`relative p-8 rounded-2xl bg-linear-to-br ${market.color} border border-purple-500/30 backdrop-blur-sm overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-semibold flex-1">
                      {market.title}
                    </h3>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-purple-500/30 rounded-full text-xs font-semibold ml-4"
                    >
                      {market.type}
                    </motion.span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Timer className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-semibold">
                        {market.timeLeft}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-semibold">
                        {market.volume}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-semibold">
                        {market.odds.yes}x
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(34, 197, 94, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 bg-green-500/20 text-white rounded-lg font-semibold border border-green-500/30"
                    >
                      Yes {market.odds.yes}x
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(239, 68, 68, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 bg-red-500/20 text-white rounded-lg font-semibold border border-red-500/30"
                    >
                      No {market.odds.no}x
                    </motion.button>
                  </div>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(168, 85, 247, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-linear-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg"
          >
            View All Markets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default LiveMarketsSection;
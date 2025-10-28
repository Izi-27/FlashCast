"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Network, Zap } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "10K+",
      label: "Active Traders",
      icon: <Users className="w-8 h-8" />,
    },
    {
      value: "$2.5M",
      label: "Total Volume",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      value: "50K+",
      label: "Markets Created",
      icon: <Network className="w-8 h-8" />,
    },
    {
      value: "<100ms",
      label: "Avg Settlement",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-32 bg-linear-to-b from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-8 rounded-2xl bg-linear-to-br from-purple-900/20 to-black border border-purple-500/20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="flex justify-center mb-4 text-purple-400"
              >
                {stat.icon}
              </motion.div>
              <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

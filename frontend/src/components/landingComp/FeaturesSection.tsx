"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Shield, Bot } from "lucide-react";
import FloatingCard from "../ui/FloatingCard";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Lightning Fast",
      description:
        "Instant, gasless trading on real-world events with millisecond execution",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Real-Time Events",
      description:
        "Bet on micro-events like next goals, price spikes, and esports actions",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure Architecture",
      description:
        "Built on Linera's microchain architecture for isolated, high-performance markets",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI-Powered",
      description:
        "Autonomous trading agents operating as peers in the network",
      color: "from-green-500 to-blue-500",
    },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Why Choose FlashCast
          </h2>
          <p className="text-xl text-gray-400">
            Experience the future of prediction markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FloatingCard key={index} delay={index * 0.1}>
              <div className="relative p-8 rounded-2xl bg-linear-to-br from-black via-purple-900/10 to-black border border-purple-500/20 backdrop-blur-sm h-full overflow-hidden">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-6 p-4 rounded-xl bg-linear-to-br ${feature.color} w-fit`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}

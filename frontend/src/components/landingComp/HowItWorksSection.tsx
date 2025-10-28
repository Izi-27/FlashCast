"use client";

import { motion } from "framer-motion";
import { Target, Coins, BarChart3 } from "lucide-react";
import FloatingCard from "../ui/FloatingCard";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Create Market",
      description:
        "Define your event and set expiration time in seconds or minutes",
      step: "01",
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "Place Trades",
      description: "Instant, gasless trading with real-time odds updates",
      step: "02",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Auto Resolution",
      description:
        "Oracle detects outcome and distributes payouts automatically",
      step: "03",
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
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Start trading in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <FloatingCard key={index} delay={index * 0.2}>
              <div className="relative p-8 rounded-2xl bg-linear-to-br from-purple-900/20 to-black border border-purple-500/20 text-center">
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-linear-to-r from-purple-500 to-pink-600 flex items-center justify-center font-bold text-xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.step}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 mt-4 flex justify-center"
                >
                  <div className="p-4 rounded-xl bg-linear-to-br from-purple-500/20 to-pink-500/20">
                    {step.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}

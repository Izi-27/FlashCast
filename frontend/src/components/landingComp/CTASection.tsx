"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-8"
          >
            🚀
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of traders making predictions on real-time events
          </p>

          <Link href="/dashboard">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-linear-to-r from-purple-500 to-pink-600 text-white text-lg font-bold rounded-lg inline-flex items-center gap-3"
            >
              Launch App Now <Rocket className="w-6 h-6" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
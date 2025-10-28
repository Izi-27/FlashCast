"use client";

import { motion } from "framer-motion";
import {
  Search,
  Book,
  MessageCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50/30 via-white to-pink-50/30">
      <div className="space-y-8 p-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-linear-to-br from-purple-600 to-pink-500 rounded-xl">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Help Center
            </h1>
          </div>
          <p className="text-zinc-600 text-lg ml-14">
            Find answers and support for FlashCast
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-2xl">
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border-2 border-purple-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Getting Started",
              description: "Learn the basics of FlashCast",
              icon: Book,
              links: [
                "Platform Overview",
                "Creating an Account",
                "Making Predictions",
              ],
            },
            {
              title: "FAQs",
              description: "Commonly asked questions",
              icon: HelpCircle,
              links: [
                "Account Security",
                "Deposits & Withdrawals",
                "Prediction Rules",
              ],
            },
            {
              title: "Contact Support",
              description: "Get help from our team",
              icon: MessageCircle,
              links: ["Submit a Ticket", "Live Chat", "Email Support"],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-500">
                  <section.icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <p className="text-zinc-400 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <span>{link}</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Popular Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-xl bg-white/5 border border-white/10"
        >
          <h2 className="text-xl font-bold mb-6">Popular Articles</h2>
          <div className="space-y-4">
            {[
              "How to Make Your First Prediction",
              "Understanding Success Rates",
              "Deposit and Withdrawal Methods",
              "Security Best Practices",
              "Prediction Strategies Guide",
            ].map((article, index) => (
              <button
                key={article}
                className="flex items-center justify-between w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-purple-500">0{index + 1}</span>
                  <span>{article}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HelpPage;
"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  History,
} from "lucide-react";

const WalletPage = () => {
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
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Wallet
            </h1>
          </div>
          <p className="text-zinc-600 text-lg ml-14">
            Manage your funds and transactions
          </p>
        </motion.div>

        {/* Wallet Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2 p-6 rounded-xl bg-white border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-xl font-bold text-zinc-800">
                  Total Balance
                </h2>
                <p className="text-4xl font-bold mt-2 bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  $15,482.65
                </p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50">
                <Wallet className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                <ArrowUpRight className="w-5 h-5" /> Deposit
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                <ArrowDownRight className="w-5 h-5" /> Withdraw
              </button>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl font-bold mb-4 text-zinc-800">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors">
                <CreditCard className="w-5 h-5" />
                <span>Add Payment Method</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors">
                <History className="w-5 h-5" />
                <span>Transaction History</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-white border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-xl font-bold mb-6 text-zinc-800">
            Recent Transactions
          </h2>
          <div className="space-y-4">
            {[
              {
                type: "deposit",
                amount: 1000,
                date: "2025-10-28",
                status: "completed",
                description: "Deposit via Bank Transfer",
              },
              {
                type: "withdraw",
                amount: 500,
                date: "2025-10-27",
                status: "pending",
                description: "Withdrawal to Bank Account",
              },
              {
                type: "prediction",
                amount: 250,
                date: "2025-10-26",
                status: "completed",
                description: "BTC Price Prediction",
              },
            ].map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-purple-50/50"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      transaction.type === "deposit"
                        ? "bg-emerald-500/20 text-emerald-500"
                        : transaction.type === "withdraw"
                        ? "bg-rose-500/20 text-rose-500"
                        : "bg-purple-500/20 text-purple-500"
                    }`}
                  >
                    {transaction.type === "deposit" ? (
                      <ArrowUpRight className="w-5 h-5" />
                    ) : transaction.type === "withdraw" ? (
                      <ArrowDownRight className="w-5 h-5" />
                    ) : (
                      <CreditCard className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-zinc-400">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {transaction.type === "withdraw" ? "-" : "+"}$
                    {transaction.amount}
                  </p>
                  <span
                    className={`text-sm ${
                      transaction.status === "completed"
                        ? "text-emerald-500"
                        : "text-purple-500"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WalletPage;

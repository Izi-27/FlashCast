"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Activity {
  id: number;
  type: "buy" | "sell";
  coin: string;
  amount: number;
  price: number;
  time: string;
}

const recentActivities: Activity[] = [
  {
    id: 1,
    type: "buy",
    coin: "BTC",
    amount: 0.5,
    price: 45000,
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "sell",
    coin: "ETH",
    amount: 2.5,
    price: 2800,
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "buy",
    coin: "SOL",
    amount: 15,
    price: 95,
    time: "8 hours ago",
  },
];

const RecentActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-white/5 border border-white/10"
    >
      <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  activity.type === "buy"
                    ? "bg-emerald-500/20 text-emerald-500"
                    : "bg-rose-500/20 text-rose-500"
                }`}
              >
                {activity.type === "buy" ? (
                  <ArrowUpRight className="w-5 h-5" />
                ) : (
                  <ArrowDownRight className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className="font-medium">
                  {activity.type === "buy" ? "Bought" : "Sold"} {activity.coin}
                </p>
                <p className="text-sm text-zinc-400">
                  {activity.amount} {activity.coin} @ ${activity.price}
                </p>
              </div>
            </div>
            <span className="text-sm text-zinc-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default RecentActivity;
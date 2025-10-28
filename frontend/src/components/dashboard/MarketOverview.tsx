"use client";

import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
  datasets: [
    {
      data: [2500, 3200, 2800, 4100, 3800, 4500, 4200],
      borderColor: "#fff",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      tension: 0.4,
      borderWidth: 2,
      fill: false,
      pointRadius: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#a1a1aa",
      bodyColor: "#fff",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
      padding: 10,
      cornerRadius: 8,
      callbacks: {
        label: function (context: any) {
          return `$${context.raw.toLocaleString()}`;
        },
      },
    },
  },
  scales: {
    x: {
      type: "category" as const,
      grid: {
        display: false,
      },
      ticks: {
        color: "#71717a",
        font: {
          size: 12,
        },
      },
      border: {
        display: false,
      },
    },
    y: {
      type: "linear" as const,
      grid: {
        color: "rgba(113, 113, 122, 0.1)",
      },
      ticks: {
        color: "#71717a",
        font: {
          size: 12,
        },
        callback: function (value: number | string) {
          return `$${value}`;
        },
      },
      border: {
        display: false,
      },
    },
  },
};

const MarketOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-white/5 border border-white/10"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Market Overview</h2>
        <select
          aria-label="Time range"
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm"
        >
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>

      <div className="h-[300px]">
        <Line data={data} options={chartOptions} />
      </div>
    </motion.div>
  );
}

export default MarketOverview;
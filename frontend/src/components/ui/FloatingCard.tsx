"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FloatingCard({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        rotateY: 5,
        boxShadow: "0 20px 60px rgba(168, 85, 247, 0.3)"
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative overflow-hidden rounded-2xl "
    >
      {children}
    </motion.div>
  );
}
"use client";
import { motion } from "framer-motion";

export const ProgressBar = ({ value, max = 100, gradient }: IProgressBar) => (
  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${(value / max) * 100}%` }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`h-full ${gradient}`}
    />
  </div>
);

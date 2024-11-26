"use client";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
import { StatTooltip } from "./StatTooltip";
import { IStatCard } from "@/lib/types";

export const StatCard = ({
  title,
  value,
  tooltipContent,
  icon: Icon = InfoIcon,
  valueColor = "text-white",
  className = "",
}: IStatCard) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`rounded-lg border border-purple-500/10 bg-gray-800/40 p-4 transition-colors duration-200 hover:bg-gray-800/60 ${className} overflow-x-hidden break-normal`}
  >
    <StatTooltip content={tooltipContent}>
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-gray-400" />
        <span className="text-gray-400">{title}</span>
      </div>
    </StatTooltip>
    <span className={`text-2xl font-medium ${valueColor}`}>{value}</span>
  </motion.div>
);

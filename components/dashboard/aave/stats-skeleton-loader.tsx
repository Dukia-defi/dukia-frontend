"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";

const SkeletonStatCard = () => (
  <div className="flex flex-col justify-between space-y-6">
    <motion.div
      className="rounded-lg bg-gray-700/50 p-4"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="mb-2 h-6 w-1/2 rounded bg-gray-600/50"></div>
      <div className="h-8 w-3/4 rounded bg-gray-600/50"></div>
    </motion.div>

    <div className="flex flex-1 flex-col justify-around rounded-lg border border-purple-500/10 bg-gray-800/40 p-4">
      <div className="mb-3 flex items-center gap-2">
        <InfoIcon className="h-4 w-4 text-gray-400" />
        <div className="h-4 w-1/2 rounded bg-gray-600/50"></div>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-600/50"></div>
    </div>
  </div>
);

export const AaveStatsSkeleton = () => {
  return (
    <Card className="w-full border-purple-500/10 bg-gray-900/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
          <SkeletonStatCard />
          <SkeletonStatCard />
          <SkeletonStatCard />
        </div>
      </CardContent>
    </Card>
  );
};

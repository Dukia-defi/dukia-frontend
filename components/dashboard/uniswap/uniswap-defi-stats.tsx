"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
import { ProgressBar, StatCard, StatTooltip } from "@/components/common";

export const UniswapDefiStats = (props: IDefiStats) => {
  return (
    <Card className="w-full border-purple-500/10 bg-gray-900/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center gap-2"
        >
          <StatTooltip content="Net Annual Percentage Yield across all positions">
            <div className="flex items-center gap-2">
              <InfoIcon className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">Net APY:</span>
              <span className="text-xl font-medium text-purple-400">
                {props.netApy}%
              </span>
            </div>
          </StatTooltip>
        </motion.div>

        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* Supply Stats */}
          <div className="flex flex-col justify-between space-y-6">
            <StatCard
              title="Liquidity Provided"
              value={`$${props.supplyBalance?.toLocaleString()}`}
              tooltipContent="Total value of supplied assets"
            />
          </div>

          {/* Borrow Stats */}
          <div className="flex flex-col justify-between space-y-6">
            <StatCard
              title="Pools Provided"
              value={`$${props.borrowBalance?.toLocaleString()}`}
              tooltipContent="Total value of borrowed assets"
            />
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

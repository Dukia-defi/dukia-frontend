"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
import { StatCard, StatTooltip } from "@/components/common";

export const UniswapDefiStats = (props: IUniswapStats) => {
  return (
    <Card className="w-full border-purple-500/10 bg-gray-900/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center gap-2"
        >
          <StatTooltip content="Net Annual Percentage Yield across all pools">
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
          <div>
            <StatCard
              title="Liquidity Provided"
              value={`$${props.liquityProvided?.toLocaleString()}`}
              tooltipContent="Total liquidity provided to uniswap pools"
            />
          </div>

          <div>
            <StatCard
              title="Pools Provided"
              value={`$${props.poolsProvided?.toLocaleString()}`}
              tooltipContent="All pools with liquidity from you"
            />
          </div>

          <div>
            <StatCard
              title="Profit"
              value={`$${props.profit?.toLocaleString()}`}
              tooltipContent="Total profit made from pools"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
import { ProgressBar, StatCard, StatTooltip } from "@/components/common";

export const AaveStats = (props: IAaveStats) => {
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
              title="Supply Balance"
              value={`$${props.supplyBalance?.toLocaleString()}`}
              tooltipContent="Total value of supplied assets"
            />

            <div className="flex flex-1 flex-col justify-around rounded-lg border border-purple-500/10 bg-gray-800/40 p-4 transition-colors duration-200 hover:bg-gray-800/60">
              <StatTooltip content="Distribution of supplied assets">
                <h3 className="mb-3 flex items-center gap-2 text-gray-400">
                  <InfoIcon className="h-4 w-4" />
                  Supply composition
                </h3>
              </StatTooltip>
              <ProgressBar
                value={props.supplyComposition}
                gradient="bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
              />
            </div>
          </div>

          {/* Borrow Stats */}
          <div className="flex flex-col justify-between space-y-6">
            <StatCard
              title="Borrow Balance"
              value={`$${props.borrowBalance?.toLocaleString()}`}
              tooltipContent="Total value of borrowed assets"
            />

            <div className="flex flex-1 flex-col justify-around rounded-lg border border-purple-500/10 bg-gray-800/40 p-4 transition-colors duration-200 hover:bg-gray-800/60">
              <StatTooltip content="Percentage of your total borrow limit being used">
                <h3 className="mb-3 flex items-center gap-2 text-gray-400">
                  <InfoIcon className="h-4 w-4" />
                  Borrow power used
                </h3>
              </StatTooltip>
              <div className="relative">
                <div className="mb-2 flex justify-between text-sm text-gray-400">
                  <span>0%</span>
                  <span>100%</span>
                </div>
                <ProgressBar
                  value={props.borrowPowerUsed}
                  gradient="bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Safety Stats */}
          <div className="flex flex-col justify-between space-y-6">
            <StatCard
              title="Safety ratio (min 100%)"
              value={`${props.safetyRatio}%`}
              tooltipContent="Collateral value relative to borrowed value. Higher is safer."
              valueColor={
                props.safetyRatio >= 100 ? "text-green-400" : "text-red-400"
              }
            />

            <div className="flex flex-1 flex-col rounded-lg border border-purple-500/10 bg-gray-800/40 p-4 transition-colors duration-200 hover:bg-gray-800/60">
              <StatTooltip content="Maximum amount you can borrow based on your collateral">
                <div className="mb-2 flex items-center gap-2">
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">Borrow Limit</span>
                </div>
              </StatTooltip>
              <span className="text-3xl font-medium text-white">
                ${props.borrowLimit?.toLocaleString()}
              </span>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="text-gray-400">Left to Borrow:</span>
                <span className="text-purple-400">
                  ${props.leftToBorrow?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
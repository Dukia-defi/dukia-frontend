"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";
import { ProgressBar, StatCard, StatTooltip } from "@/components/common";
import { useWallet } from "@/context/wallet";
import { useFormattedAaveData } from "@/hooks/useFormattedAaveData";
import { AaveStatsSkeleton } from "./stats-skeleton-loader";

export const AaveStats = () => {
  const {
    wallet: { address },
  } = useWallet();

  const { data, isLoading, error } = useFormattedAaveData(address);

  if (isLoading) return <AaveStatsSkeleton />;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data available</div>;

  const healthFactor = parseFloat(data.healthFactor);

  return (
    <Card className="w-full border-purple-500/10 bg-gray-900/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* Supply Stats */}
          <div className="flex flex-col justify-between space-y-6">
            <StatCard
              title="Supply Balance"
              value={data.totalCollateralBase}
              tooltipContent="Total value of supplied assets"
            />

            <div className="flex flex-1 flex-col justify-around rounded-lg border border-purple-500/10 bg-gray-800/40 p-4 transition-colors duration-200 hover:bg-gray-800/60">
              <StatTooltip content="Loan-to-value (LTV) is a ratio that determines how much cryptocurrency a user can borrow against their collateral">
                <h3 className="mb-3 flex items-center gap-2 text-gray-400">
                  <InfoIcon className="h-4 w-4" />
                  LTV
                </h3>
              </StatTooltip>
              <ProgressBar
                value={Number(data.ltv)}
                gradient="bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
              />
            </div>
          </div>

          {/* Borrow Stats */}
          <div className="flex flex-col justify-between space-y-6">
            <StatCard
              title="Borrow Balance"
              value={data.availableBorrowsBase}
              tooltipContent="Total value of borrowed assets"
            />

            <div className="flex flex-1 flex-col justify-around rounded-lg border border-purple-500/10 bg-gray-800/40 p-4 transition-colors duration-200 hover:bg-gray-800/60">
              <StatTooltip content="Current liquidation threshold">
                <h3 className="mb-3 flex items-center gap-2 text-gray-400">
                  <InfoIcon className="h-4 w-4" />
                  Liquidation Threshold
                </h3>
              </StatTooltip>
              <div className="relative">
                <div className="mb-2 flex justify-between text-sm text-gray-400">
                  <span>0%</span>
                  <span>100%</span>
                </div>
                <ProgressBar
                  value={Number(data.currentLiquidationThreshold)}
                  gradient="bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Safety Stats */}
          <div className="flex flex-col justify-between space-y-6">
            <StatCard
              title="Health Factor (min 1.0)"
              value={data.healthFactor}
              tooltipContent="Collateral value relative to borrowed value. Higher is safer."
              valueColor={healthFactor >= 1 ? "text-green-400" : "text-red-400"}
            />

            <div className="flex flex-1 flex-col rounded-lg border border-purple-500/10 bg-gray-800/40 p-4 transition-colors duration-200 hover:bg-gray-800/60">
              <StatTooltip content="Total debt base">
                <div className="mb-2 flex items-center gap-2">
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">Debt Base</span>
                </div>
              </StatTooltip>
              <span className="text-xl font-medium text-white">
                {data.totalDebtBase}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

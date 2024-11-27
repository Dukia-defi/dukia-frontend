"use client";

import { PortfolioSummary } from "./portfolio-summary";
import { ActivePositions } from "./active-positions";
import { useWallet } from "@/context/wallet";
import { useFormattedAaveData } from "@/hooks/useFormattedAaveData";
import { AaveStatsSkeleton } from "./aave/stats-skeleton-loader";

export function PortfolioOverview() {
  const {
    wallet: { address },
  } = useWallet();

  const { data, isLoading, error } = useFormattedAaveData(address);

  if (isLoading) return <AaveStatsSkeleton />;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>No data available</div>;

  return (
    <>
      <PortfolioSummary data={data} />

      <ActivePositions data={data} />
    </>
  );
}

"use client";

import { PortfolioSummary } from "./portfolio-summary";
import { ActivePositions } from "./active-positions";
import { useWallet } from "@/context/wallet";
import { useFormattedAaveData } from "@/hooks/useFormattedAaveData";
import { AaveStatsSkeleton } from "./aave/stats-skeleton-loader";
import { UserBalances } from "./user-balances";
import { useGetUserBalances } from "@/hooks/useGetUserBalances";

export function PortfolioOverview() {
  const {
    wallet: { address },
    chain,
  } = useWallet();

  const {
    data: defiData,
    isLoading: defiLoading,
    error: defiError,
  } = useFormattedAaveData(address);

  const {
    data: balance,
    isLoading: balanceLoading,
    isError: balanceError,
  } = useGetUserBalances({
    selectedChain: chain,
    userAddress: address,
  });

  return (
    <div className="mb-40 space-y-14">
      {balanceLoading ? (
        <AaveStatsSkeleton />
      ) : balanceError ? (
        <div>Error loading data</div>
      ) : !balance.usdc ? (
        <div>No data available</div>
      ) : (
        <UserBalances data={balance} />
      )}

      {defiLoading ? (
        <AaveStatsSkeleton />
      ) : defiError ? (
        <div>Error loading data</div>
      ) : !defiData ? (
        <div>No data available</div>
      ) : (
        <>
          <PortfolioSummary data={defiData} />

          <ActivePositions data={defiData} />
        </>
      )}
    </div>
  );
}

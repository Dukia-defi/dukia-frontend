"use client";

import { useWallet } from "@/context/wallet";
import { PortfolioSummary } from "./portfolio-summary";
import { ActivePositions } from "./active-positions";

export function PortfolioOverview() {
  const { wallet } = useWallet();

  return (
    <>
      <PortfolioSummary data={wallet} />

      <ActivePositions />
    </>
  );
}

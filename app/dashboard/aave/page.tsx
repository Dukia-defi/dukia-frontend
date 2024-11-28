"use client";

import { SectionLabel } from "@/components/sections";
import Image from "next/image";
import { aave_analytics_columns } from "@/components/dashboard/aave/aave-analytics-columns";
import { DataTable } from "@/components/ui/data-table";
import { dummy_aave_analytics_data } from "@/lib/data";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AnimatePresence } from "framer-motion";
import { ConnectWallet } from "@/components/dashboard/connect-wallet";
import { useWallet } from "@/context/wallet";
import AaveInteractionInterface from "@/components/dashboard/aave/aave-interaction-interface";
import { AaveStats } from "@/components/dashboard/aave/aave-stats";
import { useGetUserBalances } from "@/hooks/useGetUserBalances";
import { getTokenBalance } from "@/lib/utils";

export default function AavePage() {
  const {
    isConnected,
    wallet: { address },
    chain,
  } = useWallet();

  const { data, isLoading, isError } = useGetUserBalances({
    selectedChain: chain,
    userAddress: address,
  });

  const getUserBalance = (token: string): number => {
    return isLoading || isError || !data.dai
      ? 0
      : getTokenBalance({ token, data });
  };

  return (
    <section className="mb-40">
      <DashboardHeader
        title={
          <div className="mb-6 flex flex-col items-start">
            <Image
              src="/svg/aave.svg"
              width={70}
              height={40}
              alt="aave"
              className="hidden md:block"
            />
            <SectionLabel title="Aave" className="text-2xl md:text-3xl" />
          </div>
        }
      />

      <AnimatePresence mode="wait">
        {!isConnected ? (
          <ConnectWallet />
        ) : (
          <>
            <AaveStats />

            <AaveInteractionInterface getTokenBalance={getUserBalance} />

            <DataTable
              columns={aave_analytics_columns}
              data={dummy_aave_analytics_data}
              filterBy="asset"
              tableTitle="Market Info"
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

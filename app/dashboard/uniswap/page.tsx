"use client";

import { ConnectWallet } from "@/components/dashboard/connect-wallet";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { uniswap_analytics_columns } from "@/components/dashboard/uniswap/uniswap-analytics-column";
import { UniswapDefiStats } from "@/components/dashboard/uniswap/uniswap-defi-stats";
import { UniswapInteractionInterface } from "@/components/dashboard/uniswap/uniswap-interaction-interface";
import { SectionLabel } from "@/components/sections";
import { DataTable } from "@/components/ui/data-table";
import { useWallet } from "@/context/wallet";
import { useGetUserBalances } from "@/hooks/useGetUserBalances";
import { dummy_uniswap_analytics_data } from "@/lib/data";
import { IUniswapStats } from "@/lib/types";
import { getTokenBalance } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function UniswapPage() {
  const {
    isConnected,
    wallet: { address },
    chain,
  } = useWallet();

  const props: IUniswapStats = {
    netApy: 0,
    liquityProvided: 100,
    poolsProvided: 4,
    profit: 20,
  };

  const { data, isError, isLoading } = useGetUserBalances({
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
              src="/svg/uniswap.svg"
              width={50}
              height={30}
              alt="uniswap"
              className="hidden md:block"
            />
            <SectionLabel title="Uniswap" className="text-2xl md:text-3xl" />
          </div>
        }
      />

      <AnimatePresence mode="wait">
        {!isConnected ? (
          <ConnectWallet />
        ) : (
          <>
            <UniswapDefiStats {...props} />

            <UniswapInteractionInterface getTokenBalance={getUserBalance} />

            <DataTable
              columns={uniswap_analytics_columns}
              data={dummy_uniswap_analytics_data}
              filterBy="pool"
              tableTitle="Market Info"
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

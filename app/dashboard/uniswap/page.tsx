"use client";

import { ConnectWallet } from "@/components/dashboard/connect-wallet";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { uniswap_analytics_columns } from "@/components/dashboard/uniswap/uniswap-analytics-column";
import { UniswapDefiStats } from "@/components/dashboard/uniswap/uniswap-defi-stats";
import { UniswapInteractionInterface } from "@/components/dashboard/uniswap/uniswap-interaction-interface";
import { SectionLabel } from "@/components/sections";
import { DataTable } from "@/components/ui/data-table";
import { useWallet } from "@/context/wallet";
import { dummy_uniswap_analytics_data } from "@/lib/data";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function UniswapPage() {
  const { isConnected } = useWallet();

  const props: IUniswapStats = {
    netApy: 0,
    liquityProvided: 100,
    poolsProvided: 4,
    profit: 20,
  };

  return (
    <section>
      <DashboardHeader
        title={
          <div className="mb-6 flex flex-col items-start">
            <Image
              src="/svg/uniswap.svg"
              width={50}
              height={30}
              alt="uniswap"
            />
            <SectionLabel title="Uniswap" className="text-3xl" />
          </div>
        }
      />

      <AnimatePresence mode="wait">
        {!isConnected ? (
          <ConnectWallet />
        ) : (
          <>
            <UniswapDefiStats {...props} />
            <UniswapInteractionInterface />
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

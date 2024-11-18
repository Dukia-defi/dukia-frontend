"use client";

import { DefiInterface, DefiStats } from "@/components/dashboard";
import { ConnectWallet } from "@/components/dashboard/connect-wallet";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { uniswap_analytics_columns } from "@/components/dashboard/uniswap/uniswap-analytics-column";
import { SectionLabel } from "@/components/sections";
import { DataTable } from "@/components/ui/data-table";
import { useWallet } from "@/context/wallet";
import { dummy_uniswap_analytics_data } from "@/lib/data";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function UniswapPage() {
  const { isConnected } = useWallet();

  const props: IDefiStats = {
    netApy: 0,
    supplyBalance: 100,
    supplyComposition: 27,
    borrowBalance: 0,
    borrowPowerUsed: 40,
    safetyRatio: 0,
    borrowLimit: 0,
    leftToBorrow: 0,
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
            <DefiStats {...props} />
            <DefiInterface />
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

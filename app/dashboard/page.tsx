"use client";

import { ConnectWallet } from "@/components/dashboard/connect-wallet";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview";
import { useWallet } from "@/context/wallet";

export default function DashboardPage() {
  //todo work on connected state (portfolio overview) and unconnected state (connect wallet)

  const { wallet, setWallet } = useWallet();

  const { address, balance } = wallet;

  const handleConnect = () => {
    setWallet((prev) => ({
      ...prev,
      address: address === "" ? dummyAddr : "",
    }));
  };

  const dummyAddr = "0x9c...15e";

  return (
    <>
      <DashboardHeader
        address={address}
        balance={balance}
        connectFn={handleConnect}
      />

      {address === "" ? (
        <ConnectWallet connectFn={handleConnect} />
      ) : (
        <PortfolioOverview />
      )}
    </>
  );
}

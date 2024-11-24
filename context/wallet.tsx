"use client";

import { client } from "@/app/client";
import { INetwork, IWallet, IWalletContext } from "@/lib/types";
import { createContext, useContext, useState, useEffect } from "react";
import {
  useActiveAccount,
  useWalletBalance,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
} from "thirdweb/react";

const initialWalletState: IWallet = {
  address: "",
  balance: 0,
  networth: 0,
  borrowed: 0,
  staked: 0,
  supplied: 0,
  claimable: 0,
};

const networkOptions: INetwork[] = [
  { id: "ethereum", name: "Ethereum", icon: "/svg/ethereum.svg" },
  { id: "lisk", name: "Lisk", icon: "/svg/lisk.svg" },
  { id: "arbitrum", name: "Arbitrum", icon: "/svg/arbitrum.svg" },
];

const WalletContext = createContext<IWalletContext>({} as IWalletContext);

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState<IWallet>(initialWalletState);
  const [network, setNetwork] = useState<INetwork>(networkOptions[0]);

  const account = useActiveAccount();
  const status = useActiveWalletConnectionStatus();

  const activeChain = useActiveWalletChain();
  const address = account?.address ?? undefined;

  const { data } = useWalletBalance({
    chain: activeChain,
    address,
    client: client,
  });

  const balance = data?.displayValue;

  useEffect(() => {
    if (address && status === "connected") {
      // todo: Update wallet state with real data
      setWallet((prev) => ({
        ...prev,
        address,
        balance: balance ? parseFloat(balance) : 0,
        networth: 1000,
        borrowed: 200,
        staked: 500,
        supplied: 600,
        claimable: 100,
      }));
    } else {
      setWallet(initialWalletState);
    }
  }, [address, status, balance]);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        isConnecting: status === "connecting",
        isConnected: status === "connected",
        network,
        setNetwork,
        networkOptions,
        chain: activeChain,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);

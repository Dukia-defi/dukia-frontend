"use client";

import { client } from "@/app/client";
import { IWallet, INetwork, IWalletContext } from "@/lib/types";
import { createContext, useContext, useState, useEffect } from "react";
import {
  useActiveAccount,
  useWalletBalance,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
} from "thirdweb/react";
import { getChainId, getNetworkFromChainId, CHAIN_IDS } from "@/utils/chain-utils";

const initialWalletState: IWallet = {
  address: "",
  balance: 0,
  networth: 0,
  borrowed: 0,
  staked: 0,
  supplied: 0,
  claimable: 0,
  chain: CHAIN_IDS.ETHEREUM, // Default to Ethereum
};

const networkOptions: INetwork[] = [
  { id: "ethereum", name: "Ethereum", icon: "/svg/ethereum.svg" },
  { id: "sepolia", name: "Sepolia", icon: "/svg/ethereum.svg" },
  { id: "lisk", name: "Lisk", icon: "/svg/lisk.svg" },
  { id: "lisk_sepolia", name: "Lisk Sepolia", icon: "/svg/lisk.svg" },
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

  // Update network when chain changes
  useEffect(() => {
    if (activeChain) {
      try {
        const networkDetails = getNetworkFromChainId(activeChain.id);
        setNetwork(networkDetails);
      } catch (error) {
        console.error("Unsupported chain:", error);
        // Optionally handle unsupported chains (e.g., switch to default network)
      }
    }
  }, [activeChain]);

  const { data } = useWalletBalance({
    chain: activeChain,
    address,
    client: client,
  });

  const balance = data?.displayValue;

  useEffect(() => {
    if (address && status === "connected") {
      setWallet((prev) => ({
        ...prev,
        address,
        balance: balance ? parseFloat(balance) : 0,
        networth: 1000,
        borrowed: 200,
        staked: 500,
        supplied: 600,
        claimable: 100,
        chain: activeChain ? getChainId(network) : CHAIN_IDS.ETHEREUM,
      }));
    } else {
      setWallet(initialWalletState);
    }
  }, [address, status, balance, network, activeChain]);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        isConnecting: status === "connecting",
        isConnected: status === "connected",
        network,
        setNetwork,
        networkOptions,
        chain: activeChain ? getChainId(network) : CHAIN_IDS.ETHEREUM,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
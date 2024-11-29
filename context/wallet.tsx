"use client";

import { client } from "@/app/client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  useActiveAccount,
  useWalletBalance,
  useActiveWalletChain,
  useActiveWalletConnectionStatus,
} from "thirdweb/react";
import {
  getChainId,
  getNetworkFromChainId,
  CHAIN_IDS,
} from "@/utils/chain-utils";
import { INetwork, IWallet, IWalletContext } from "@/lib/types";

const initialWalletState: IWallet = {
  address: "",
  balance: 0,
  networth: 0,
  borrowed: 0,
  staked: 0,
  supplied: 0,
  claimable: 0,
  chain: CHAIN_IDS.SEPOLIA, // Default to Ethereum sepolia
};

const networkOptions: INetwork[] = [
  // { id: "ethereum", name: "Ethereum", icon: "/svg/ethereum.svg" },
  { id: "sepolia", name: "Sepolia", icon: "/svg/ethereum.svg" },
  // { id: "lisk", name: "Lisk", icon: "/svg/lisk.svg" },
  { id: "lisk_sepolia", name: "Lisk Sepolia", icon: "/svg/lisk.svg" },
  // { id: "arbitrum", name: "Arbitrum", icon: "/svg/arbitrum.svg" },
  {
    id: "optimism_sepolia",
    name: "OP Sepolia",
    icon: "/svg/optimism.svg",
  },
];

const WalletContext = createContext<IWalletContext>({} as IWalletContext);

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState<IWallet>(initialWalletState);
  const [network, setNetwork] = useState<INetwork>(networkOptions[0]);
  const [isUnsupportedNetwork, setIsUnsupportedNetwork] = useState(false);

  const account = useActiveAccount();
  const status = useActiveWalletConnectionStatus();
  const activeChain = useActiveWalletChain();
  const address = account?.address ?? undefined;

  // Update network when chain changes
  useEffect(() => {
    if (activeChain) {
      try {
        const networkDetails = getNetworkFromChainId(activeChain.id);

        // Check if network is supported
        if (networkDetails.id === "unsupported") {
          setIsUnsupportedNetwork(true);
          setNetwork(networkOptions[0]);
        } else {
          setIsUnsupportedNetwork(false);
          setNetwork(networkDetails);
        }
      } catch (error) {
        console.error("Network change error:", error);
        setIsUnsupportedNetwork(true);
        setNetwork(networkOptions[0]);
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setWallet((prev: any) => ({
        ...prev,
        address,
        balance: balance ? parseFloat(balance) : 0,
        networth: 1000,
        borrowed: 200,
        staked: 500,
        supplied: 600,
        claimable: 100,
        chain: isUnsupportedNetwork ? CHAIN_IDS.SEPOLIA : getChainId(network),
      }));
    } else {
      setWallet(initialWalletState);
    }
  }, [address, status, balance, network, isUnsupportedNetwork]);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        isConnecting: status === "connecting",
        isConnected: status === "connected",
        network,
        setNetwork,
        networkOptions,
        isUnsupportedNetwork,
        chain: isUnsupportedNetwork
          ? CHAIN_IDS.SEPOLIA
          : activeChain
            ? getChainId(network)
            : CHAIN_IDS.SEPOLIA,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);

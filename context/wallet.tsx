"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const initialWalletState: IWallet = {
  address: "",
  balance: 0,
  networth: 1000,
  borrowed: 200,
  staked: 500,
  supplied: 600,
  claimable: 100,
};

interface WalletContextProps {
  wallet: IWallet;
  setWallet: Dispatch<SetStateAction<IWallet>>;
  network: string;
  setNetwork: Dispatch<SetStateAction<string>>;
  networkOptions: string[];
}

const WalletContext = createContext<WalletContextProps>({
  wallet: initialWalletState,
  setWallet: () => {},
  network: "",
  setNetwork: () => {},
  networkOptions: [],
});

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState<IWallet>(initialWalletState);
  const [network, setNetwork] = useState<string>("ethereum");
  const networkOptions: string[] = ["ethereum", "lisk", "arbitrum"];

  //todo implement changing of data being fetched based on selected network

  return (
    <WalletContext.Provider
      value={{ wallet, setWallet, network, setNetwork, networkOptions }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);

export default WalletProvider;

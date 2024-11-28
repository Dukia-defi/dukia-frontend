"use client";

import { client } from "@/app/client";
import { token_addresses } from "@/lib/addresses";
import { IUserBalances, TChainName } from "@/lib/types";
import { chainIdToName } from "@/lib/utils";
import { sepolia } from "thirdweb/chains";
import { useWalletBalance } from "thirdweb/react";
import { liskSepolia } from "./useContracts";

interface Props {
  selectedChain: number;
  userAddress: string;
}

export const useGetUserBalances = ({ selectedChain, userAddress }: Props) => {
  const chainName = chainIdToName[selectedChain];

  const chain = chainName === "sepolia" ? sepolia : liskSepolia;

  const usdcAddress = token_addresses[chainName as TChainName].usdc;
  const daiAddress = token_addresses[chainName as TChainName].dai;
  const lskAddress = token_addresses[chainName as TChainName].lsk;
  const wethAddress = token_addresses[chainName as TChainName].weth;
  const usdtAddress = token_addresses[chainName as TChainName].usdt;
  const linkAddress = token_addresses[chainName as TChainName].link;

  const {
    data: usdcBalance,
    isLoading: usdcLoading,
    isError: usdcError,
  } = useWalletBalance({
    chain,
    address: userAddress,
    client,
    tokenAddress: usdcAddress,
  });

  const {
    data: daiBalance,
    isLoading: daiLoading,
    isError: daiError,
  } = useWalletBalance({
    chain,
    address: userAddress,
    client,
    tokenAddress: daiAddress,
  });

  const {
    data: lskBalance,
    isLoading: lskLoading,
    isError: lskError,
  } = useWalletBalance({
    chain,
    address: userAddress,
    client,
    tokenAddress: lskAddress,
  });

  const {
    data: wethBalance,
    isLoading: wethLoading,
    isError: wethError,
  } = useWalletBalance({
    chain,
    address: userAddress,
    client,
    tokenAddress: wethAddress,
  });

  const {
    data: usdtBalance,
    isLoading: usdtLoading,
    isError: usdtError,
  } = useWalletBalance({
    chain,
    address: userAddress,
    client,
    tokenAddress: usdtAddress,
  });

  const {
    data: linkBalance,
    isLoading: linkLoading,
    isError: linkError,
  } = useWalletBalance({
    chain,
    address: userAddress,
    client,
    tokenAddress: linkAddress,
  });

  const data: IUserBalances = {
    usdc: usdcBalance,
    dai: daiBalance,
    lsk: lskBalance, //todo maybe move this out to a separate hook so as to handle chains its not present on
    weth: wethBalance,
    usdt: usdtBalance,
    link: linkBalance,
  };

  const isLoading =
    usdcLoading ||
    daiLoading ||
    lskLoading ||
    wethLoading ||
    usdtLoading ||
    linkLoading;

  const isError =
    usdcError || daiError || lskError || wethError || usdtError || linkError;

  return { data, isLoading, isError };
};

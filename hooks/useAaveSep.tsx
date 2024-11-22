"use client";

import { useCallback } from "react";
import { useReadContract, useSendTransaction } from "thirdweb/react";
import { useContracts } from "./useContracts";
import { prepareContractCall } from "thirdweb";
import { deployed_contracts } from "@/lib/addresses";

export function useAaveSep() {
  const { aaveSepContract } = useContracts();

  const {
    sepolia: { aave: sepAave },
  } = deployed_contracts;

  //get user data
  const getUserData = (address: string) =>
    useReadContract({
      contract: aaveSepContract,
      method: "function getUserAccountData(address user)",
      params: [address],
    });

  //supply asset
  const supplyAsset = ({
    tokenAddress,
    amount,
  }: {
    tokenAddress: string;
    amount: bigint;
  }) => {
    const { mutate, data: supplyRes } = useSendTransaction();

    const transaction = prepareContractCall({
      contract: aaveSepContract,
      method:
        "function approveAndSupply(address contractAddress, address tokenAddress, uint256 amount)",
      params: [sepAave, tokenAddress, amount],
    });

    mutate(transaction);

    return { supplyRes };
  };

  return { getUserData, supplyAsset };
}

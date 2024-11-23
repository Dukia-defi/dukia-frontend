"use client";

import { useReadContract, useSendTransaction } from "thirdweb/react";
import { useContracts } from "./useContracts";
import { prepareContractCall } from "thirdweb";
import { deployed_contracts } from "@/lib/addresses";
import { useState } from "react";

export function useAaveSep() {
  const { aaveSepContract } = useContracts();
  const { mutate: sendTransaction, data: txHash } = useSendTransaction();
  const [isLoading, setIsLoading] = useState(false);
  
  // Track transaction status
  // const { status: txStatus, error: txError } = useTransactionStatus(txHash);

  const {
    sepolia: { aave: sepAave },
  } = deployed_contracts;

  // get user data
  const getUserData = (address: string) =>
    useReadContract({
      contract: aaveSepContract,
      method: "function getUserAccountData(address user)",
      params: [address],
    });

  // supply asset
  const supplyAsset = async ({
    tokenAddress,
    amount,
  }: {
    tokenAddress: string;
    amount: bigint;
  }) => {
    try {
      setIsLoading(true);
      const transaction = prepareContractCall({
        contract: aaveSepContract,
        method: "function approveAndSupply(address contractAddress, address tokenAddress, uint256 amount)",
        params: [sepAave, tokenAddress, amount],
      });

      await sendTransaction(transaction);
      return true;
    } catch (error) {
      console.error("Supply transaction failed:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { 
    getUserData, 
    supplyAsset, 
    txHash,
    isLoading
  };
}
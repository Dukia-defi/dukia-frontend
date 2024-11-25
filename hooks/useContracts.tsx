"use client";

import { client } from "@/app/client";
import { deployed_contracts } from "@/lib/addresses";
import { defineChain, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const liskSepolia = defineChain(4202);

const {
  lisk: { ccm: liskCCM },
  sepolia: { aave: sepAave, ccm: sepCCM, batchExecutor },
} = deployed_contracts;

export function useContracts() {
  const liskCCMContract = getContract({
    client,
    address: liskCCM,
    chain: liskSepolia,
  });

  const ethSepCCMContract = getContract({
    client,
    address: sepCCM,
    chain: sepolia,
  });

  // console.log("ave", sepAave)

  const aaveSepContract = getContract({
    client,
    address: sepAave,
    chain: sepolia,
  });

  const batchExecutorSep = getContract({
    client,
    address: batchExecutor,
    chain: sepolia,
  });

  return {
    liskCCMContract,
    ethSepCCMContract,
    aaveSepContract,
    batchExecutorSep,
  };
}

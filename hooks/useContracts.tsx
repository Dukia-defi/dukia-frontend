"use client";

import { client } from "@/app/client";
import { deployed_contracts } from "@/lib/addresses";
import { defineChain, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const liskSepolia = defineChain(4202);

const {
  lisk: { ccm: liskCCM },
  sepolia: { aave: sepAave, ccm: sepCCM , uniswap: sepUniswap },
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

  const aaveSepContract = getContract({
    client,
    address: sepAave,
    chain: sepolia,
  });

  const uniswapSepContract = getContract({
    client,
    address: sepUniswap,
    chain: sepolia,
  });

  return { liskCCMContract, ethSepCCMContract, aaveSepContract, uniswapSepContract };
}

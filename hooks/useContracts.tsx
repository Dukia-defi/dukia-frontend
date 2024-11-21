"use client";

import { client } from "@/app/client";
import { ETH_SEPOLIA_CCM_ADDRESS, LISK_CCM_ADDRESS } from "@/lib/data";
import { defineChain, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const liskSepolia = defineChain(4202);

export function useContracts() {
  const liskCCMContract = getContract({
    client,
    address: LISK_CCM_ADDRESS,
    chain: liskSepolia,
  });

  const ethSepCCMContract = getContract({
    client,
    address: ETH_SEPOLIA_CCM_ADDRESS,
    chain: sepolia,
  });

  return { liskCCMContract, ethSepCCMContract };
}

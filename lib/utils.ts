import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { token_addresses } from "./addresses";
import { TChainIdToNameMap, TTokenName } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleSelectedToken({
  chain,
  token,
}: {
  chain: number;
  token: string;
}): string | undefined {
  const chainIdToName: TChainIdToNameMap = {
    4202: "lisk",
    11155111: "sepolia",
    42161: "arbitrum",
    10: "optimism",
  };

  const selectedChain = chainIdToName[chain];

  if (!selectedChain) {
    console.error(`Unsupported chain ID: ${chain}`);
    return undefined;
  }

  const chainTokens = token_addresses[selectedChain];
  if (!(token in chainTokens)) {
    console.error(`Token '${token}' not found on chain '${selectedChain}'`);
    return undefined;
  }

  return chainTokens[token as TTokenName];
}

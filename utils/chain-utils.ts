import { INetwork } from "@/lib/types";

// Define supported chain IDs
export const CHAIN_IDS = {
  ETHEREUM: 1,
  SEPOLIA: 11155111,
  ARBITRUM: 42161,
  LISK: 1135,
  LISK_SEPOLIA: 4202,
} as const;

// Type for supported chain IDs
export type SupportedChainId = (typeof CHAIN_IDS)[keyof typeof CHAIN_IDS];

// Map network IDs to chain IDs
export const NETWORK_TO_CHAIN_ID: Record<string, SupportedChainId> = {
  ethereum: CHAIN_IDS.ETHEREUM,
  sepolia: CHAIN_IDS.SEPOLIA,
  arbitrum: CHAIN_IDS.ARBITRUM,
  lisk: CHAIN_IDS.LISK,
  lisk_sepolia: CHAIN_IDS.LISK_SEPOLIA,
};

// Validate and get chain ID from network
export function getChainId(
  network: INetwork | string | undefined,
): SupportedChainId {
  if (!network) {
    return CHAIN_IDS.ETHEREUM; // Default to Ethereum mainnet
  }

  const networkId = typeof network === "string" ? network : network.id;
  const chainId = NETWORK_TO_CHAIN_ID[networkId.toLowerCase()];

  if (!chainId) {
    return CHAIN_IDS.ETHEREUM; // Default to Ethereum if unsupported
  }

  return chainId;
}

// Get network details from chain ID
export function getNetworkFromChainId(chainId: number | string): INetwork {
  const entry = Object.entries(NETWORK_TO_CHAIN_ID).find(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, id]) => id === Number(chainId),
  );

  // If no matching network is found, return an "Unsupported" network
  if (!entry) {
    return {
      id: "unsupported",
      name: "Unsupported Network",
      icon: "/svg/warning.svg",
    };
  }

  const networkId = entry || [];

  // Map to network options format
  return {
    id: networkId[0] || "",
    name: networkId[0]
      ? networkId[0].charAt(0).toUpperCase() +
        networkId[0].slice(1).replace("_", " ")
      : "",
    icon: networkId[0] ? `/svg/${networkId[0].split("_")[0]}.svg` : "",
  };
}

// Validate if a chain ID is supported
export function isSupportedChainId(
  chainId: number | string | unknown,
): boolean {
  if (typeof chainId === "string" || typeof chainId === "number") {
    const chainIdNumber = Number(chainId);
    return Object.values(CHAIN_IDS).includes(chainIdNumber as SupportedChainId);
  }
  return false;
}

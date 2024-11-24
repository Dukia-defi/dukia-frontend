import { client } from "@/app/client";
import { defineChain, getContract } from "thirdweb";
import { useMemo } from "react";

interface ContractResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contract: any;
  error: Error | null;
}

export const useContract = (contractAddress: string): ContractResult => {
  const result = useMemo(() => {
    try {
      if (!contractAddress) {
        throw new Error("Contract address is required");
      }

      const contract = getContract({
        client: client,
        chain: defineChain(11155111), // sepolia
        address: contractAddress,
      });

      return {
        contract,
        error: null,
      };
    } catch (err) {
      console.error("Error initializing contract:", err);
      return {
        contract: null,
        error: err instanceof Error ? err : new Error("Unknown error occurred"),
      };
    }
  }, [contractAddress]);

  return result;
};

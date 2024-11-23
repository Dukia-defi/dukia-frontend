import { client } from "@/app/client";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { useCallback } from "react";
import { deployed_contracts } from "@/lib/addresses";

const { sepolia } = deployed_contracts;

const CONTRACT_ADDRESS = sepolia.aave;

export const contract = getContract({
  client: client,
  chain: defineChain(11155111),
  address: CONTRACT_ADDRESS,
});

interface TransactionResult {
  error: Error | null;
  execute: (tokenAddress: string, amount: bigint) => void;
}

// Main hook that handles all Aave interactions
export const useAaveInteractions = (): {
  approveContract: TransactionResult;
  supply: TransactionResult;
  borrow: TransactionResult;
  withdraw: TransactionResult;
} => {
  const { mutate: sendTransaction, error } = useSendTransaction();

  // Approve Contract
  const executeApprove = useCallback(
    (tokenAddress: string, amount: bigint) => {
      try {
        const approveContract = prepareContractCall({
          contract,
          method:
            "function approveContract(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        sendTransaction(approveContract);
      } catch (err) {
        console.error("Error in approve:", err);
        throw err;
      }
    },
    [sendTransaction],
  );

  // Supply
  const executeSupply = useCallback(
    (tokenAddress: string, amount: bigint) => {
      try {
        const supplyContract = prepareContractCall({
          contract,
          method: "function supply(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        sendTransaction(supplyContract);
      } catch (err) {
        console.error("Error in supply:", err);
        throw err;
      }
    },
    [sendTransaction],
  );

  // Borrow
  const executeBorrow = useCallback(
    (tokenAddress: string, amount: bigint) => {
      try {
        const borrowContract = prepareContractCall({
          contract,
          method:
            "function borrow(address tokenAddress, uint256 amount, uint256 interestRateMode)",
          params: [tokenAddress, amount, BigInt(2)],
        });
        sendTransaction(borrowContract);
      } catch (err) {
        console.error("Error in borrow:", err);
        throw err;
      }
    },
    [sendTransaction],
  );

  // Withdraw
  const executeWithdraw = useCallback(
    (tokenAddress: string, amount: bigint) => {
      try {
        const withdrawContract = prepareContractCall({
          contract,
          method: "function withdraw(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        sendTransaction(withdrawContract);
      } catch (err) {
        console.error("Error in withdraw:", err);
        throw err;
      }
    },
    [sendTransaction],
  );

  return {
    approveContract: {
      error,
      execute: executeApprove,
    },
    supply: {
      error,
      execute: executeSupply,
    },
    borrow: {
      error,
      execute: executeBorrow,
    },
    withdraw: {
      error,
      execute: executeWithdraw,
    },
  };
};

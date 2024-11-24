import { client } from "@/app/client";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { useCallback, useState } from "react";
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
  isLoading: boolean;
  isPending: boolean;
}

// Main hook that handles all Aave interactions
export const useAaveInteractions = (): {
  approveContract: TransactionResult;
  supply: TransactionResult;
  borrow: TransactionResult;
  withdraw: TransactionResult;
  repay: TransactionResult;
} => {
  const { mutate: sendTransaction, error, isPending } = useSendTransaction();
  const [loadingStates, setLoadingStates] = useState({
    approve: false,
    supply: false,
    borrow: false,
    withdraw: false,
    repay: false
  });

  // Approve Contract
  const executeApprove = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, approve: true }));
        const approveContract = prepareContractCall({
          contract,
          method:
            "function approveContract(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        await sendTransaction(approveContract);
      } catch (err) {
        console.error("Error in approve:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, approve: false }));
      }
    },
    [sendTransaction],
  );

  // Supply
  const executeSupply = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, supply: true }));
        console.log("called", tokenAddress, amount);
        const supplyContract = prepareContractCall({
          contract,
          method: "function supplyToken(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        await sendTransaction(supplyContract);
        console.log("success", supplyContract);
      } catch (err) {
        console.error("Error in supply:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, supply: false }));
      }
    },
    [sendTransaction],
  );

  // Borrow
  const executeBorrow = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, borrow: true }));
        const borrowContract = prepareContractCall({
          contract,
          method:
            "function borrow(address tokenAddress, uint256 amount, uint256 interestRateMode)",
          params: [tokenAddress, amount, BigInt(2)],
        });
        await sendTransaction(borrowContract);
      } catch (err) {
        console.error("Error in borrow:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, borrow: false }));
      }
    },
    [sendTransaction],
  );

  // Withdraw
  const executeWithdraw = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, withdraw: true }));
        const withdrawContract = prepareContractCall({
          contract,
          method: "function withdraw(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        await sendTransaction(withdrawContract);
      } catch (err) {
        console.error("Error in withdraw:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, withdraw: false }));
      }
    },
    [sendTransaction],
  );

  // Repay
  const executeRepay = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, repay: true }));
        const repayContract = prepareContractCall({
          contract,
          method:
            "function repay(address tokenAddress, uint256 amount, uint256 interestRateMode)",
          params: [tokenAddress, amount, BigInt(2)],
        });
        await sendTransaction(repayContract);
      } catch (err) {
        console.error("Error in repay:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, repay: false }));
      }
    },
    [sendTransaction],
  );

  return {
    approveContract: {
      error,
      execute: executeApprove,
      isLoading: loadingStates.approve,
      isPending
    },
    supply: {
      error,
      execute: executeSupply,
      isLoading: loadingStates.supply,
      isPending
    },
    borrow: {
      error,
      execute: executeBorrow,
      isLoading: loadingStates.borrow,
      isPending
    },
    withdraw: {
      error,
      execute: executeWithdraw,
      isLoading: loadingStates.withdraw,
      isPending
    },
    repay: {
      error,
      execute: executeRepay,
      isLoading: loadingStates.repay,
      isPending
    },
  };
};

import { client } from "@/app/client";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { useSendTransaction, useReadContract } from "thirdweb/react";
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

export const useAaveInteractions = () => {
  // Create separate transaction handlers for each operation
  const { mutate: sendApproveTransaction, error: approveError, isPending: isApprovePending, isSuccess: isApproveSuccess } = useSendTransaction();
  const { mutate: sendSupplyTransaction, error: supplyError, isPending: isSupplyPending } = useSendTransaction();
  const { mutate: sendBorrowTransaction, error: borrowError, isPending: isBorrowPending } = useSendTransaction();
  const { mutate: sendWithdrawTransaction, error: withdrawError, isPending: isWithdrawPending } = useSendTransaction();
  const { mutate: sendRepayTransaction, error: repayError, isPending: isRepayPending } = useSendTransaction();

  const [loadingStates, setLoadingStates] = useState({
    approve: false,
    supply: false,
    borrow: false,
    withdraw: false,
    repay: false
  });

  const executeApprove = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, approve: true }));
        const approve = prepareContractCall({
          contract,
          method: "function approve(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        await sendApproveTransaction(approve);
        console.log("testing", approve)
      } catch (err) {
        console.error("Error in approve:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, approve: false }));
      }
    },
    [sendApproveTransaction],
  );

  const executeSupply = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, supply: true }));
        const supplyContract = prepareContractCall({
          contract,
          method: "function supply(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        await sendSupplyTransaction(supplyContract);
      } catch (err) {
        console.error("Error in supply:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, supply: false }));
      }
    },
    [sendSupplyTransaction],
  );

  const executeBorrow = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, borrow: true }));
        const borrowContract = prepareContractCall({
          contract,
          method: "function borrow(address tokenAddress, uint256 amount, uint256 interestRateMode)",
          params: [tokenAddress, amount, BigInt(2)],
        });
        await sendBorrowTransaction(borrowContract);
      } catch (err) {
        console.error("Error in borrow:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, borrow: false }));
      }
    },
    [sendBorrowTransaction],
  );

  const executeWithdraw = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, withdraw: true }));
        const withdrawContract = prepareContractCall({
          contract,
          method: "function withdraw(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        await sendWithdrawTransaction(withdrawContract);
      } catch (err) {
        console.error("Error in withdraw:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, withdraw: false }));
      }
    },
    [sendWithdrawTransaction],
  );

  const executeRepay = useCallback(
    async (tokenAddress: string, amount: bigint) => {
      try {
        setLoadingStates(prev => ({ ...prev, repay: true }));
        const repayContract = prepareContractCall({
          contract,
          method: "function repay(address tokenAddress, uint256 amount, uint256 interestRateMode)",
          params: [tokenAddress, amount, BigInt(2)],
        });
        await sendRepayTransaction(repayContract);
      } catch (err) {
        console.error("Error in repay:", err);
        throw err;
      } finally {
        setLoadingStates(prev => ({ ...prev, repay: false }));
      }
    },
    [sendRepayTransaction],
  );
  const getUserData = useCallback(
    async (userAddress: string) => {
      try {
        const { data, isLoading, isError, error } = useReadContract({
          contract,
          method: "function getUserAccountData(address user)", 
          params: [userAddress],
        });
        return { data, isLoading, isError, error };
      } catch (err) {
        console.error("Error in get user data:", err);
        throw err;
      }
    },
    []
  );

  return {
    approve: {
      error: approveError,
      execute: executeApprove,
      isLoading: loadingStates.approve,
      isPending: isApprovePending,
      isSuccess: isApproveSuccess
    },
    supply: {
      error: supplyError,
      execute: executeSupply,
      isLoading: loadingStates.supply,
      isPending: isSupplyPending
    },
    borrow: {
      error: borrowError,
      execute: executeBorrow,
      isLoading: loadingStates.borrow,
      isPending: isBorrowPending
    },
    withdraw: {
      error: withdrawError,
      execute: executeWithdraw,
      isLoading: loadingStates.withdraw,
      isPending: isWithdrawPending
    },
    repay: {
      error: repayError,
      execute: executeRepay,
      isLoading: loadingStates.repay,
      isPending: isRepayPending
    },
    getUserData
  };
};
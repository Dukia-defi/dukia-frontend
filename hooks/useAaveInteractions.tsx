import { client } from "@/app/client";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { useReadContract, useSendTransaction } from "thirdweb/react";
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
  isPending: boolean;
  isSuccess?: boolean;
}

interface UserAccountData {
  totalCollateralBase: bigint;
  totalDebtBase: bigint;
  availableBorrowsBase: bigint;
  currentLiquidationThreshold: bigint;
  ltv: bigint;
  healthFactor: bigint;
}

// Main hook that handles all Aave interactions
export const useAaveInteractions = (
  userAddress: string,
): {
  approve: TransactionResult;
  supply: TransactionResult;
  borrow: TransactionResult;
  withdraw: TransactionResult;
  repay: TransactionResult;
  userData: {
    data: UserAccountData | undefined;
    isLoading: boolean;
    error: Error | null;
  };
} => {
  const {
    mutate: sendApproveTransaction,
    error: approveError,
    isPending: isApprovePending,
    isSuccess: isApproveSuccess,
  } = useSendTransaction();
  const {
    mutate: sendSupplyTransaction,
    error: supplyError,
    isPending: isSupplyPending,
  } = useSendTransaction();
  const {
    mutate: sendBorrowTransaction,
    error: borrowError,
    isPending: isBorrowPending,
  } = useSendTransaction();
  const {
    mutate: sendWithdrawTransaction,
    error: withdrawError,
    isPending: isWithdrawPending,
  } = useSendTransaction();
  const {
    mutate: sendRepayTransaction,
    error: repayError,
    isPending: isRepayPending,
  } = useSendTransaction();

  // User Account Data Query
  const {
    data: accountData,
    isLoading: isAccountDataLoading,
    error: accountDataError,
  } = useReadContract({
    contract,
    method:
      "function getUserAccountData(address user) view returns (uint256 totalCollateralBase, uint256 totalDebtBase, uint256 availableBorrowsBase, uint256 currentLiquidationThreshold, uint256 ltv, uint256 healthFactor)",
    params: [userAddress],
  });

  // Approve Contract
  const executeApprove = useCallback(
    (tokenAddress: string, amount: bigint) => {
      try {
        const approve = prepareContractCall({
          contract,
          method:
            "function approveContract(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        sendApproveTransaction(approve);
      } catch (err) {
        console.error("Error in approve:", err);
        throw err;
      }
    },
    [sendApproveTransaction],
  );

  // Supply Token
  const executeSupply = useCallback(
    (tokenAddress: string, amount: bigint) => {
      try {
        const supplyContract = prepareContractCall({
          contract,
          method: "function supply(address tokenAddress, uint256 amount)",
          params: [tokenAddress, amount],
        });
        sendSupplyTransaction(supplyContract);
      } catch (err) {
        console.error("Error in supply:", err);
        throw err;
      }
    },
    [sendSupplyTransaction],
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
        sendBorrowTransaction(borrowContract);
      } catch (err) {
        console.error("Error in borrow:", err);
        throw err;
      }
    },
    [sendBorrowTransaction],
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
        sendWithdrawTransaction(withdrawContract);
      } catch (err) {
        console.error("Error in withdraw:", err);
        throw err;
      }
    },
    [sendWithdrawTransaction],
  );

  // Repay
  const executeRepay = useCallback(
    (tokenAddress: string, amount: bigint) => {
      try {
        const repayContract = prepareContractCall({
          contract,
          method:
            "function repay(address tokenAddress, uint256 amount, uint256 interestRateMode)",
          params: [tokenAddress, amount, BigInt(2)],
        });
        sendRepayTransaction(repayContract);
      } catch (err) {
        console.error("Error in repay:", err);
        throw err;
      }
    },
    [sendRepayTransaction],
  );

  return {
    approve: {
      error: approveError,
      execute: executeApprove,
      isPending: isApprovePending,
      isSuccess: isApproveSuccess,
    },
    supply: {
      error: supplyError,
      execute: executeSupply,
      isPending: isSupplyPending,
    },
    borrow: {
      error: borrowError,
      execute: executeBorrow,
      isPending: isBorrowPending,
    },
    withdraw: {
      error: withdrawError,
      execute: executeWithdraw,
      isPending: isWithdrawPending,
    },
    repay: {
      error: repayError,
      execute: executeRepay,
      isPending: isRepayPending,
    },
    userData: {
      data: accountData as UserAccountData | undefined,
      isLoading: isAccountDataLoading,
      error: accountDataError,
    },
  };
};

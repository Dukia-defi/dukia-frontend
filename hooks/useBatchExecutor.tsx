/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useSendTransaction } from "thirdweb/react";
import { useContracts } from "./useContracts";
import { prepareContractCall } from "thirdweb";

export default function useBatchExecutor() {
  const { batchExecutorSep } = useContracts();

  //executeBatch
  const executeBatch = ({
    targets,
    data,
  }: {
    targets: string[];
    data: TBytes[];
  }) => {
    const { mutate, data: executionData } = useSendTransaction();

    const transaction = prepareContractCall({
      contract: batchExecutorSep,
      method:
        "function executeBatch(address[] calldata targets,bytes[] calldata data)",
      params: [targets, data],
    });

    mutate(transaction);

    return { executionData };
  };

  //executeETHFlashLoan
  const executeETHFlashLoanBatch = ({
    targets,
    data,
    loanProvider,
    amount,
    feePercentage,
  }: {
    targets: string[];
    data: TBytes[];
    loanProvider: string;
    amount: bigint;
    feePercentage: bigint;
  }) => {
    const { mutate, data: executionData } = useSendTransaction();

    const transaction = prepareContractCall({
      contract: batchExecutorSep,
      method:
        "function executeETHFlashLoan(address flashLoanProvider,uint256 amount,uint256 feePercentage,address[] calldata targets,bytes[] calldata data)",
      params: [loanProvider, amount, feePercentage, targets, data],
    });

    mutate(transaction);

    return { executionData };
  };

  //executeERC20FlashLoan
  const executeERC20FlashLoanBatch = ({
    targets,
    data,
    loanProvider,
    amount,
    feePercentage,
    token,
  }: {
    targets: string[];
    data: TBytes[];
    loanProvider: string;
    amount: bigint;
    feePercentage: bigint;
    token: string;
  }) => {
    const { mutate, data: executionData } = useSendTransaction();

    const transaction = prepareContractCall({
      contract: batchExecutorSep,
      method:
        "function executeERC20FlashLoan(address flashLoanProvider,address token,uint256 amount,uint256 feePercentage,address[] calldata targets,bytes[] calldata data)",
      params: [loanProvider, token, amount, feePercentage, targets, data],
    });

    mutate(transaction);

    return { executionData };
  };

  return { executeBatch, executeERC20FlashLoanBatch, executeETHFlashLoanBatch };
}

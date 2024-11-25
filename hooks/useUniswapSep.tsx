"use client";

import { useCallback } from "react";
import { useReadContract, useSendTransaction } from "thirdweb/react";
import { useContracts } from "./useContracts";
import { prepareContractCall } from "thirdweb";
import { deployed_contracts } from "@/lib/addresses";

export function useUniswapSep() {
    const { uniswapSepContract } = useContracts();

    const {
      sepolia: { uniswap: sepUniswap },
    } = deployed_contracts;

  // Swap tokens
  const swapTokens = ({
    amountIn,
    amountOutMin,
    path,
    to,
    deadline,
  }: {
    amountIn: bigint;
    amountOutMin: bigint;
    path: string[];
    to: string;
    deadline: bigint;
  }) => {
    const { mutate, data: swapRes } = useSendTransaction();

    const transaction = prepareContractCall({
      contract: uniswapSepContract,
      method: "function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] calldata path, address to, uint256 deadline)",
      params: [amountIn, amountOutMin, path, to, deadline],
    });

    mutate(transaction);

    return { swapRes };
  };

  // Add liquidity
  const addLiquidity = ({
    tokenA,
    tokenB,
    amountADesired,
    amountBDesired,
    slippagePercent,
  }: {
    tokenA: string;
    tokenB: string;
    amountADesired: bigint;
    amountBDesired: bigint;
    slippagePercent: bigint;
  }) => {
    const { mutate, data: addLiquidityRes } = useSendTransaction();

    const transaction = prepareContractCall({
      contract: uniswapSepContract,
      method: "function addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 slippagePercent)",
      params: [tokenA, tokenB, amountADesired, amountBDesired, slippagePercent],
    });

    mutate(transaction);

    return { addLiquidityRes };
  };

  // Add liquidity ETH
  const addLiquidityEth = ({
    token,
    amountTokenDesired,
    amountTokenMin,
    amountETHMin,
    slippagePercent,
  }: {
    token: string;
    amountTokenDesired: bigint;
    amountTokenMin: bigint;
    amountETHMin: bigint;
    slippagePercent: bigint;
  }) => {
    const { mutate, data: addLiquidityEthRes } = useSendTransaction();

    const transaction = prepareContractCall({
      contract: uniswapSepContract,
      method: "function addLiquidityEth(address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, uint256 slippagePercent)",
      params: [token, amountTokenDesired, amountTokenMin, amountETHMin, slippagePercent],
    });

    mutate(transaction);

    return { addLiquidityEthRes };
  };

  // Remove liquidity
  const removeLiquidity = ({
    tokenA,
    tokenB,
    liquidity,
    amountAMin,
    amountBMin,
  }: {
    tokenA: string;
    tokenB: string;
    liquidity: bigint;
    amountAMin: bigint;
    amountBMin: bigint;
  }) => {
    const { mutate, data: removeLiquidityRes } = useSendTransaction();

    const transaction = prepareContractCall({
      contract: uniswapSepContract,
      method: "function removeLiquidity(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin)",
      params: [tokenA, tokenB, liquidity, amountAMin, amountBMin],
    });

    mutate(transaction);

    return { removeLiquidityRes };
  };

  return {
    swapTokens,
    addLiquidity,
    addLiquidityEth,
    removeLiquidity,
  };
  }

import { client } from "@/app/client";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { useCallback } from "react";
import { deployed_contracts } from "@/lib/addresses";

const { sepolia } = deployed_contracts;
const CONTRACT_ADDRESS = sepolia.uniswap;

export const contract = getContract({
  client: client,
  chain: defineChain(11155111),
  address: CONTRACT_ADDRESS,
});

interface TransactionResult {
  error: Error | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute: (...args: any[]) => void;
}

export const useUniswapInteractions = (): {
  swapTokens: TransactionResult;
  addLiquidity: TransactionResult;
  removeLiquidity: TransactionResult;
} => {
  const { mutate: sendTransaction, error } = useSendTransaction();

  // Swap Tokens
  const executeSwap = useCallback(
    (
      amountIn: bigint,
      amountOutMin: bigint,
      path: string[],
      to: string,
      deadline: bigint,
    ) => {
      try {
        const swapCall = prepareContractCall({
          contract,
          method:
            "function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] calldata path, address to, uint256 deadline)",
          params: [amountIn, amountOutMin, path, to, deadline],
        });
        sendTransaction(swapCall);
      } catch (err) {
        console.error("Error in swap:", err);
        throw err;
      }
    },
    [sendTransaction],
  );

  // Add Liquidity
  const executeAddLiquidity = useCallback(
    (
      tokenA: string,
      tokenB: string,
      amountADesired: bigint,
      amountBDesired: bigint,
      slippagePercent: bigint,
    ) => {
      try {
        const addLiquidityCall = prepareContractCall({
          contract,
          method:
            "function addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 slippagePercent)",
          params: [
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            slippagePercent,
          ],
        });
        sendTransaction(addLiquidityCall);
      } catch (err) {
        console.error("Error in addLiquidity:", err);
        throw err;
      }
    },
    [sendTransaction],
  );

  // Remove Liquidity
  const executeRemoveLiquidity = useCallback(
    (
      tokenA: string,
      tokenB: string,
      liquidity: bigint,
      amountAMin: bigint,
      amountBMin: bigint,
      slippagePercent: bigint,
    ) => {
      try {
        const removeLiquidityCall = prepareContractCall({
          contract,
          method:
            "function removeLiquidity(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 slippagePercent)",
          params: [
            tokenA,
            tokenB,
            liquidity,
            amountAMin,
            amountBMin,
            slippagePercent,
          ],
        });
        sendTransaction(removeLiquidityCall);
      } catch (err) {
        console.error("Error in removeLiquidity:", err);
        throw err;
      }
    },
    [sendTransaction],
  );

  return {
    swapTokens: {
      error,
      execute: executeSwap,
    },
    addLiquidity: {
      error,
      execute: executeAddLiquidity,
    },

    removeLiquidity: {
      error,
      execute: executeRemoveLiquidity,
    },
  };
};

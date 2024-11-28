"use client";

import { uniswapTabs, tokens } from "@/utils/mock";
import { Button } from "@/components/ui/button";
import {
  DefiInteractionInterface,
  InteractionInferaceInput,
} from "../defi-interaction-interface";
import { useEffect, useState } from "react";
import { useUniswapInteractions } from "@/hooks/useUniswapInteractions";
import { token_addresses } from "@/lib/addresses";
import { useWallet } from "@/context/wallet";

interface Props {
  getTokenBalance: (token: string) => number;
}

export function UniswapInteractionInterface({ getTokenBalance }: Props) {
  const { wallet } = useWallet();
  const [selectedAToken, setSelectedAToken] = useState<string>("USDC");
  const [selectedBToken, setSelectedBToken] = useState<string>("DAI");
  const [activeTab, setActiveTab] = useState<string>("swap");
  const [amountA, setAmountA] = useState<string>("");
  const [amountB, setAmountB] = useState<string>("");

  const { swapTokens, addLiquidity, removeLiquidity } =
    useUniswapInteractions();
  const { sepolia } = token_addresses;

  //todo optimize this to work with different chains
  const getTokenAddress = (tokenSymbol: string): string => {
    switch (tokenSymbol) {
      case "DAI":
        return sepolia.dai;
      case "USDC":
        return sepolia.usdc;
      case "USDT":
        return sepolia.usdt;
      default:
        throw new Error("Unsupported token");
    }
  };

  const convertToWei = (amount: string): bigint => {
    return BigInt(parseFloat(amount) * Math.pow(10, 18));
  };

  useEffect(() => {
    setAmountB(amountA);
  }, [amountA]);

  const handleClick = async () => {
    //! removed input for amountB, it should be gotten automatically based on uniswap conversion of amountA
    if (!amountA || !amountB) return;

    const amountAInWei = convertToWei(amountA);
    const amountBInWei = convertToWei(amountB);
    const tokenA = getTokenAddress(selectedAToken);
    const tokenB = getTokenAddress(selectedBToken);

    try {
      switch (activeTab.toLowerCase()) {
        case "swap":
          swapTokens.execute(
            amountAInWei, // amountIn
            BigInt(Math.floor(Number(amountBInWei) * 0.95)), // amountOutMin (5% slippage)
            [tokenA, tokenB], // token path
            wallet.address, // recipient
            BigInt(Math.floor(Date.now() / 1000) + 1200), // 20 minute deadline
          );
          break;

        case "add liquidity":
          addLiquidity.execute(
            tokenA,
            tokenB,
            amountAInWei,
            amountBInWei,
            BigInt("1000"),
          );
          break;

        case "remove liquidity":
          // For remove liquidity, amountA represents the LP token amount
          removeLiquidity.execute(
            tokenA,
            tokenB,
            amountAInWei, // liquidity amount
            BigInt(Math.floor(Number(amountAInWei) * 0.95)), // minimum amount A (5% slippage)
            BigInt(Math.floor(Number(amountBInWei) * 0.95)), // minimum amount B (5% slippage)
            2,
          );
          break;

        default:
          console.error("Unknown tab:", activeTab);
      }
    } catch (error) {
      console.error(`${activeTab} operation failed:`, error);
    }
  };

  const tokensA = tokens.filter((token) => token !== selectedBToken);
  const tokensB = tokens.filter((token) => token !== selectedAToken);

  // const getButtonLabel = (): string => {
  //   if (!amountA || !amountB) return "Enter Amount";
  //   if (parseFloat(amountA) <= 0 || parseFloat(amountB) <= 0)
  //     return "Invalid Amount";
  //   return activeTab.toUpperCase();
  // };

  const isActionDisabled = (): boolean => {
    return !amountA || parseFloat(amountA) <= 0 || +amountA > tokenABalance;
  };
  // const isActionDisabled = (): boolean => {
  //   return (
  //     !amountA ||
  //     !amountB ||
  //     parseFloat(amountA) <= 0 ||
  //     parseFloat(amountB) <= 0
  //   );
  // };

  const tokenABalance = getTokenBalance(selectedAToken);

  return (
    <DefiInteractionInterface
      tabs={uniswapTabs}
      activeTab={activeTab}
      tabChangeFn={setActiveTab}
    >
      <div className="space-y-6">
        <div className="relative">
          {/* <InteractionInferaceInput
            tokens={tokens}
            selectedToken={selectedAToken}
            tokenChangeHandler={setSelectedAToken}
            amount={amountA}
            onAmountChange={setAmountA}
          /> */}

          {/* <InteractionInferaceInput
            tokens={tokens}
            selectedToken={selectedBToken}
            tokenChangeHandler={setSelectedBToken}
            amount={amountB}
            onAmountChange={setAmountB}
          /> */}

          <InteractionInferaceInput
            tokens={tokensA}
            tokensB={tokensB}
            selectedToken={selectedAToken}
            tokenChangeHandler={setSelectedAToken}
            amount={amountA}
            selectedTokenB={selectedBToken}
            tokenBChangeHandler={setSelectedBToken}
            onAmountChange={setAmountA}
            tokenABalance={tokenABalance}
          />

          {activeTab === "swap" && (
            <div className="my-3 rounded-md border border-purple-300 p-2">
              <p>Expected amount: {amountB}</p>
            </div>
          )}
        </div>

        <Button
          className="w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
          onClick={handleClick}
          disabled={isActionDisabled()}
        >
          {/* {getButtonLabel()} */}
          {activeTab.toUpperCase()}
        </Button>
      </div>
    </DefiInteractionInterface>
  );
}

"use client";

import { aaveTabs, INTEREST_RATE_MODES, tokens } from "@/utils/mock";
import { Button } from "@/components/ui/button";
import {
  DefiInteractionInterface,
  InteractionInferaceInput,
} from "../defi-interaction-interface";
import { useState } from "react";
import { useAaveInteractions } from "@/hooks/useAaveInteractions";
import { deployed_contracts, token_addresses } from "@/lib/addresses";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  ToastProvider,
} from "@/components/ui/toast";
import { useWallet } from "@/context/wallet";
import { useERC20 } from "@/hooks/useERC20";
import { getTokenDecimalPlaces } from "@/lib/utils";

interface Props {
  getTokenBalance: (token: string) => number;
}

export default function AaveInteractionInterface({ getTokenBalance }: Props) {
  const [selectedToken, setSelectedToken] = useState<string>("USDC");
  const [activeTab, setActiveTab] = useState<string>("supply");
  const [amount, setAmount] = useState<string>("");
  const [approveAmount, setApproveAmount] = useState<string>("");
  const { toast } = useToast();

  const {
    wallet: { address },
  } = useWallet();

  const {
    approve,
    supply,
    borrow,
    withdraw,
    repay,
    userData: { refetch },
  } = useAaveInteractions(address);

  const { approveFn } = useERC20();

  const { sepolia: sepolia2 } = token_addresses;

  const handleSupply = () => {
    const tokenAddress =
      sepolia2[selectedToken.toLowerCase() as keyof typeof sepolia2];

    const amountInWei = BigInt(
      parseFloat(amount) * Math.pow(10, getTokenDecimalPlaces(selectedToken)),
    );

    supply.execute(tokenAddress, amountInWei);
    setTimeout(() => {
      refetch();
    }, 10000);
  };

  const handleApprove = async () => {
    approveFn({
      tokenSymbol: selectedToken,
      spenderAddress: deployed_contracts.sepolia.aave,
      approveAmount,
    });
  };

  const handleBorrow = () => {
    if (!amount) {
      toast({
        variant: "destructive",
        title: "Warning",
        description: "No amount provided",
      });
    }

    const tokenAddress =
      sepolia2[selectedToken.toLowerCase() as keyof typeof sepolia2] ?? "";

    const amountInWei = BigInt(
      parseFloat(amount) * Math.pow(10, getTokenDecimalPlaces(selectedToken)),
    );
    const interestRateMode =
      INTEREST_RATE_MODES[selectedToken.toLowerCase()] || 2;

    try {
      borrow.execute(tokenAddress, amountInWei, BigInt(interestRateMode));
      console.log("Approve done");
    } catch (error) {
      console.error("Approve failed:", error);
    }
  };

  const handleWithdraw = () => {
    if (!amount) {
      toast({
        variant: "destructive",
        title: "Warning",
        description: "No amount provided",
      });
    }

    const tokenAddress =
      sepolia2[selectedToken.toLowerCase() as keyof typeof sepolia2] ?? "";

    const amountInWei = BigInt(
      parseFloat(amount) * Math.pow(10, getTokenDecimalPlaces(selectedToken)),
    );

    try {
      withdraw.execute(tokenAddress, amountInWei);
      console.log("Approve done");
    } catch (error) {
      console.error("Approve failed:", error);
    }
  };

  const handleRepay = () => {
    if (!amount) {
      toast({
        variant: "destructive",
        title: "Warning",
        description: "No amount provided",
      });
    }

    const amountInWei = BigInt(
      parseFloat(amount) * Math.pow(10, getTokenDecimalPlaces(selectedToken)),
    );
    const tokenAddress =
      sepolia2[selectedToken.toLowerCase() as keyof typeof sepolia2] ?? "";

    const interestRateMode =
      INTEREST_RATE_MODES[selectedToken.toLowerCase()] || 2;

    try {
      repay.execute(tokenAddress, amountInWei, BigInt(interestRateMode));
      console.log("Repay done");
    } catch (error) {
      console.error("Repay failed:", error);
    }
  };

  const handleActions = () => {
    if (activeTab == "supply") {
      handleSupply();
    } else if (activeTab === "borrow") {
      handleBorrow();
    } else if (activeTab === "withdraw") {
      handleWithdraw();
    } else if (activeTab === "repay") {
      handleRepay();
    }
  };

  const tokenABalance = getTokenBalance(selectedToken);

  return (
    <DefiInteractionInterface
      tabs={aaveTabs}
      activeTab={activeTab}
      tabChangeFn={setActiveTab}
    >
      <div className="space-y-6">
        {activeTab === "supply" && (
          <div>
            <div className="relative">
              <InteractionInferaceInput
                tokens={tokens}
                selectedToken={selectedToken}
                tokenChangeHandler={setSelectedToken}
                amount={approveAmount}
                onAmountChange={setApproveAmount}
                tokenABalance={tokenABalance}
              />
            </div>

            <Button
              className="my-6 w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
              onClick={handleApprove}
              disabled={
                !approveAmount ||
                parseFloat(approveAmount) <= 0 ||
                +approveAmount > tokenABalance
              }
            >
              {approve.isPending ? (
                <div className="flex items-center gap-2">
                  <span>Processing...</span>
                </div>
              ) : (
                <ToastProvider>
                  <span>Approve</span>
                  <Toast>
                    <ToastTitle>Success</ToastTitle>
                    <ToastDescription>
                      Process completed successfully!
                    </ToastDescription>
                  </Toast>
                </ToastProvider>
              )}
            </Button>
          </div>
        )}

        {/* supply input */}
        <div className="relative">
          <InteractionInferaceInput
            tokens={tokens}
            selectedToken={selectedToken}
            tokenChangeHandler={setSelectedToken}
            amount={amount}
            onAmountChange={setAmount}
            tokenABalance={tokenABalance}
          />

          <div className="absolute -bottom-6 right-0 max-w-fit text-sm text-gray-400">
            max {activeTab === "supply" ? "0.5 ETH" : "0 ETH"}
          </div>
        </div>

        <Button
          className="w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
          onClick={handleActions}
          disabled={
            !amount || parseFloat(amount) <= 0 || +amount > tokenABalance
          }
        >
          {supply.isPending ||
          borrow.isPending ||
          withdraw.isPending ||
          repay.isPending ? (
            <div className="flex items-center gap-2">
              <span>Processing...</span>
            </div>
          ) : (
            activeTab.toUpperCase()
          )}
        </Button>

        {/* Additional Info */}
        <div className="rounded-lg bg-gray-800/30 p-4">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-gray-400">Available to {activeTab}</span>
            <span className="text-gray-200">0 {selectedToken}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Current {activeTab} APY</span>
            <span className="text-purple-400">3.2%</span>
          </div>
        </div>
      </div>
    </DefiInteractionInterface>
  );
}

"use client";

import { tokens } from "@/utils/mock";
import { InteractionInferaceInput } from "../defi-interaction-interface";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  action: string;
  actionHandler: Dispatch<SetStateAction<IOrder[]>>;
  defi: string;
}

export function ActionInterface({ action, actionHandler, defi }: Props) {
  const [selectedAToken, setSelectedAToken] = useState<string>("ETH");
  const [selectedBToken, setSelectedBToken] = useState<string>("USDC");
  const [amount, setAmount] = useState<string>("");

  const actionClick = () => {
    const newOrder: IOrder = {
      action,
      defi,
      amount,
      tokenA: selectedAToken,
      tokenB: selectedBToken,
      tokenPair: defi === "Uniswap",
    };

    actionHandler((prev) => [...prev, newOrder]);
  };

  return (
    <div className="mx-auto my-5 w-full p-4">
      <div className="space-y-4 rounded-xl border border-purple-500/10 bg-gray-900/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-medium text-gray-200">
          {action} on {defi}
        </h2>

        {defi === "Uniswap" ? (
          <InteractionInferaceInput
            tokens={tokens}
            selectedToken={selectedAToken}
            tokenChangeHandler={setSelectedAToken}
            amount={amount}
            handleInput={setAmount}
            tokenPair
            selectedTokenB={selectedBToken}
            tokenBChangeHandler={setSelectedBToken}
            onAmountChange={() => {}}
          />
        ) : (
          <InteractionInferaceInput
            tokens={tokens}
            selectedToken={selectedAToken}
            tokenChangeHandler={setSelectedAToken}
            amount={amount}
            onAmountChange={() => {}}
            handleInput={setAmount}
          />
        )}

        <Button
          className="w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
          onClick={actionClick}
        >
          {action}
        </Button>
      </div>
    </div>
  );
}

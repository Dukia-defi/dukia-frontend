"use client";

import { tokens } from "@/utils/mock";
import { InteractionInferaceInput } from "../defi-interaction-interface";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { IOrder } from "@/lib/types";

interface Props {
  action: string;
  actionHandler: Dispatch<SetStateAction<IOrder[]>>;
  defi: string;
  getTokenBalance: (token: string) => number;
}

export function ActionInterface({
  action,
  actionHandler,
  defi,
  getTokenBalance,
}: Props) {
  const [selectedAToken, setSelectedAToken] = useState<string>("DAI");
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

  const tokensA = tokens.filter((token) => token !== selectedBToken);
  const tokensB = tokens.filter((token) => token !== selectedAToken);

  const tokenABalance = getTokenBalance(selectedAToken);

  return (
    <div className="mx-auto my-5 w-full p-4">
      <div className="space-y-4 rounded-xl border border-purple-500/10 bg-gray-900/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-medium text-gray-200">
          {action} on {defi}
        </h2>

        {defi === "Uniswap" ? (
          <InteractionInferaceInput
            tokens={tokensA}
            tokensB={tokensB}
            selectedToken={selectedAToken}
            tokenChangeHandler={setSelectedAToken}
            amount={amount}
            // handleInput={setAmount}
            selectedTokenB={selectedBToken}
            tokenBChangeHandler={setSelectedBToken}
            onAmountChange={setAmount}
            tokenABalance={tokenABalance}
          />
        ) : (
          <InteractionInferaceInput
            tokens={tokens}
            selectedToken={selectedAToken}
            tokenChangeHandler={setSelectedAToken}
            amount={amount}
            onAmountChange={setAmount}
            // handleInput={setAmount}
            tokenABalance={tokenABalance}
          />
        )}

        <Button
          className="w-full bg-purple-600 py-6 text-lg font-medium text-white hover:bg-purple-500"
          onClick={actionClick}
          disabled={parseFloat(amount) <= 0 || +amount > tokenABalance}
        >
          {action}
        </Button>
      </div>
    </div>
  );
}

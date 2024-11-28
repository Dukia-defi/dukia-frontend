"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  OverviewItemWrapper,
  OverviewSectionWrapper,
} from "./overview-section-wrapper";
import { useState } from "react";
import { IUserBalances } from "@/lib/types";

interface Props {
  data: IUserBalances;
}

export function UserBalances({ data }: Props) {
  const [customBalance, setCustomBalance] = useState<string>("");

  const { dai, usdc, lsk, weth, usdt } = data;

  const daiValue = parseFloat(dai.displayValue).toFixed(2);
  const usdcValue = parseFloat(usdc.displayValue).toFixed(2);
  const lskValue = parseFloat(lsk.displayValue).toFixed(2);
  const wethValue = parseFloat(weth.displayValue).toFixed(2);
  const usdtValue = parseFloat(usdt.displayValue).toFixed(2);
  const linkValue = parseFloat(data.link.displayValue).toFixed(2);

  const handleTokenSelect = (token: string) => {
    switch (token) {
      case "LINK":
        setCustomBalance(linkValue);
        break;
      default:
        setCustomBalance("0");
    }
  };

  const customTokens = ["LINK"];

  return (
    <OverviewSectionWrapper title="Token Balances">
      <OverviewItemWrapper
        title="USDC"
        value={usdcValue}
        color="text-white"
        full
      />

      <OverviewItemWrapper
        title="USDT"
        value={usdtValue}
        color="text-white"
        full
      />

      <OverviewItemWrapper
        title="DAI"
        value={daiValue}
        color="text-white"
        full
      />

      <OverviewItemWrapper
        title="WETH"
        value={wethValue}
        color="text-white"
        full
      />

      <OverviewItemWrapper
        title="LSK"
        value={lskValue}
        color="text-white"
        full
      />

      <div className="flex w-40 items-center justify-between">
        <Select onValueChange={(token) => handleTokenSelect(token)}>
          <SelectTrigger className="w-[100px] rounded-lg border-gray-500 bg-gray-700/50 px-4 py-2 text-gray-200">
            <SelectValue placeholder="Token" />
          </SelectTrigger>
          <SelectContent>
            {customTokens.map((token) => (
              <SelectItem key={token} value={token}>
                {token}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {customBalance != "" && <p>{customBalance}</p>}
      </div>
    </OverviewSectionWrapper>
  );
}

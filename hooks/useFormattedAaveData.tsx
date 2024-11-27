"use client";

import { formatUnits } from "viem";
import { useAaveInteractions } from "./useAaveInteractions";

export interface FormattedUserData {
  totalCollateralBase: string;
  totalDebtBase: string;
  availableBorrowsBase: string;
  currentLiquidationThreshold: string;
  ltv: string;
  healthFactor: string;
}

const formatNumber = (
  value: string,
  decimals: number = 18,
  minDecimals: number = 8,
): string => {
  const parts = value.split(".");
  if (parts.length === 2) {
    const decimalPart = parts[1].slice(0, decimals);
    const trimmed = decimalPart.replace(/0+$/, "");
    const paddedTrimmed = trimmed.padEnd(Math.min(minDecimals, decimals), "0");
    return `${parts[0]}.${paddedTrimmed}`;
  }
  return value;
};

const MAX_HEALTH_FACTOR = "∞";
const HEALTH_FACTOR_THRESHOLD = BigInt("1000000000000000000000000000000");

const formatUserAccountData = (rawData: bigint[]): FormattedUserData => {
  const [
    totalCollateralBase,
    totalDebtBase,
    availableBorrowsBase,
    currentLiquidationThreshold,
    ltv,
    healthFactor,
  ] = rawData;

  const formatEthValue = (value: bigint) => {
    const formatted = formatUnits(value, 18);
    return `${formatNumber(formatted, 18, 8)} ETH`;
  };

  const formatPercentage = (basisPoints: bigint) => {
    const percentage = Number(basisPoints) / 100;
    return `${percentage.toFixed(2)}`;
  };

  const formatHealthFactor = (value: bigint) => {
    // If there's no debt or health factor is extremely high, return infinity
    if (totalDebtBase === BigInt(0) || value >= HEALTH_FACTOR_THRESHOLD) {
      return MAX_HEALTH_FACTOR;
    }

    const formatted = formatUnits(value, 18);
    // For normal values, show up to 2 decimal places
    const number = Number(formatted);
    return number.toFixed(2);
  };

  return {
    totalCollateralBase: formatEthValue(totalCollateralBase),
    totalDebtBase: formatEthValue(totalDebtBase),
    availableBorrowsBase: formatEthValue(availableBorrowsBase),
    currentLiquidationThreshold: formatPercentage(currentLiquidationThreshold),
    ltv: formatPercentage(ltv),
    healthFactor: formatHealthFactor(healthFactor),
  };
};

export const useFormattedAaveData = (userAddress: string) => {
  const { userData } = useAaveInteractions(userAddress);

  const formattedData: FormattedUserData | undefined =
    userData.data && Array.isArray(userData.data)
      ? formatUserAccountData(userData.data as bigint[])
      : undefined;

  return {
    data: formattedData,
    isLoading: userData.isLoading,
    error: userData.error,
  };
};

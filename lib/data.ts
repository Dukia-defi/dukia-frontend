import { IAaveAnalytics, IUniswapAnalytics } from "./types";

export const dummy_aave_analytics_data: IAaveAnalytics[] = [
  // {
  //   asset: "ETH",
  //   totalSupplied: "1.46M",
  //   supplyApy: "1.95%",
  //   totalBorrowed: "1.27M",
  //   variableApy: "2.65%",
  // },
  // {
  //   asset: "WBTC",
  //   totalSupplied: "1.36M",
  //   supplyApy: "1.32%",
  //   totalBorrowed: "451K",
  //   variableApy: "1.65%",
  // },
  // {
  //   asset: "weETH",
  //   totalSupplied: "1.46M",
  //   supplyApy: "1.95%",
  //   totalBorrowed: "1.27M",
  //   variableApy: "2.65%",
  // },
  {
    asset: "USDT",
    totalSupplied: "1.36M",
    supplyApy: "1.32%",
    totalBorrowed: "451K",
    variableApy: "1.65%",
  },
  {
    asset: "USDC",
    totalSupplied: "1.46M",
    supplyApy: "1.95%",
    totalBorrowed: "1.27M",
    variableApy: "2.65%",
  },
  // {
  //   asset: "AAVE",
  //   totalSupplied: "1.36M",
  //   supplyApy: "1.32%",
  //   totalBorrowed: "451K",
  //   variableApy: "1.65%",
  // },
  {
    asset: "LINK",
    totalSupplied: "1.46M",
    supplyApy: "1.95%",
    totalBorrowed: "1.27M",
    variableApy: "2.65%",
  },
  {
    asset: "DAI",
    totalSupplied: "800K",
    supplyApy: "12%",
    totalBorrowed: "300K",
    variableApy: "10%",
  },
];

export const dummy_uniswap_analytics_data: IUniswapAnalytics[] = [
  {
    pool: "USDC/ETH",
    tvl: "$174.3M",
    apr: "26.45%",
    dailyVolume: "$253.6M",
    monthlyVolume: "$7.0B",
  },
  {
    pool: "WBTC/ETH",
    tvl: "$29.5M",
    apr: "29.65%",
    dailyVolume: "$8.6M",
    monthlyVolume: "$257.1M",
  },
  {
    pool: "ETH/USDT",
    tvl: "$174.3M",
    apr: "26.45%",
    dailyVolume: "$253.6M",
    monthlyVolume: "$7.0B",
  },
  {
    pool: "DAI/USDC",
    tvl: "$29.5M",
    apr: "29.65%",
    dailyVolume: "$8.6M",
    monthlyVolume: "$257.1M",
  },
  {
    pool: "UNI/ETH",
    tvl: "$174.3M",
    apr: "26.45%",
    dailyVolume: "$253.6M",
    monthlyVolume: "$7.0B",
  },
  {
    pool: "LINK/ETH",
    tvl: "$29.5M",
    apr: "29.65%",
    dailyVolume: "$8.6M",
    monthlyVolume: "$257.1M",
  },
];

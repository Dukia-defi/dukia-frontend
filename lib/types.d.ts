interface ISidebarItem {
  title: string;
  url: string;
}

interface IWallet extends IPortfolioDetails {
  address: string;
  balance: number;
}

interface IPortfolioDetails {
  networth: number;
  supplied: number;
  claimable: number;
  staked: number;
  borrowed: number;
}

interface IAaveAnalytics {
  asset: string;
  totalSupplied: string;
  supplyApy: string;
  totalBorrowed: string;
  variableApy: string;
}

interface IUniswapAnalytics {
  pool: string;
  tvl: string;
  apr: string;
  dailyVolume: string;
  monthlyVolume: string;
}

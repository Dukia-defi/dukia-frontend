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

interface IProgressBar {
  value: number;
  gradient: string;
  max?: number;
}

interface IStatCard {
  title: string;
  value: string | number;
  tooltipContent: string;
  valueColor?: string;
  className?: string;
  icon?: Icon;
}

interface IStatTooltip {
  content: string;
  children: React.ReactNode;
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

interface IDefiStats {
  netApy: number;
  supplyBalance: number;
  supplyComposition: number;
  borrowBalance: number;
  borrowPowerUsed: number;
  safetyRatio: number;
  borrowLimit: number;
  leftToBorrow: number;
}

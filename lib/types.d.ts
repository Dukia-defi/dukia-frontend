interface ISidebarItem {
  title: string;
  url: string;
}

interface IWallet extends IPortfolioDetails {
  address: string;
  balance: number;
}

// interface IWallet {
//   isConnected: boolean;
// more will be added
// }

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

import { FormattedUserData } from "@/hooks/useFormattedAaveData";
import {
  OverviewItemWrapper,
  OverviewSectionWrapper,
} from "./overview-section-wrapper";

interface Props {
  data: FormattedUserData;
}

export function PortfolioSummary({ data }: Props) {
  const { totalCollateralBase, availableBorrowsBase } = data;

  const supplied = parseFloat(totalCollateralBase).toFixed(2);
  const borrowed = parseFloat(availableBorrowsBase).toFixed(2);

  const networth = (parseFloat(supplied) + parseFloat(borrowed)).toFixed(2);

  return (
    <OverviewSectionWrapper title="DeFi Portfolio">
      <OverviewItemWrapper
        title="Net Worth"
        value={networth}
        main
        color="text-white"
      />
      <OverviewItemWrapper
        title="Supplied"
        value={supplied}
        color="text-yellow-300"
      />
      <OverviewItemWrapper title="Claimable" value={0} color="text-green-300" />
      <OverviewItemWrapper title="Staked" value={0} color="text-blue-300" />
      <OverviewItemWrapper
        title="Borrowed"
        value={borrowed}
        color="text-red-300"
      />
    </OverviewSectionWrapper>
  );
}

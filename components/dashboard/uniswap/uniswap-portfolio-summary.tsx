import { Icons } from "@/components/icons";
import Link from "next/link";
import { ItemWrapper } from "../aave/aave-portfolio-summary";

export function UniswapPortfolioSummary() {
  return (
    <Link
      href={"/dashboard/uniswap"}
      className="flex rounded-md bg-gray-700 hover:bg-gray-600"
    >
      <div className="flex items-center justify-center rounded-l-md bg-pink-400 px-[14px] py-2">
        <Icons.uniswapIcon />
      </div>

      <div className="flex w-full flex-col items-start gap-6 px-3 py-2 md:flex-row md:items-center md:gap-24">
        <ItemWrapper title="Uniswap V3 Position" value="Account" />
        <ItemWrapper title="LP" value={0} />
        <ItemWrapper title="Claimable" value={0} />
      </div>
    </Link>
  );
}

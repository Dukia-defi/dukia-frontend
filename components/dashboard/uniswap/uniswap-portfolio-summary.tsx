import { Icons } from "@/components/icons";
import Link from "next/link";
import { ItemWrapper } from "../aave/aave-portfolio-summary";

export function UniswapPortfolioSummary() {
  return (
    <Link
      href={"/dashboard/uniswap"}
      className="flex rounded-md bg-gray-700 hover:bg-gray-600"
    >
      <div className="rounded-l-md bg-pink-400 px-[14px] py-2">
        <Icons.uniswapIcon />
      </div>

      <div className="flex w-full items-center gap-24 px-3 py-2">
        <ItemWrapper title="Uniswap V3 Position" value="Account" />
        <ItemWrapper title="LP" value={0} />
        <ItemWrapper title="Claimable" value={0} />
      </div>
    </Link>
  );
}

import { Icons } from "@/components/icons";
import Paragraph from "@/components/ui/typography/paragraph";
import Link from "next/link";

export function AavePortfolioSummary() {
  return (
    <Link
      href={"/dashboard/aave"}
      className="flex rounded-md bg-gray-700 hover:bg-gray-600"
    >
      <div className="rounded-l-md bg-green-1 px-3 py-6">
        <Icons.aaveIcon />
      </div>

      <div className="flex w-full items-center justify-between px-3 py-4">
        <ItemWrapper title="Aave V3 Position" value="Account" />
        <ItemWrapper title="Collateral" value={0} />
        <ItemWrapper title="Debt" value={0} />
        <ItemWrapper title="Staked" value={0} />
        <ItemWrapper title="Claimable" value={0} />
        <ItemWrapper title="APY" value={0} percent />
      </div>
    </Link>
  );
}

export function ItemWrapper({
  title,
  value,
  percent = false,
}: {
  title: string;
  value: number | string;
  percent?: boolean;
}) {
  return (
    <div className="gap-4">
      <Paragraph className="text-sm font-light capitalize text-green-1 lg:text-sm">
        {title}
      </Paragraph>
      <Paragraph>
        {percent
          ? `${value} %`
          : typeof value === "string"
            ? `${value}`
            : `$${value}`}
      </Paragraph>
    </div>
  );
}

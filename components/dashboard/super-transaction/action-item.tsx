import { Icons } from "@/components/icons";
import Paragraph from "@/components/ui/typography/paragraph";
import { IOrder } from "@/lib/types";

export function ActionItem({
  action,
  defi,
  tokenA,
  tokenB,
  amount,
  tokenPair,
}: IOrder) {
  return (
    <div className="flex items-center gap-4 rounded-md border border-green-1 bg-green-1/40 pl-2">
      {defi === "Aave" ? (
        <div className="flex h-16 items-center justify-center rounded-l-md">
          <Icons.aaveIcon />
        </div>
      ) : (
        <div className="flex h-16 items-center justify-center rounded-l-md">
          <Icons.uniswapIcon />
        </div>
      )}
      <Paragraph>
        {action} {amount} {tokenA} {tokenPair && `/ ${tokenB}`} on {defi}{" "}
      </Paragraph>
    </div>
  );
}

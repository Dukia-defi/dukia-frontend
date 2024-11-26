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
    <div className="flex items-center gap-4 rounded-md border border-green-1 bg-green-1/40">
      {defi === "Aave" ? (
        <div className="flex h-16 items-center justify-center rounded-l-md bg-green-1 px-2">
          <Icons.aaveIcon />
        </div>
      ) : (
        <div className="flex h-16 items-center justify-center rounded-l-md bg-pink-400 px-[10px]">
          <Icons.uniswapIcon />
        </div>
      )}
      <Paragraph>
        {action} {amount} {tokenA} {tokenPair && `/ ${tokenB}`} on {defi}{" "}
      </Paragraph>
    </div>
  );
}

import Paragraph from "@/components/ui/typography/paragraph";
import { ActionItem } from "./action-item";
import { Button } from "@/components/ui/button";

interface Props {
  orders: IOrder[];
  resetFn: () => void;
  startFn: () => void;
}

export function SuperTransactionOrders({ orders, resetFn, startFn }: Props) {
  return (
    <div className="rounded-md border border-purple-1 px-3 py-2">
      {orders.length < 1 ? (
        <Paragraph>No order yet!</Paragraph>
      ) : (
        <div>
          <Paragraph className="text-center">Your super transaction</Paragraph>

          <div className="mb-6 mt-2 space-y-3">
            {orders.map((order) => (
              <div key={`${order.action}-${order.tokenA}`}>
                <ActionItem
                  action={order.action}
                  amount={order.amount}
                  defi={order.defi}
                  tokenA={order.tokenA}
                  tokenB={order.tokenB}
                  tokenPair={order.tokenPair}
                />
              </div>
            ))}
          </div>

          <div className="flex w-full items-center gap-3">
            <Button
              onClick={resetFn}
              variant={"destructive"}
              className="w-full"
            >
              Cancel
            </Button>

            <Button onClick={startFn} className="w-full">
              Execute
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ActionInterface } from "@/components/dashboard/super-transaction/action-interface";
import { ActionSelector } from "@/components/dashboard/super-transaction/action-selector";
import { SuperTransactionOrders } from "@/components/dashboard/super-transaction/super-transaction-orders";
import { SectionLabel } from "@/components/sections";
import Heading2 from "@/components/ui/typography/heading2";
import Heading3 from "@/components/ui/typography/heading3";
import { useWallet } from "@/context/wallet";
import useBatchExecutor from "@/hooks/useBatchExecutor";
import { IOrder, TBytes } from "@/lib/types";
import {
  getCallData,
  getDefiAddress,
  getDefiFunction,
  getParams,
} from "@/lib/utils";
import { defiActions, defiOptions } from "@/utils/mock";
import { useEffect, useState } from "react";

type DefiKeys = keyof typeof defiActions;

export default function SuperTransactionPage() {
  const [selectedDefi, setSelectedDefi] = useState<string>("");
  const [actions, setActions] = useState<string[]>([]);
  const [selectedAction, setSelectedAction] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);
  const [orders, setOrders] = useState<IOrder[]>([]);

  const { executeBatch } = useBatchExecutor();
  const { chain } = useWallet();

  useEffect(() => {
    const selectedActions =
      selectedDefi === ""
        ? ["Select a protocol"]
        : defiActions[selectedDefi as DefiKeys];

    setActions(selectedActions);
  }, [selectedDefi]);

  useEffect(() => {
    softReset();
  }, [orders]);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const softReset = () => {
    setSelectedDefi("");
    setSelectedAction("");
    setActions([]);
    setShowInput(false);
  };

  const resetHandler = () => {
    softReset();
    setOrders([]);
  };

  const startHandler = () => {
    const processedOrder = orders.map((order) => ({
      address: getDefiAddress({ defi: order.defi, chain }),
      function: getCallData({
        action: getDefiFunction({ defi: order.defi, action: order.action }),
        params: getParams({ order, chain }) as string[],
      }),
    }));

    const targets = processedOrder.map((order) => order.address);
    const data = processedOrder.map((order) => order.function);

    executeBatch({ targets: targets as string[], data: data as TBytes[] });

    resetHandler();
  };

  return (
    <section>
      <DashboardHeader
        title={
          <div className="space-y-4">
            <SectionLabel
              title="Super Transaction"
              className="text-2xl md:text-3xl"
            />
            <Heading2 className="text-xl lg:text-2xl">
              Execute complex transactions composed of multiple orders easily
              and safely
            </Heading2>
          </div>
        }
      />

      <div className="mx-auto mt-20 max-w-5xl">
        <Heading3 className="text-xl lg:text-2xl">
          Create your super transaction by combining actions:
        </Heading3>

        <div className="mb-10 mt-6">
          <ActionSelector
            selectedDefi={selectedDefi}
            defiOptions={defiOptions}
            actions={actions}
            selectedAction={selectedAction}
            actionChangeFn={setSelectedAction}
            defiChangeFn={setSelectedDefi}
            saveFn={toggleInput}
            showInput={showInput}
          />

          {showInput && (
            <ActionInterface
              action={selectedAction}
              actionHandler={setOrders}
              defi={selectedDefi}
            />
          )}
        </div>

        <SuperTransactionOrders
          orders={orders}
          resetFn={resetHandler}
          startFn={startHandler}
        />
      </div>
    </section>
  );
}

"use client";

import { ActionSelector } from "@/components/dashboard/super-transaction/action-selector";
import Heading2 from "@/components/ui/typography/heading2";
import { IDefiTabs } from "@/lib/types";
import { defiActions, defiOptions } from "@/utils/mock";
import { useEffect, useState } from "react";

export default function SuperTransactionPage() {
  /**
   * users need to select  the protocol then the action then the parameters
   * 2 dropdowns, first one to choose protcol 2nd to choose action, based on the selected protocol
   * when action is selected, show the appropriate input field
   * then once its choosen, push it into a list
   * in the back, get the function selectors with the arguments and pass it to the handler function
   */
  const [selectedDefi, setSelectedDefi] = useState<string>("Aave");
  const [actions, setActions] = useState<string[]>([]);
  const [action, setSelectedAction] = useState<string>(actions[0]);

  useEffect(() => {
    const selectedActions =
      selectedDefi === "Aave" ? defiActions.Aave : defiActions.Uniswap;

    setActions(selectedActions);
  }, [selectedDefi]);

  const saveHandler = () => {
    console.log(`You are ${action} on ${selectedDefi}`);
  };

  return (
    <section>
      <Heading2>
        Execute complex transactions composed of multiple orders easily and
        safely
      </Heading2>

      <div>
        <ActionSelector
          selectedDefi={selectedDefi}
          defiOptions={defiOptions}
          actions={actions}
          selectedAction={action}
          actionChangeFn={setSelectedAction}
          defiChangeFn={setSelectedDefi}
          saveFn={saveHandler}
        />
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

interface Props {
  selectedDefi: string;
  defiChangeFn: Dispatch<SetStateAction<string>>;
  actionChangeFn: Dispatch<SetStateAction<string>>;
  defiOptions: string[];
  selectedAction: string;
  actions: string[];
  saveFn: () => void;
}

export function ActionSelector({
  selectedDefi,
  defiChangeFn,
  defiOptions,
  selectedAction,
  actionChangeFn,
  actions,
  saveFn,
}: Props) {
  return (
    <div className="flex items-center">
      <Select defaultValue={selectedDefi} onValueChange={defiChangeFn}>
        <SelectTrigger className="w-[100px] rounded-lg border-gray-500 bg-gray-700/50 px-4 py-2 text-gray-200">
          <SelectValue placeholder="Choose DeFi protocol" />
        </SelectTrigger>
        <SelectContent>
          {defiOptions.map((defi) => (
            <SelectItem key={defi} value={defi}>
              {defi}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue={selectedAction} onValueChange={actionChangeFn}>
        <SelectTrigger className="w-[100px] rounded-lg border-gray-500 bg-gray-700/50 px-4 py-2 text-gray-200">
          <SelectValue placeholder="Choose Action" />
        </SelectTrigger>
        <SelectContent>
          {actions.map((action) => (
            <SelectItem key={action} value={action}>
              {action}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div>
        <Button onClick={saveFn}>Select</Button>
      </div>
    </div>
  );
}

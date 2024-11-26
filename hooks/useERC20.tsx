import { client } from "@/app/client";
import { token_addresses } from "@/lib/addresses";
import { getContract, prepareContractCall } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";

const contract = getContract({
  client: client,
  chain: sepolia,
  address: token_addresses.sepolia.usdc,
});

export const useERC20 = () => {
  const { mutate, error, isPending } = useSendTransaction();

  const approveFn = ({
    address,
    amount,
  }: {
    address: string;
    amount: bigint;
  }) => {
    const transaction = prepareContractCall({
      contract,
      method: "function approve(address spender, uint256 value)",
      params: [address, amount],
    });

    mutate(transaction);
  };

  return { approveFn };
};

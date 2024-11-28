import { client } from "@/app/client";
import { token_addresses } from "@/lib/addresses";
import { getTokenDecimalPlaces } from "@/lib/utils";
import { getContract, prepareContractCall } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";

export const useERC20 = () => {
  const { mutate } = useSendTransaction();

  const approveFn = ({
    tokenSymbol,
    spenderAddress,
    approveAmount,
  }: {
    tokenSymbol: string;
    spenderAddress: string;
    approveAmount: string;
  }) => {
    const tokenAddress =
      token_addresses.sepolia[
        tokenSymbol.toLowerCase() as keyof typeof token_addresses.sepolia
      ];

    const contract = getContract({
      client: client,
      chain: sepolia,
      address: tokenAddress,
    });

    const amountInWei = BigInt(
      parseFloat(approveAmount) *
        Math.pow(10, getTokenDecimalPlaces(tokenSymbol)),
    );

    const transaction = prepareContractCall({
      contract,
      method: "function approve(address spender, uint256 value)",
      params: [spenderAddress, amountInWei],
    });

    mutate(transaction);
  };

  return { approveFn };
};

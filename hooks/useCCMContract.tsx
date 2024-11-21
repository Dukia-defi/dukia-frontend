"use client";

import { useCallback } from "react";
import { ContractOptions, prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";

interface Props {
  contract: Readonly<ContractOptions<[]>>;
}

interface ReceiveMessageProps {
  userAddress: string;
  message: `0x${string}`;
  targetAddress: string;
  messageId: bigint;
  fromChainId: number;
  messageHash: `0x${string}`;
}

export function useCCMContract({ contract }: Props) {
  //receiveMessage
  const { mutateAsync: sendReceiveTx, data: transactionResult } =
    useSendTransaction();

  const receiveMessage = useCallback(
    async (data: ReceiveMessageProps) => {
      const {
        userAddress,
        message,
        targetAddress,
        messageId,
        fromChainId,
        messageHash,
      } = data;

      try {
        const receiveTransaction = prepareContractCall({
          contract,
          method:
            "function receiveMessage(address _userAddress,bytes calldata _message,address _targetAddress,uint256 _messageId,uint32 _fromChainId,bytes32 _messageHash)",
          params: [
            userAddress,
            message,
            targetAddress,
            messageId,
            fromChainId,
            messageHash,
          ],
        });

        await sendReceiveTx(receiveTransaction);
      } catch (error) {
        console.error("Error while sending transaction:", error);
      }
    },
    [contract, sendReceiveTx],
  );

  return { receiveMessage, transactionResult };
}

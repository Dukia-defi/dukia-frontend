"use client";

import { ParseEventLogsResult, PreparedEvent } from "thirdweb";
import { type UseQueryResult } from "@tanstack/react-query";
import { useCallback } from "react";
import { useCCMContract } from "./useCCMContract";
import { useContracts } from "./useContracts";

interface Props {
  event: UseQueryResult<
    ParseEventLogsResult<[PreparedEvent<never>], true>,
    Error
  >;
}

export default function useRelay({ event }: Props) {
  //todo
  /**
   * this hook should listen to events - messageSent and messageReceived
   * 1. e.g user calls swap
   * 2. swap calls sendMessage on lisk
   * 3. messageSent event is emitted
   * 4. relay picks up the event
   * 5. sends the message to the address on the appropriate chain by calling the receiveMessage function on that target chain CCM contract
   * 6. message is process and messageReceived event is emitted
   * 7. relay picks up the event
   * 8. sends response back to ui
   * 9. ui updates states
   */

  const { ethSepCCMContract } = useContracts();

  const { receiveMessage } = useCCMContract({ contract: ethSepCCMContract });

  //4. listen to event emitted
  useCallback(() => {
    const { data } = event;

    if (!data) {
      console.error("Invalid event");
    }

    console.log(event.data);

    //5. call receiveMessage on receiver contract
    // receiveMessage();
  }, [event]);
}

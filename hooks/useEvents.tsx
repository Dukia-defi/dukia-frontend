"use client";

import { useContractEvents } from "thirdweb/react";
import { ContractOptions, prepareEvent } from "thirdweb";

export function useEvents({
  eventSig,
  contract,
}: {
  eventSig: TContractEvent;
  contract: Readonly<ContractOptions<[]>>;
}) {
  const event = prepareEvent({
    signature: eventSig,
  });

  const contractEvents = useContractEvents({
    contract,
    events: [event],
  });

  return { contractEvents };
}

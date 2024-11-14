import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src="/svg/logo.svg" width={177} height={75} alt="Dukia deFi" />
      <Button className="border-[3px] border-purple-1 uppercase px-4 py-2 font-bold text-lg">
        go to app
      </Button>
    </div>
  );
};

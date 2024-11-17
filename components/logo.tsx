import Link from "next/link";
// import { Icons } from "./icons";
import Image from "next/image";

export function Logo() {
  return (
    <Link href={"/"}>
      {/* <Icons.dukiaLogo /> */}
      <Image
        src="/svg/logo.svg"
        width={0}
        height={0}
        alt="Dukia deFi"
        className="w-[140px] h-auto lg:w-[177px] lg:h-auto"
        priority
      />
    </Link>
  );
}

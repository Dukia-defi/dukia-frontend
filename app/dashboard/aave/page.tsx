import { AaveInterface, AaveStats } from "@/components/dashboard/aave";
import { SectionLabel } from "@/components/sections";
import Image from "next/image";

export default function AavePage() {
  return (
    <>
      <section>
        <div className="mb-6 flex flex-col items-start">
          <Image src="/svg/aave.svg" width={70} height={40} alt="aave" />
          <SectionLabel title="Aave world" className="text-3xl" />
        </div>
        <AaveStats />
        <AaveInterface />
      </section>
    </>
  );
}

import { DefiInterface, DefiStats } from "@/components/dashboard";
import { SectionLabel } from "@/components/sections";
import Image from "next/image";
import { aave_analytics_columns } from "@/components/dashboard/aave/aave-analytics-columns";
import { DataTable } from "@/components/ui/data-table";
import { dummy_aave_analytics_data } from "@/lib/data";

export default function AavePage() {
  const props: IDefiStats = {
    netApy: 0,
    supplyBalance: 0,
    supplyComposition: 82,
    borrowBalance: 0,
    borrowPowerUsed: 20,
    safetyRatio: 0,
    borrowLimit: 0,
    leftToBorrow: 0,
  };
  return (
    <section>
      <div className="mb-6 flex flex-col items-start">
        <Image src="/svg/aave.svg" width={70} height={40} alt="aave" />
        <SectionLabel title="Aave" className="text-3xl" />
      </div>
      <DefiStats {...props} />
      <DefiInterface />
      <DataTable
        columns={aave_analytics_columns}
        data={dummy_aave_analytics_data}
        filterBy="asset"
        tableTitle="Market Info"
      />
    </section>
  );
}

import { uniswap_analytics_columns } from "@/components/dashboard/uniswap/uniswap-analytics-column";
import { UniswapDefiStats } from "@/components/dashboard/uniswap/uniswap-defi-stats";
import { UniswapInteractionInterface } from "@/components/dashboard/uniswap/uniswap-interaction-interface";
import { SectionLabel } from "@/components/sections";
import { DataTable } from "@/components/ui/data-table";
import { dummy_uniswap_analytics_data } from "@/lib/data";
import Image from "next/image";

export default function UniswapPage() {
  const props: IUniswapStats = {
    netApy: 0,
    liquityProvided: 100,
    poolsProvided: 4,
    profit: 20,
  };

  return (
    <section className="mb-40">
      <div className="mb-6 flex flex-col items-start">
        <Image src="/svg/uniswap.svg" width={50} height={30} alt="uniswap" />
        <SectionLabel title="Uniswap" className="text-3xl" />
      </div>

      <UniswapDefiStats {...props} />

      <UniswapInteractionInterface />

      <DataTable
        columns={uniswap_analytics_columns}
        data={dummy_uniswap_analytics_data}
        filterBy="pool"
        tableTitle="Market Info"
      />
    </section>
  );
}

import { uniswap_analytics_columns } from "@/components/dashboard/uniswap/uniswap-analytics-column";
import { DataTable } from "@/components/ui/data-table";
import { dummy_uniswap_analytics_data } from "@/lib/data";

export default function UniswapPage() {
  return (
    <>
      <section>
        <p>Uniswap stuff</p>
      </section>

      <section>
        <DataTable
          columns={uniswap_analytics_columns}
          data={dummy_uniswap_analytics_data}
          filterBy="pool"
          tableTitle="Market Info"
        />
      </section>
    </>
  );
}

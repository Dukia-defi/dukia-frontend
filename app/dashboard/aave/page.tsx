import { aave_analytics_columns } from "@/components/dashboard/aave/aave-analytics-columns";
import { DataTable } from "@/components/ui/data-table";
import { dummy_aave_analytics_data } from "@/lib/data";

export default function AavePage() {
  return (
    <>
      <section>
        <p>Aave stuff</p>
      </section>

      <section>
        <DataTable
          columns={aave_analytics_columns}
          data={dummy_aave_analytics_data}
          filterBy="asset"
          tableTitle="Market Info"
        />
      </section>
    </>
  );
}

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import Heading1 from "@/components/ui/typography/heading1";
import Paragraph from "@/components/ui/typography/paragraph";

export default function BridgePage() {
  return (
    <section>
      <DashboardHeader
        title={
          <div>
            <p>Bridge world</p>
          </div>
        }
      />
      <div>
        <Heading1>Swap tokens from a one chain to another</Heading1>
        <Paragraph>Coming soon</Paragraph>
      </div>
    </section>
  );
}

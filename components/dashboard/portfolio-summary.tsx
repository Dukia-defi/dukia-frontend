import { IItemWrapper, IPortfolioDetails } from "@/lib/types";
import Heading3 from "../ui/typography/heading3";
import Paragraph from "../ui/typography/paragraph";

interface Props {
  data: IPortfolioDetails;
}

export function PortfolioSummary({ data }: Props) {
  const { networth, supplied, claimable, staked, borrowed } = data;

  return (
    <section className="mx-auto w-full space-y-4 rounded-md bg-gray-800 lg:w-10/12">
      <div className="rounded-t-md bg-gray-700 px-8 py-4">
        <Heading3 className="text-xl">Portfolio Value</Heading3>
      </div>

      <div className="grid grid-cols-2 items-start justify-between gap-4 px-8 pb-8 pt-4 lg:flex">
        <ItemWrapper
          title="Net Worth"
          value={networth}
          main
          color="text-white"
        />
        <ItemWrapper
          title="Supplied"
          value={supplied}
          color="text-yellow-300"
        />
        <ItemWrapper
          title="Claimable"
          value={claimable}
          color="text-green-300"
        />
        <ItemWrapper title="Staked" value={staked} color="text-blue-300" />
        <ItemWrapper title="Borrowed" value={borrowed} color="text-red-300" />
      </div>
    </section>
  );
}

function ItemWrapper({ title, value, color, main = false }: IItemWrapper) {
  return (
    <div className="gap-4">
      <Paragraph className="text-sm font-light capitalize text-green-1 lg:text-sm">
        {title}
      </Paragraph>
      <Paragraph
        className={
          main ? "font-medium lg:text-5xl" : "lg:text-lg" + ` ${color}`
        }
      >
        ${value}
      </Paragraph>
    </div>
  );
}

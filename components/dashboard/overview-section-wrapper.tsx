import { IItemWrapper } from "@/lib/types";
import Heading3 from "../ui/typography/heading3";
import Paragraph from "../ui/typography/paragraph";

interface Props {
  children: React.ReactNode;
  title: string;
}

export function OverviewSectionWrapper({ children, title }: Props) {
  return (
    <section className="mx-auto w-full space-y-4 rounded-md bg-gray-800 lg:w-10/12">
      <div className="rounded-t-md bg-gray-700 px-8 py-4">
        <Heading3 className="text-xl">{title}</Heading3>
      </div>

      <div className="grid grid-cols-2 items-start justify-between gap-4 px-8 pb-8 pt-4 lg:flex">
        {children}
      </div>
    </section>
  );
}

export function OverviewItemWrapper({
  title,
  value,
  color,
  main = false,
  full = false,
}: IItemWrapper) {
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
        {!full ? "$" : ""}
        {value}
      </Paragraph>
    </div>
  );
}

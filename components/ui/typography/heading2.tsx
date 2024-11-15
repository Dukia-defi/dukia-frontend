import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading2 = ({ children, className, ...props }: Props) => {
  return (
    <h2 className={cn("text-4xl font-bold lg:text-6xl", className)} {...props}>
      {children}
    </h2>
  );
};

export default Heading2;

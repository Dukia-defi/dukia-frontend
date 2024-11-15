import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading3 = ({ children, className, ...props }: Props) => {
  return (
    <h3 className={cn("text-4xl font-bold lg:text-6xl", className)} {...props}>
      {children}
    </h3>
  );
};

export default Heading3;

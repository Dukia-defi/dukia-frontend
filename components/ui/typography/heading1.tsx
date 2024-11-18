import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading1 = ({ children, className, ...props }: Props) => {
  return (
    <h1 className={cn("text-2xl font-bold", className)} {...props}>
      {children}
    </h1>
  );
};

export default Heading1;

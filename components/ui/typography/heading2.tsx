import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Heading2 = ({ children, className, ...props }: Props) => {
  return (
    <h2
      className={cn("text-3xl font-semibold lg:text-4xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading2;

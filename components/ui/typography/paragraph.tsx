import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Paragraph = ({ children, className, ...props }: Props) => {
  return (
    <p className={cn("text-4xl font-bold lg:text-6xl", className)} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;

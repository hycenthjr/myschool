import * as React from "react";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  asChild?: boolean; // Optional, allows rendering another element
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
  secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
  destructive:
    "border-transparent bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-2 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline:
    "text-foreground hover:bg-accent hover:text-accent-foreground border",
};

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  className = "",
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? (props as any).as : "span";

  return (
    <Comp
      className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};
export default Badge;
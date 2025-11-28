import * as React from "react";

type AlertVariant = "default" | "destructive";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

interface AlertTitleProps extends React.HTMLAttributes<HTMLDivElement> {}
interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

const variantClasses: Record<AlertVariant, string> = {
  default: "bg-white text-gray-900", // adjust colors to match your design
  destructive: "bg-red-50 text-red-700",
};

export const Alert: React.FC<AlertProps> = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      role="alert"
      className={`relative w-full rounded-lg border px-4 py-3 text-sm grid grid-cols-[0_1fr] gap-y-1 items-start [&>svg]:w-4 [&>svg]:h-4 [&>svg]:translate-y-0.5 [&>svg]:text-current ${className} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const AlertTitle: React.FC<AlertTitleProps> = ({
  className = "",
  ...props
}) => {
  return (
    <div
      className={`col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight ${className}`}
      {...props}
    />
  );
};

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  className = "",
  ...props
}) => {
  return (
    <div
      className={`text-gray-500 col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    />
  );
};

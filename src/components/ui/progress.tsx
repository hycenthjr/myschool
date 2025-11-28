import React from "react";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export function Progress({
  value = 0,
  className = "",
  ...props
}: ProgressProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={`relative h-2 w-full bg-gray-300 rounded-full overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="h-full bg-blue-600 transition-all"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}

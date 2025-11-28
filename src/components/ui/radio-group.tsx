"use client";

import * as React from "react";
import { CircleIcon } from "lucide-react";

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (val: string) => void;
}

interface RadioGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  disabled?: boolean;
}

/* ──────────────────────────────── */
/* Radio Group Container */
/* ──────────────────────────────── */

export const RadioGroup: React.FC<RadioGroupProps> = ({
  className = "",
  children,
  value,
  onValueChange,
  ...props
}) => {
  return (
    <div className={`grid gap-3 ${className}`} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<RadioGroupItemProps>(child)) return child;

        return React.cloneElement(child, {
          checked: child.props.value === value,
          onChange: (_e: React.ChangeEvent<HTMLInputElement>) =>
            onValueChange?.(child.props.value),
        });
      })}
    </div>
  );
};

/* ──────────────────────────────── */
/* Radio Group Item */
/* ──────────────────────────────── */

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  className = "",
  disabled,
  checked,
  ...props
}) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <span
        className={`
          border border-gray-400 dark:bg-gray-700
          aspect-square size-4 rounded-full shadow-sm
          flex items-center justify-center transition-all relative
          focus-visible:ring-2 focus-visible:ring-blue-500
          disabled:cursor-not-allowed disabled:opacity-50
          ${checked ? "border-primary text-primary" : "border-input"}
          ${className}
        `}
      >
        {checked && (
          <CircleIcon className="absolute size-2 fill-primary text-primary" />
        )}
      </span>

      <input
        type="radio"
        className="hidden"
        checked={checked}
        disabled={disabled}
        {...props}
      />
    </label>
  );
};

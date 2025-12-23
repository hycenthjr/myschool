"use client";

import React from "react";
import { CheckIcon } from "lucide-react";

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ className = "", ...props }: CheckboxProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="relative inline-flex items-center justify-center">
        <input
          type="checkbox"
          className={`
            peer size-4 appearance-none rounded-[4px] border shadow-xs 
            transition-all outline-none 
            bg-input-background dark:bg-input/30 
            border-input 
            focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring
            aria-invalid:border-destructive aria-invalid:ring-destructive/20
            dark:aria-invalid:ring-destructive/40
            disabled:cursor-not-allowed disabled:opacity-50
            checked:bg-primary checked:text-primary-foreground checked:border-primary
            ${className}
          `}
          {...props}
        />

        {/* Check Icon */}
        <CheckIcon
          className="
            pointer-events-none absolute inset-0 m-auto size-3.5 
            text-current opacity-0 transition-opacity 
            peer-checked:opacity-100
          "
        />
      </span>
    </label>
  );
}

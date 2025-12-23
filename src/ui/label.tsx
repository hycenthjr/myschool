"use client";

import React from "react";

export function Label({
  children,
  className = "",
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`flex items-center gap-2 text-sm leading-none font-medium select-none 
        peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-black
        ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

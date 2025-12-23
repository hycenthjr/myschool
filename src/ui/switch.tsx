"use client";

import * as React from "react";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"| "checked" | "onChange" > {
    checked : boolean;
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
  }

const Switch = React.forwardRef<HTMLInputElement, SwitchProps > (
  ({ className, checked, onChange, ...props }, ref) => {


  const base =
    "peer relative inline-flex h-[1.15rem] w-8 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50";

  const merged = className ? base + " " + className : base;

  return (
    <label
      data-slot="switch"
      className={merged}
      style={{
        backgroundColor: checked
          ? "black"
          : "gray",
        position: "relative",
      }}
    >
      <span
        data-slot="switch-thumb"
        className="
          pointer-events-none block size-4 rounded-full transition-transform
        "
        style={{
          backgroundColor: checked
            ? "white"
            : "white",
          transform: checked ? "translateX(calc(100% - 2px))" : "translateX(0)",
        }}
      />

      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
        className="sr-only"
      />
    </label>
  );
}
);
export default Switch;

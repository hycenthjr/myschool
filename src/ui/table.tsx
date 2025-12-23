"use client";

import * as React from "react";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  const base = "w-full caption-bottom text-sm";
  const merged = className ? base + " " + className : base;

  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table data-slot="table" className={merged} {...props} />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  const base = "[&_tr]:border-b";
  const merged = className ? base + " " + className : base;

  return <thead data-slot="table-header" className={merged} {...props} />;
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  const base = "[&_tr:last-child]:border-0";
  const merged = className ? base + " " + className : base;

  return <tbody data-slot="table-body" className={merged} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  const base = "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0";
  const merged = className ? base + " " + className : base;

  return <tfoot data-slot="table-footer" className={merged} {...props} />;
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  const base =
    "hover:bg-gray-200 data-[state=selected]:bg-muted border-b border-gray-200 transition-colors";
  const merged = className ? base + " " + className : base;

  return <tr data-slot="table-row" className={merged} {...props} />;
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  const base =
    "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]";
  const merged = className ? base + " " + className : base;

  return <th data-slot="table-head" className={merged} {...props} />;
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  const base =
    "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]";
  const merged = className ? base + " " + className : base;

  return <td data-slot="table-cell" className={merged} {...props} />;
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  const base = "text-muted-foreground mt-4 text-sm";
  const merged = className ? base + " " + className : base;

  return <caption data-slot="table-caption" className={merged} {...props} />;
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};

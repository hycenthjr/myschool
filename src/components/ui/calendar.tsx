import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, type DayPickerProps } from "react-day-picker";

export function Calendar({
  className = "",
  classNames = {},
  showOutsideDays = true,
  ...props
}: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`p-3 ${className}`}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button:
          "flex items-center justify-center size-7 border rounded-md bg-transparent p-0 opacity-50 hover:opacity-100 transition",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-gray-500 rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: `
          relative p-0 text-center text-sm
          focus-within:relative focus-within:z-20
          [&:has([aria-selected])]:bg-gray-200
          ${
            props.mode === "range"
              ? `
              [&:has(>.day-range-start)]:rounded-l-md
              [&:has(>.day-range-end)]:rounded-r-md
            `
              : "[&:has([aria-selected])]:rounded-md"
          }
        `,
        day: `
          flex items-center justify-center
          size-8 p-0 rounded-md
          hover:bg-gray-100
          font-normal aria-selected:opacity-100
        `,
        day_range_start: "day-range-start bg-primary text-white",
        day_range_end: "day-range-end bg-primary text-white",
        day_selected: "bg-primary text-white hover:bg-primary/90",
        day_today: "bg-gray-200 text-gray-800 font-semibold",
        day_outside: "text-gray-400 aria-selected:text-gray-400",
        day_disabled: "text-gray-400 opacity-50",
        day_range_middle: "bg-gray-100 text-gray-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...iconProps }) =>
          orientation === "left" ? (
            <ChevronLeft className={`size-4 ${iconProps.className || ""}`} />
          ) : (
            <ChevronRight className={`size-4 ${iconProps.className || ""}`} />
          ),
      }}
      {...props}
    />
  );
}

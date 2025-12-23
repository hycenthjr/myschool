import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React from "react";

// ===============================
// Root
// ===============================
export function Select({
  children,
  value,
  onValueChange,
}: {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  // enhance children
  const enhanced = React.Children.map(children, (child: any) => {
    if (!child) return child;

    // inject current value into <SelectValue>
    if (child.type === SelectValue) {
      return React.cloneElement(child, { value });
    }

    // inject open toggle logic into <SelectTrigger>
    if (child.type === SelectTrigger) {
      return React.cloneElement(child, {
        open,
        setOpen,
      });
    }

    // inject dropdown handlers into <SelectContent>
    if (child.type === SelectContent) {
      return React.cloneElement(child, {
        open,
        setOpen,
        value,
        onValueChange,
      });
    }

    return child;
  });

  return <div className="relative">{enhanced}</div>;
}

// ===============================
// Value (shown in trigger)
// ===============================
export function SelectValue({
  placeholder,
  value,
}: {
  placeholder?: string;
  value?: string;
}) {
  return <span>{value || placeholder}</span>;
}

// ===============================
// Trigger
// ===============================
export function SelectTrigger({
  children,
  className = "",
  open,
  setOpen,
}: {
  children: React.ReactNode;
  className?: string;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}) {
  return (
    <button
      onClick={() => setOpen && setOpen(!open)}
      className={`flex w-full items-center justify-between gap-2 rounded-md border bg-white px-3 py-2 text-sm ${className}`}
    >
      {children}
      <ChevronDownIcon className="w-4 h-4 opacity-60" />
    </button>
  );
}

// ===============================
// Content (Dropdown Panel)
// ===============================
export function SelectContent({
  children,
  open,
  setOpen,
  value,
  onValueChange,
  className = "",
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}) {
  if (!open) return null;

  // enhance children (SelectItem)
  const enhanced = React.Children.map(children, (child: any) => {
    if (!child) return child;

    if (child.type === SelectItem) {
      return React.cloneElement(child, {
        selected: child.props.value === value,
        onSelect: (selectedValue: string) => {
          onValueChange?.(selectedValue);
          setOpen?.(false);
        },
      });
    }

    return child;
  });

  return (
    <div
      className={`absolute left-0 right-0 mt-1 rounded-md border bg-white shadow-md max-h-60 overflow-y-auto z-50 ${className}`}
    >
      {enhanced}
    </div>
  );
}

// ===============================
// Label
// ===============================
export function SelectLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-3 py-1.5 text-xs text-gray-500 ${className}`}>
      {children}
    </div>
  );
}

// ===============================
// Item
// ===============================
export function SelectItem({
  children,
  value,
  selected = false,
  onSelect = () => {},
  className = "",
}: {
  children: React.ReactNode;
  value: string;
  selected?: boolean;
  onSelect?: (value: string) => void;
  className?: string;
}) {
  return (
    <div
      onClick={() => onSelect(value)}
      className={`flex items-center justify-between cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 ${className}`}
    >
      <span>{children}</span>
      {selected && <CheckIcon className="w-4 h-4" />}
    </div>
  );
}

// ===============================
// Separator
// ===============================
export function SelectSeparator() {
  return <div className="h-px bg-gray-200 my-1"></div>;
}

// ===============================
// Scroll Up Button
// ===============================
export function SelectScrollUpButton() {
  return (
    <div className="flex items-center justify-center py-1 opacity-60">
      <ChevronUpIcon className="w-4 h-4" />
    </div>
  );
}

// ===============================
// Scroll Down Button
// ===============================
export function SelectScrollDownButton() {
  return (
    <div className="flex items-center justify-center py-1 opacity-60">
      <ChevronDownIcon className="w-4 h-4" />
    </div>
  );
}

// ===============================
// Group
// ===============================
export function SelectGroup({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

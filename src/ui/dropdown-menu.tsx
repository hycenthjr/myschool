import * as React from "react";

import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

// Basic DropdownMenu implementation
function DropdownMenu({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`relative ${className || ""}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DropdownMenuTrigger) {
          const el = child as React.ReactElement<any>;
          return React.cloneElement(el, {
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              if (el.props.onClick) el.props.onClick(e);
              setOpen((o) => !o);
            },
            open,
          });
        }
        if (React.isValidElement(child) && child.type === DropdownMenuContent) {
          return open ? child : null;
        }
        return child;
      })}
    </div>
  );
}

// No Portal needed for basic dropdown
function DropdownMenuPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function DropdownMenuTrigger({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { open?: boolean }) {
  return (
    <button type="button" data-slot="dropdown-menu-trigger" {...props}>
      {children}
    </button>
  );
}

function DropdownMenuContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="dropdown-menu-content"
      className={`absolute right-0 mt-2 min-w-[8rem] rounded-md border bg-popover p-1 shadow-md z-50 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

function DropdownMenuGroup({ children }: { children: React.ReactNode }) {
  return <div data-slot="dropdown-menu-group">{children}</div>;
}

function DropdownMenuItem({
  children,
  className,
  onClick,
  variant = "default",
  inset,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "destructive";
  inset?: boolean;
}) {
  return (
    <div
      data-slot="dropdown-menu-item"
      data-variant={variant}
      data-inset={inset}
      className={`relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm select-none ${
        variant === "destructive" ? "text-destructive" : ""
      } ${inset ? "pl-8" : ""} ${className || ""}`}
      tabIndex={0}
      onClick={onClick}
      role="menuitem"
    >
      {children}
    </div>
  );
}

function DropdownMenuCheckboxItem({
  children,
  checked,
  onChange,
  className,
}: {
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}) {
  return (
    <label
      className={`relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm select-none ${
        className || ""
      }`}
      data-slot="dropdown-menu-checkbox-item"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        className="absolute left-2 size-3.5"
      />
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <CheckIcon className="size-4" />}
      </span>
      {children}
    </label>
  );
}

function DropdownMenuRadioGroup({
  children,
  value,
  onChange,
}: {
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div data-slot="dropdown-menu-radio-group">
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          child.type === DropdownMenuRadioItem
        ) {
          const radioValue = (child.props as any).value;
          return React.cloneElement(child as React.ReactElement<any>, {
            checked: radioValue === value,
            onChange,
          });
        }
        return child;
      })}
    </div>
  );
}

function DropdownMenuRadioItem({
  children,
  value,
  checked,
  onChange,
  className,
}: {
  children: React.ReactNode;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}) {
  return (
    <label
      className={`relative flex cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm select-none ${
        className || ""
      }`}
      data-slot="dropdown-menu-radio-item"
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange && onChange(value)}
        className="absolute left-2 size-3.5"
      />
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <CircleIcon className="size-2 fill-current" />}
      </span>
      {children}
    </label>
  );
}

function DropdownMenuLabel({
  children,
  className,
  inset,
}: {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
}) {
  return (
    <div
      data-slot="dropdown-menu-label"
      className={`px-2 py-1.5 text-sm font-medium ${inset ? "pl-8" : ""} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

function DropdownMenuSeparator({ className }: { className?: string }) {
  return (
    <div
      data-slot="dropdown-menu-separator"
      className={`bg-border -mx-1 my-1 h-px ${className || ""}`}
    />
  );
}

function DropdownMenuShortcut({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={`text-muted-foreground ml-auto text-xs tracking-widest ${
        className || ""
      }`}
    >
      {children}
    </span>
  );
}

// Submenus not implemented in basic dropdown
function DropdownMenuSub({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function DropdownMenuSubTrigger({
  children,
  className,
  inset,
}: {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
}) {
  return (
    <div
      data-slot="dropdown-menu-sub-trigger"
      className={`flex items-center rounded-sm px-2 py-1.5 text-sm select-none cursor-pointer ${
        inset ? "pl-8" : ""
      } ${className || ""}`}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </div>
  );
}

function DropdownMenuSubContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="dropdown-menu-sub-content"
      className={`bg-popover text-popover-foreground min-w-[8rem] rounded-md border p-1 shadow-lg z-50 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};

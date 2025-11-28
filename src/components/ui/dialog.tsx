import React from "react";
import { XIcon } from "lucide-react";

// ===============================
// Root
// ===============================
export function Dialog({
  children,
  open = false,
  onOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

const DialogContext = React.createContext<{
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}>({
  open: false,
});

// ===============================
// Trigger
// ===============================
export function DialogTrigger({
  children,
  asChild = false,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const { onOpenChange } = React.useContext(DialogContext);

  const triggerProps = {
    onClick: () => onOpenChange?.(true),
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, triggerProps);
  }

  return <button {...triggerProps}>{children}</button>;
}

// ===============================
// Portal
// ===============================
export function DialogPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// ===============================
// Overlay
// ===============================
export function DialogOverlay({ className = "" }: { className?: string }) {
  const { onOpenChange } = React.useContext(DialogContext);

  return (
    <div
      onClick={() => onOpenChange?.(false)}
      className={`fixed inset-0 bg-black/50 z-50 ${className}`}
    />
  );
}

// ===============================
// Content
// ===============================
export function DialogContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open, onOpenChange } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <DialogPortal>
      <DialogOverlay />

      <div
        className={`fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg shadow-lg p-6 ${className}`}
      >
        {children}

        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute top-4 right-4 opacity-70 hover:opacity-100"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </DialogPortal>
  );
}

// ===============================
// Other components
// ===============================
export function DialogHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mt-4 flex justify-end ${className}`}>{children}</div>;
}

export function DialogTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
}

export function DialogDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
}

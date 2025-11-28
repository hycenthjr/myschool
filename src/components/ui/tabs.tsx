import React, { useState, type ReactNode } from "react";

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  className = "",
  children,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // Inject activeTab and setActiveTab into children
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        activeTab,
        setActiveTab,
      });
    }
    return child;
  });

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {childrenWithProps}
    </div>
  );
};

export const TabsList: React.FC<any> = ({
  className = "",
  children,
  activeTab,
  setActiveTab,
}) => {
  // Clone all children (TabsTrigger) to give them access
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        activeTab,
        setActiveTab,
      });
    }
    return child;
  });

  return (
    <div
      className={`bg-gray-100 text-gray-600 inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex ${className}`}
    >
      {childrenWithProps}
    </div>
  );
};


export function TabsTrigger ({
  value,
  children,
  activeTab,
  setActiveTab,
  className = "",
}: any) {
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      onClick={() => setActiveTab?.(value)}
      className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-3 py-1 text-sm font-medium transition
      ${
        isActive
          ? "bg-white text-black border-gray-300"
          : "text-gray-600 hover:text-black"
      }
      focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  activeTab,
  className = "",
}:any) {
  if (activeTab !== value) return null;
  return <div className={`flex-1 outline-none ${className}`}>{children}</div>;
};

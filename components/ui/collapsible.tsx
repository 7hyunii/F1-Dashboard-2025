"use client";

import * as React from "react";
import { cn } from "../../lib/utils/cn";

type CollapsibleContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(
  null,
);

function useCollapsibleContext() {
  const ctx = React.useContext(CollapsibleContext);
  if (!ctx) {
    throw new Error("Collapsible components must be used within <Collapsible>");
  }
  return ctx;
}

type CollapsibleProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
};

function Collapsible({
  open,
  defaultOpen = false,
  onOpenChange,
  className,
  children,
}: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const currentOpen = isControlled ? open : internalOpen;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const contextValue = React.useMemo(
    () => ({ open: currentOpen, setOpen }),
    [currentOpen, setOpen],
  );

  return (
    <CollapsibleContext.Provider value={contextValue}>
      <div
        data-slot="collapsible"
        data-state={currentOpen ? "open" : "closed"}
        className={cn("relative", className)}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

type CollapsibleTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

function CollapsibleTrigger({
  asChild,
  className,
  onClick,
  onKeyDown,
  children,
  ...props
}: CollapsibleTriggerProps) {
  const ctx = useCollapsibleContext();

  const handleToggle = () => ctx.setOpen(!ctx.open);

  const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = (e) => {
    onKeyDown?.(e as React.KeyboardEvent<HTMLButtonElement>);
    if (e.defaultPrevented) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<
      React.HTMLAttributes<HTMLElement> & { 
        className?: string;
        "data-slot"?: string;
        "data-state"?: string;
      }
    >;

    return React.cloneElement(child, {
      ...props,
      className: cn(child.props.className, className),
      role: child.props.role ?? "button",
      tabIndex: child.props.tabIndex ?? 0,
      "data-slot": "collapsible-trigger",
      "data-state": ctx.open ? "open" : "closed",
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        child.props.onClick?.(e);
        if (e.defaultPrevented) return;
        onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
        if (e.defaultPrevented) return;
        handleToggle();
      },
      onKeyDown: handleKeyDown,
    });
  }

  return (
    <button
      type="button"
      data-slot="collapsible-trigger"
      data-state={ctx.open ? "open" : "closed"}
      className={className}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        handleToggle();
      }}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  );
}

type CollapsibleContentProps = React.HTMLAttributes<HTMLDivElement>;

function CollapsibleContent({ className, children, ...props }: CollapsibleContentProps) {
  const ctx = useCollapsibleContext();

  return (
    <div
      data-slot="collapsible-content"
      data-state={ctx.open ? "open" : "closed"}
      hidden={!ctx.open}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

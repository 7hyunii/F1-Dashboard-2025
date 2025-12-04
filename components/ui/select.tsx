"use client";

import * as React from "react";
import { cn } from "../../lib/utils/cn";

type SelectContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  value?: string;
  onSelect: (value: string, label?: string) => void;
  registerLabel: (value: string, label: string) => void;
  getLabel: (value?: string) => string | undefined;
};

const SelectContext = React.createContext<SelectContextValue | null>(null);

function useSelectContext() {
  const ctx = React.useContext(SelectContext);
  if (!ctx) {
    throw new Error("Select subcomponents must be used within Select");
  }
  return ctx;
}

type SelectProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
};

function Select({ value, defaultValue, onValueChange, className, children }: SelectProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    defaultValue,
  );
  const [labels, setLabels] = React.useState<Record<string, string>>({});
  const containerRef = React.useRef<HTMLDivElement>(null);

  const currentValue = value ?? internalValue;

  const registerLabel = React.useCallback((val: string, label: string) => {
    setLabels((prev) => {
      if (prev[val]) return prev;
      return { ...prev, [val]: label };
    });
  }, []);

  const handleSelect = React.useCallback(
    (val: string, label?: string) => {
      if (value === undefined) {
        setInternalValue(val);
      }
      if (label) {
        setLabels((prev) => ({ ...prev, [val]: label }));
      }
      onValueChange?.(val);
      setOpen(false);
    },
    [onValueChange, value],
  );

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const contextValue: SelectContextValue = React.useMemo(
    () => ({
      open,
      setOpen,
      value: currentValue,
      onSelect: handleSelect,
      registerLabel,
      getLabel: (val?: string) => (val ? labels[val] : undefined),
    }),
    [currentValue, handleSelect, labels, open, registerLabel],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        data-slot="select"
        className={cn("relative inline-block", className)}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
}

type SelectGroupProps = React.HTMLAttributes<HTMLDivElement>;
function SelectGroup({ className, children, ...props }: SelectGroupProps) {
  return (
    <div
      data-slot="select-group"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    >
      {children}
    </div>
  );
}

type SelectValueProps = {
  placeholder?: string;
  className?: string;
};
function SelectValue({ placeholder = "Select an option", className }: SelectValueProps) {
  const ctx = useSelectContext();
  const label = ctx.getLabel(ctx.value) ?? ctx.value ?? placeholder;

  return (
    <span data-slot="select-value" className={cn("truncate", className)}>
      {label}
    </span>
  );
}

type SelectTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "default";
};
function SelectTrigger({
  className,
  size = "default",
  children,
  onClick,
  ...props
}: SelectTriggerProps) {
  const ctx = useSelectContext();

  return (
    <button
      type="button"
      data-slot="select-trigger"
      data-size={size}
      aria-haspopup="listbox"
      aria-expanded={ctx.open}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        ctx.setOpen(!ctx.open);
      }}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type SelectContentProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: "popper" | "item-aligned";
};
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: SelectContentProps) {
  const ctx = useSelectContext();

  return (
    <div
      data-slot="select-content"
      role="listbox"
      data-state={ctx.open ? "open" : "closed"}
      hidden={!ctx.open}
      className={cn(
        "bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper"
          ? "absolute left-0 top-[calc(100%+4px)] w-full"
          : "relative mt-2",
        className,
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
}

type SelectLabelProps = React.HTMLAttributes<HTMLDivElement>;
function SelectLabel({ className, children, ...props }: SelectLabelProps) {
  return (
    <div
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    >
      {children}
    </div>
  );
}

type SelectItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};
function SelectItem({
  className,
  children,
  value,
  onClick,
  ...props
}: SelectItemProps) {
  const ctx = useSelectContext();
  const isSelected = ctx.value === value;
  const textLabel = React.Children.toArray(children)
    .map((child) => (typeof child === "string" ? child : ""))
    .join(" ")
    .trim();

  React.useEffect(() => {
    if (textLabel) ctx.registerLabel(value, textLabel);
  }, [ctx, textLabel, value]);

  return (
    <button
      type="button"
      role="option"
      aria-selected={isSelected}
      data-slot="select-item"
      data-state={isSelected ? "checked" : "unchecked"}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        ctx.onSelect(value, textLabel || undefined);
      }}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        {isSelected ? "*" : null}
      </span>
      <span>{children}</span>
    </button>
  );
}

type SelectSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <div
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="select-scroll-up-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      ^
    </div>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="select-scroll-down-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}
    >
      v
    </div>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};

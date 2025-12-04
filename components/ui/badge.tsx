import * as React from "react";
import { cn } from "../../lib/utils/cn";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const badgeBaseClass =
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden";

const badgeVariantClass: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
  secondary:
    "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
  destructive:
    "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline:
    "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
};

function badgeVariants({
  variant = "default",
  className,
}: {
  variant?: BadgeVariant;
  className?: string;
}) {
  return cn(badgeBaseClass, badgeVariantClass[variant], className);
}

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  asChild?: boolean;
};

type DataSlot = { "data-slot"?: string };

function Badge({
  className,
  variant = "default",
  asChild,
  children,
  ...props
}: BadgeProps) {
  const computedClassName = badgeVariants({ variant, className });

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<
      React.HTMLAttributes<HTMLElement> & DataSlot
    >;

    const mergedProps: React.HTMLAttributes<HTMLElement> & DataSlot = {
      ...(props as React.HTMLAttributes<HTMLElement>),
      className: cn(child.props.className, computedClassName),
      "data-slot": "badge",
    };

    return React.cloneElement(child, mergedProps);
  }

  return (
    <span
      data-slot="badge"
      className={computedClassName}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge, badgeVariants };

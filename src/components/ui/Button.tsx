import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-normal sm:whitespace-nowrap text-center rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-orange-500/20",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-border bg-transparent hover:bg-card hover:text-foreground",
        secondary:
          "bg-card text-foreground hover:bg-card/80 border border-border",
        ghost: "hover:bg-card hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 sm:h-12 px-5 sm:px-6 py-2",
        sm: "min-h-9 sm:h-10 rounded-full px-3.5 sm:px-4 text-xs py-1.5",
        lg: "min-h-12 sm:h-14 rounded-full px-5 sm:px-8 text-sm sm:text-base py-2.5 sm:py-3",
        icon: "h-11 w-11 sm:h-12 sm:w-12 shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

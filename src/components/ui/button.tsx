import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl font-extrabold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[hsla(0,0%,100%,0.06)] text-foreground border border-[hsla(0,0%,100%,0.12)] hover:bg-[hsla(0,0%,100%,0.10)] hover:border-[hsla(0,0%,100%,0.18)] hover:-translate-y-0.5",
        primary:
          "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:scale-[1.01] border-none",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[hsla(0,0%,100%,0.12)] bg-transparent text-foreground hover:bg-[hsla(0,0%,100%,0.06)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-[hsla(0,0%,100%,0.06)] hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-[hsla(0,0%,100%,0.06)] text-foreground border border-[hsla(0,0%,100%,0.12)] hover:bg-[hsla(0,0%,100%,0.10)] hover:border-[hsla(0,0%,100%,0.18)] hover:-translate-y-0.5 w-full justify-center min-h-[54px] text-base lg:w-auto lg:min-h-[48px]",
        heroPrimary: "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:scale-[1.01] border-none w-full justify-center min-h-[54px] text-base lg:w-auto lg:min-h-[48px]",
      },
      size: {
        default: "h-12 px-4 py-3 text-base lg:h-11 lg:px-4 lg:py-2.5 lg:text-sm",
        sm: "h-10 px-3 py-2 text-sm lg:h-9 lg:px-3 lg:text-xs",
        lg: "h-14 px-6 py-4 text-lg lg:h-12 lg:px-5 lg:text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

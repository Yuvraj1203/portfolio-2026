import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-zinc-950 text-white shadow-[0_18px_60px_rgba(14,165,233,.22)] hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
        secondary:
          "border border-zinc-200/70 bg-white/60 text-zinc-950 backdrop-blur-xl hover:-translate-y-0.5 hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:border-cyan-300/40",
        ghost:
          "text-zinc-600 hover:bg-zinc-950/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}

import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            "inline-flex items-center justify-center font-bold transition-all duration-300 ease-out rounded-full",
            {
              "bg-gradient-to-r from-accent-orange to-accent-gold text-background-main hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:-translate-y-0.5 border border-transparent":
                variant === "primary",
              "border border-border text-white hover:border-accent-gold hover:text-accent-gold bg-transparent":
                variant === "secondary",
              "text-text-muted hover:text-white": variant === "ghost",
              "px-5 py-2 text-sm": size === "sm",
              "px-8 py-3 text-base": size === "md",
              "px-10 py-3.5 text-lg": size === "lg",
            },
            className
          )
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

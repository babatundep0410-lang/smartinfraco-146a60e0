import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  hoverable?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow, hoverable = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative glass overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        hoverable && "hover:border-primary/40 hover:-translate-y-1",
        glow && "shadow-[var(--glow-primary)]",
        className
      )}
      {...props}
    />
  )
);
GlassCard.displayName = "GlassCard";
export default GlassCard;

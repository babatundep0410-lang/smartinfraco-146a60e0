import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Eyebrow({
  children,
  className,
  tone = "accent",
}: {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "primary" | "muted";
}) {
  const color =
    tone === "primary" ? "text-primary" : tone === "muted" ? "text-muted-foreground" : "text-secondary";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] font-display",
        color,
        className
      )}
    >
      <span className="h-px w-6 bg-current opacity-70" />
      {children}
    </span>
  );
}

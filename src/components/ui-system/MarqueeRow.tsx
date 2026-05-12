import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MarqueeRow({
  items,
  className,
  speed = "normal",
}: {
  items: ReactNode[];
  className?: string;
  speed?: "normal" | "slow";
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex w-max gap-16 whitespace-nowrap",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        )}
      >
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center shrink-0">
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

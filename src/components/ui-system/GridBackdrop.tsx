import { cn } from "@/lib/utils";

export default function GridBackdrop({
  className,
  variant = "dots",
  fade = true,
}: {
  className?: string;
  variant?: "dots" | "lines";
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        variant === "lines" ? "grid-backdrop" : "",
        fade && "mask-fade-radial",
        className
      )}
      style={
        variant === "dots"
          ? {
              backgroundImage:
                "radial-gradient(hsl(var(--primary) / 0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }
          : undefined
      }
    />
  );
}

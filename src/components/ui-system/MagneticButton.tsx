import { ReactNode, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "accent";
  className?: string;
  children: ReactNode;
  icon?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  to,
  href,
  onClick,
  variant = "primary",
  className,
  children,
  icon = true,
  type = "button",
  disabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : variant === "accent"
      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
      : "border border-hairline text-foreground hover:bg-foreground/5";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn(
        "group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-tight transition-colors",
        "select-none cursor-pointer disabled:opacity-50",
        styles,
        className
      )}
    >
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </motion.div>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="contents">
      {inner}
    </button>
  );
}

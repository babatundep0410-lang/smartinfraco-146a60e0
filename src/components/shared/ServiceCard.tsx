import { LucideIcon, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import GridBackdrop from "@/components/ui-system/GridBackdrop";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceCard({ icon: Icon, title, description, features, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay: index * 0.06 }}
      className="group relative overflow-hidden border border-hairline bg-card transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--glow-primary)]"
    >
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
      <GridBackdrop variant="lines" className="opacity-20" />
      <div className="relative p-7 lg:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-11 h-11 glass flex items-center justify-center">
            <Icon className="w-5 h-5 text-secondary" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-secondary transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <h3 className="font-display text-xl text-foreground leading-tight">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
        {features && features.length > 0 && (
          <ul className="mt-5 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="w-1 h-1 mt-1.5 rounded-full bg-secondary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

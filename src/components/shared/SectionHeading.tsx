import { motion } from "framer-motion";
import Eyebrow from "@/components/ui-system/Eyebrow";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className={`max-w-3xl mb-12 lg:mb-16 ${centered ? "mx-auto text-center" : ""}`}
    >
      {label && <Eyebrow tone="accent">{label}</Eyebrow>}
      <h2
        className={`font-display mt-5 text-display-lg ${
          light ? "text-dark-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base lg:text-lg leading-relaxed ${
            light ? "text-dark-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

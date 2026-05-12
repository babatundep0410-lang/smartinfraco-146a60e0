import { motion } from "framer-motion";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import Eyebrow from "@/components/ui-system/Eyebrow";

interface PageHeroProps {
  title: string;
  description: string;
  bgImage?: string;
  eyebrow?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({ title, description, bgImage, eyebrow }: PageHeroProps) {
  return (
    <section className="relative bg-dark overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-28">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-background" />
      <GridBackdrop variant="lines" className="opacity-50" />
      {/* aurora glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.45), transparent 70%)" }}
      />
      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          {eyebrow && <Eyebrow tone="accent">{eyebrow}</Eyebrow>}
          <h1 className="font-display mt-5 text-display-xl text-dark-foreground">
            {title}
          </h1>
          <p className="mt-6 text-lg text-dark-foreground/70 leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

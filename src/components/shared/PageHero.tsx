import { motion } from "framer-motion";
import Eyebrow from "@/components/ui-system/Eyebrow";
import heroSky from "@/assets/hero-sky.jpg";

interface PageHeroProps {
  title: string;
  description: string;
  bgImage?: string;
  eyebrow?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({ title, description, bgImage, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40 pb-24 lg:pb-32">
      <img
        src={bgImage || heroSky}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {bgImage && <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-background/30" />}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30" />

      <div className="relative container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl mx-auto"
        >
          {eyebrow && <Eyebrow tone="accent">{eyebrow}</Eyebrow>}
          <h1 className="font-display mt-5 text-display-xl text-white">
            {title}
          </h1>
          <p className="mt-6 text-base lg:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

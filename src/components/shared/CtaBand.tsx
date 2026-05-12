import { ReactNode } from "react";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import Eyebrow from "@/components/ui-system/Eyebrow";
import MagneticButton from "@/components/ui-system/MagneticButton";
import { Reveal } from "@/components/ui-system/RevealOnScroll";

interface CtaBandProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CtaBand({
  eyebrow = "Ready when you are",
  title,
  description,
  primaryLabel = "Start a conversation",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-aurora" />
      <GridBackdrop variant="lines" className="opacity-40" />
      <div className="relative container-wide section-padding-sm text-center">
        <Reveal>
          <Eyebrow tone="accent">{eyebrow}</Eyebrow>
          <h2 className="font-display mt-5 text-display-xl text-primary-foreground max-w-3xl mx-auto">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">{description}</p>
          )}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <MagneticButton to={primaryTo} variant="accent">{primaryLabel}</MagneticButton>
            {secondaryLabel && secondaryTo && (
              <MagneticButton to={secondaryTo} variant="ghost">{secondaryLabel}</MagneticButton>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

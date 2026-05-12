import { useState } from "react";
import { Play } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal } from "@/components/ui-system/RevealOnScroll";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const videos = [
  { id: 1, title: "Inside the Tier III Accra Data Centre",     duration: "4:32", category: "Facility Tour" },
  { id: 2, title: "How we lit Ghana's national fibre backbone", duration: "3:15", category: "Network" },
  { id: 3, title: "Sovereign cloud, explained",                  duration: "5:48", category: "Cloud" },
  { id: 4, title: "Behind the SOC: 24/7 threat operations",      duration: "6:21", category: "Security" },
  { id: 5, title: "Connecting rural Ghana — the Ascend story",   duration: "7:04", category: "Impact" },
  { id: 6, title: "The mySmartApp customer experience",          duration: "2:47", category: "Product" },
];

export default function VideosPage() {
  const [active, setActive] = useState(0);
  const featured = videos[active];

  return (
    <Layout>
      <PageHero
        eyebrow="Videos"
        title="See the network in motion."
        description="Facility tours, technical explainers and showcases from the Smart Infraco team."
      />

      <section className="relative section-padding bg-dark overflow-hidden">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Player */}
            <Reveal className="lg:col-span-8">
              <div className="relative aspect-video glass overflow-hidden bg-gradient-aurora">
                <GridBackdrop variant="lines" className="opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-20 h-20 lg:w-24 lg:h-24 glass flex items-center justify-center group"
                    aria-label="Play video"
                  >
                    <Play className="w-7 h-7 lg:w-8 lg:h-8 text-secondary fill-secondary translate-x-0.5" />
                  </motion.button>
                </div>
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.22em] text-dark-foreground/70 flex items-center gap-2">
                  <span className="pulse-dot" /> Now playing
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <Eyebrow tone="accent">{featured.category}</Eyebrow>
                    <h2 className="font-display mt-3 text-2xl lg:text-3xl text-dark-foreground max-w-lg">{featured.title}</h2>
                  </div>
                  <span className="font-display text-sm text-dark-foreground/70 tabular-nums">{featured.duration}</span>
                </div>
              </div>
            </Reveal>

            {/* Rail */}
            <div className="lg:col-span-4">
              <Eyebrow tone="muted" className="text-dark-foreground/50">Up next</Eyebrow>
              <div className="mt-5 max-h-[520px] overflow-y-auto pr-2 space-y-2">
                {videos.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group w-full text-left flex gap-4 p-3 border transition-all duration-300",
                      i === active
                        ? "border-secondary/60 bg-card"
                        : "border-hairline hover:border-secondary/30 hover:bg-card/60"
                    )}
                  >
                    <div className="relative w-28 aspect-video shrink-0 bg-surface-1 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-aurora opacity-60" />
                      <Play className="absolute inset-0 m-auto w-5 h-5 text-secondary fill-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-secondary">{v.category}</div>
                      <div className="font-display text-sm text-dark-foreground mt-1.5 line-clamp-2 leading-tight">{v.title}</div>
                      <div className="text-[11px] text-dark-foreground/55 mt-2 tabular-nums">{v.duration}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

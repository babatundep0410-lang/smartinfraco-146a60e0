import { Eye, Target, Award, Users, FileCheck, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CtaBand from "@/components/shared/CtaBand";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import GlassCard from "@/components/ui-system/GlassCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import aboutHero from "@/assets/about-hero.jpg";
import ghanaMap from "@/assets/ghana-network-map.jpg";

const values = [
  { icon: Eye,    title: "Vision",  description: "To accelerate the growth and transformation of Ghana's telecoms sector, ensuring equal access to robust infrastructure solutions that enable private players to digitalise and monetise their goals." },
  { icon: Target, title: "Mission", description: "To provide an open neutral-access digital infrastructure that facilitates best-in-class voice and data service for all businesses and consumers, accelerating service delivery on 3G/4G networks and making the nation ready for 5G." },
  { icon: Award,  title: "Values",  description: "Access to unparalleled and equitable infrastructure, robust local and global technical support, international standard practices, competitive pricing, and great socio-economic impact." },
];

const promises = [
  "Access to unparalleled and equitable infrastructure",
  "Robust local and global technical support",
  "24/7 customer support",
  "International standard practices",
  "Competitive pricing",
  "Great socio-economic impact",
];

const certs = [
  { icon: FileCheck, title: "Tier III Design", description: "Uptime Institute tier III design standards with technical specifications for resilience across all critical infrastructures." },
  { icon: FileCheck, title: "NCA Licensed",    description: "Licensed under the National Communications Authority of Ghana." },
  { icon: FileCheck, title: "Carrier Neutral", description: "Carrier-neutral facility allowing unrestricted interconnect between carriers and customers for better value, lower latency, and higher resilience." },
];

export default function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Smart Infraco"
        title="Ghana's trusted digital infrastructure partner."
        description="Enabling the robust, effective and world-class infrastructure that powers the nation — and the businesses that depend on it."
        bgImage={aboutHero}
      />

      {/* Editorial overview */}
      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Company overview</Eyebrow>
                <h2 className="font-display mt-5 text-display-lg text-foreground">
                  The commercial wing of NITA — and Ghana's <span className="text-gradient-aurora">digital backbone</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 text-base text-muted-foreground leading-relaxed">
                  The Government of Ghana's 1,010-km Eastern corridor fibre cable was originally built to digitalise the government administration across the nation, and to amplify economic activity in the Eastern side of the country. It however lacked the required technical systems and support infrastructure to make it as effective as possible.
                </p>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  By acting as the commercial wing of NITA, with high-grade systems and support infrastructure, Smart Infraco has enabled the robust, effective and world-class infrastructure that we have today — built with the additional capacity and technical support system to meet government needs and extend it to private enterprises as well.
                </p>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  Ghana's digitalisation progress has driven a rising demand for high-quality, affordable, and equally available internet service. As the commercial wing of NITA, Smart Infraco has the responsibility of ensuring that all public and private enterprises alike have equal access to, and enjoy the full benefit of, the nation's best-of-breed fibre infrastructure.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-aurora opacity-20 blur-2xl" />
                <div className="relative border border-hairline overflow-hidden">
                  <img src={ghanaMap} alt="Ghana network infrastructure map" loading="lazy" width={800} height={1024} className="w-full" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 glass p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">National Footprint</div>
                    <div className="font-display text-base text-foreground tabular-nums">1,010 km · 10 regions</div>
                  </div>
                  <span className="pulse-dot" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="relative section-padding bg-dark overflow-hidden">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Our promise</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
              Your lifeline to enterprise-grade connectivity.
            </h2>
            <p className="mt-5 text-base text-dark-foreground/65 leading-relaxed">
              Created through a seamless digital ecosystem that makes for superior management and operationalisation of your business and services.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {promises.map((p) => (
              <RevealItem key={p} className="bg-dark">
                <div className="flex items-center gap-3 p-6 h-full">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-dark-foreground">{p}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Our purpose</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              Vision, mission & values.
            </h2>
          </Reveal>
          <RevealGroup className="grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <GlassCard className="p-8 lg:p-10 h-full bg-card">
                  <div className="w-11 h-11 glass flex items-center justify-center mb-6">
                    <v.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{v.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative section-padding bg-dark overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-30" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
              The team behind the network.
            </h2>
            <p className="mt-5 text-base text-dark-foreground/65 leading-relaxed">
              Decades of experience in telecommunications, digital infrastructure, and public-private partnerships.
            </p>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
            {["CEO", "CTO", "CFO", "COO"].map((role) => (
              <RevealItem key={role} className="bg-dark">
                <div className="group p-8 transition-colors hover:bg-card">
                  <div className="aspect-square glass mb-5 flex items-center justify-center">
                    <Users className="w-10 h-10 text-dark-foreground/40 group-hover:text-secondary transition-colors duration-500" />
                  </div>
                  <div className="font-display text-base text-dark-foreground">Name Placeholder</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-dark-foreground/55 mt-1">{role}</div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Compliance</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              Certifications & standards.
            </h2>
          </Reveal>
          <RevealGroup className="grid md:grid-cols-3 gap-5">
            {certs.map((c) => (
              <RevealItem key={c.title}>
                <GlassCard className="p-8 h-full bg-card">
                  <c.icon className="w-7 h-7 text-secondary mb-5" />
                  <h3 className="font-display text-lg text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        eyebrow="Partner with us"
        title={<>Let's build the next chapter of <span className="text-gradient-aurora">Ghana's digital story</span>.</>}
        primaryLabel="Get in Touch"
      />

    </Layout>
  );
}

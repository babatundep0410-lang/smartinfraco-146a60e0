import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Network, Server, Cloud, Shield, Globe, Clock,
  Building2, Landmark, Wifi, HardDrive, MonitorCheck, Headphones, Smartphone,
  ArrowUpRight, Activity, Zap, Radio,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import GlassCard from "@/components/ui-system/GlassCard";
import NetworkCanvas from "@/components/ui-system/NetworkCanvas";
import MarqueeRow from "@/components/ui-system/MarqueeRow";
import AnimatedCounter from "@/components/ui-system/AnimatedCounter";
import MagneticButton from "@/components/ui-system/MagneticButton";
import SectionDivider from "@/components/ui-system/SectionDivider";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import appMockup from "@/assets/app-mockup.png";
import heroDatacenter from "@/assets/hero-datacenter.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------------- Data ---------------- */

const services = [
  { icon: Network,      title: "Network Solutions",        description: "Highly reliable, always-available network for critical applications and end-users.", href: "/connectivity", featured: true },
  { icon: Wifi,         title: "Dedicated Internet Access", description: "Carrier-grade DIA with bandwidths up to 100 Gbps.", href: "/connectivity" },
  { icon: Server,       title: "Data Centre Services",      description: "Tier III Accra & Tier II Kumasi — Ghana's most modern facilities.", href: "/data-centres" },
  { icon: Cloud,        title: "Cloud Services",            description: "Hybrid cloud, VPS and managed compute with sovereignty by design.", href: "/cloud-services" },
  { icon: HardDrive,    title: "Storage & Backup",          description: "STaaS and BaaS for resilience, compliance and local data sovereignty.", href: "/cloud-services" },
  { icon: MonitorCheck, title: "Managed IT Services",       description: "End-to-end infrastructure management with 24/7 NOC support.", href: "/cloud-services" },
];

const stats = [
  { value: 1010, suffix: "+",  label: "KM of National Backbone", icon: Network },
  { value: 1500, suffix: "+",  label: "Institutions Served",     icon: Building2 },
  { value: 99.99, decimals: 2, suffix: "%",  label: "Network Availability SLA", icon: Activity },
  { value: 24,   suffix: "/7", label: "NOC & SOC Operations",    icon: Shield },
];

const reasons = [
  { icon: Shield,      title: "Reliability & Security",     description: "Industry-leading capabilities in delivering highly available and secure services." },
  { icon: Globe,       title: "Unrivalled Scale & Reach",   description: "Access to one of the most wide-reaching networks across Ghana." },
  { icon: Headphones,  title: "Single Window Interface",    description: "One provider for cost efficiencies and continental reach." },
  { icon: Clock,       title: "Enterprise-Grade Service",   description: "International-standard management backed by stringent SLAs." },
];

const industries = [
  { icon: Landmark,  title: "Government MDAs" },
  { icon: Building2, title: "Financial Institutions" },
  { icon: Wifi,      title: "Telecom & ISPs" },
  { icon: Globe,     title: "Large Enterprises" },
];

const sectorMarquee = [
  "Government", "Banking", "Telecommunications", "Energy", "Healthcare",
  "Education", "Logistics", "Media", "Manufacturing", "Mining",
];

/* ---------------- Sections ---------------- */

function Hero() {
  return (
    <section className="relative bg-dark overflow-hidden pt-28 lg:pt-32">
      {/* layered backdrops */}
      <img
        src={heroDatacenter}
        alt="Smart Infraco hyperscale data centre interior"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
      <GridBackdrop variant="lines" className="opacity-30" />

      <div className="relative container-bleed pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — narrative */}
          <div className="lg:col-span-7 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
              <Eyebrow tone="accent">Ghana's Digital Backbone</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="font-display mt-6 text-display-2xl text-dark-foreground"
            >
              Infrastructure that{" "}
              <span className="text-gradient-aurora">moves a nation</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="mt-7 text-lg lg:text-xl text-dark-foreground/75 max-w-xl leading-relaxed"
            >
              Secure, scalable national infrastructure for government and enterprise — fibre, data centres, cloud and cybersecurity in one trusted operator.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton to="/connectivity" variant="primary">Explore Solutions</MagneticButton>
              <MagneticButton to="/contact" variant="ghost">Speak to an Engineer</MagneticButton>
            </motion.div>

            {/* meta strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              {[
                { k: "Tier III", v: "Accra Data Centre" },
                { k: "1,010 km", v: "National Fibre Backbone" },
                { k: "100 Gbps", v: "Dedicated Internet Access" },
              ].map((m) => (
                <div key={m.k} className="flex items-baseline gap-2">
                  <span className="font-display text-base font-semibold text-secondary tabular-nums">{m.k}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-dark-foreground/50">{m.v}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — live network panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <GlassCard className="p-5 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="pulse-dot" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/80">Live Network</span>
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Realtime</span>
              </div>

              <div className="relative aspect-[4/3] -mx-1">
                <NetworkCanvas />
              </div>

              <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-hairline">
                {[
                  { icon: Activity, label: "Uptime", value: <><AnimatedCounter to={99.99} decimals={2} />%</> },
                  { icon: Radio,    label: "PoPs lit", value: <><AnimatedCounter to={48} />+</> },
                  { icon: Zap,      label: "Throughput", value: <><AnimatedCounter to={1.2} decimals={1} /> Tbps</> },
                ].map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <m.icon className="w-3.5 h-3.5 text-secondary mb-1.5" />
                    <span className="font-display text-base font-semibold text-foreground leading-none">{m.value}</span>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-1">{m.label}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="relative pb-8 flex justify-center">
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="w-px h-10 bg-gradient-to-b from-secondary/80 to-transparent origin-top"
        />
      </div>

      <SectionDivider />
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="relative bg-dark border-b border-hairline py-10 lg:py-14">
      <div className="container-wide mb-6">
        <Eyebrow tone="muted" className="opacity-80">Trusted across critical sectors</Eyebrow>
      </div>
      <MarqueeRow
        speed="slow"
        items={sectorMarquee.map((label) => (
          <div className="flex items-center gap-3 text-dark-foreground/40 hover:text-secondary transition-colors duration-500">
            <span className="font-display text-2xl lg:text-3xl font-medium tracking-tight">{label}</span>
            <span className="w-1 h-1 rounded-full bg-current opacity-60" />
          </div>
        ))}
      />
    </section>
  );
}

function ServicesBento() {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      <GridBackdrop variant="dots" className="opacity-50" />
      <div className="relative container-wide">
        <div className="grid lg:grid-cols-12 gap-6 mb-14 items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Core Services</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              A unified stack for the modern enterprise.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-base text-muted-foreground max-w-md lg:ml-auto leading-relaxed">
              Every layer engineered to interlock — connectivity, compute, storage and security under a single operator with national reach.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {services.map((s) => (
            <RevealItem
              key={s.title}
              className={
                s.featured ? "md:col-span-2 lg:col-span-4 lg:row-span-2" : "md:col-span-1 lg:col-span-2"
              }
            >
              <Link
                to={s.href}
                className={`group relative h-full block overflow-hidden border border-hairline bg-card transition-all duration-500 ease-out-expo
                  hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--glow-primary)]
                  ${s.featured ? "p-8 lg:p-10 min-h-[320px]" : "p-6 lg:p-7 min-h-[200px]"}`}
              >
                <div className="absolute inset-0 bg-gradient-mesh opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                <GridBackdrop variant="lines" className="opacity-25 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 glass flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-secondary transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className={`font-display mt-auto pt-10 ${s.featured ? "text-3xl lg:text-4xl" : "text-xl"} text-foreground leading-tight`}>
                    {s.title}
                  </h3>
                  <p className={`mt-3 text-sm text-muted-foreground leading-relaxed ${s.featured ? "max-w-md" : ""}`}>
                    {s.description}
                  </p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function NetworkSection() {
  return (
    <section className="relative bg-dark overflow-hidden section-padding">
      <GridBackdrop variant="lines" className="opacity-40" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-30"
           style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.6), transparent 70%)" }} />

      <div className="relative container-wide">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>National Infrastructure</Eyebrow>
              <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
                One network. <br />
                <span className="text-gradient-aurora">Ten regions.</span>
              </h2>
              <p className="mt-6 text-base text-dark-foreground/70 leading-relaxed max-w-md">
                Our backbone reaches from the coast to the northern corridor — fibre, metro rings, data centres and PoPs engineered for sub-millisecond intra-Ghana latency.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { dot: "primary",   label: "National Fibre Backbone", value: "1,010 km" },
                  { dot: "secondary", label: "Metro Rings (Accra · Kumasi)", value: "Dual-path" },
                  { dot: "primary",   label: "Tier III & II Data Centres", value: "2 facilities" },
                  { dot: "secondary", label: "Points of Presence", value: "48+" },
                ].map((row) => (
                  <li key={row.label} className="flex items-center justify-between py-3 border-b border-hairline">
                    <div className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${row.dot === "primary" ? "bg-primary" : "bg-secondary"}`} />
                      <span className="text-sm text-dark-foreground/85">{row.label}</span>
                    </div>
                    <span className="font-display text-sm font-semibold text-dark-foreground tabular-nums">{row.value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MagneticButton to="/connectivity" variant="accent">View Network Coverage</MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative aspect-[5/4] glass p-6 lg:p-8">
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="flex items-center gap-2"><span className="pulse-dot" /> Live topology</span>
                <span>GHA · v2.4</span>
              </div>
              <NetworkCanvas />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="relative bg-background overflow-hidden border-y border-hairline">
      <GridBackdrop variant="dots" className="opacity-40" />
      <div className="relative container-wide py-20 lg:py-24">
        <Reveal className="mb-12">
          <Eyebrow>By the numbers</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:divide-x lg:divide-hairline">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <s.icon className="w-5 h-5 text-secondary mb-4" />
              <div className="font-display text-5xl lg:text-6xl font-medium text-foreground tracking-tight tabular-nums">
                <AnimatedCounter to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <Reveal className="lg:col-span-6">
            <Eyebrow>Why Smart Infraco</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              Strength, resource, capacity — at continental scale.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:pt-4">
            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              The partner of choice for CSPs in Ghana. We combine government-grade security posture with the agility of a modern infrastructure operator.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {reasons.map((r) => (
            <RevealItem key={r.title} className="bg-background">
              <div className="group relative h-full p-8 lg:p-10 transition-colors duration-500 hover:bg-card">
                <div className="w-11 h-11 glass flex items-center justify-center mb-6 group-hover:border-secondary/40 transition-colors duration-500">
                  <r.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">{r.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function IndustriesBlock() {
  return (
    <section className="relative section-padding bg-dark overflow-hidden">
      <GridBackdrop variant="lines" className="opacity-30" />
      <div className="relative container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <Reveal>
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground max-w-xl">
              Trusted by Ghana's most critical sectors.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/industries" className="story-link text-sm text-secondary inline-flex items-center gap-2">
              View all industries <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {industries.map((ind) => (
            <RevealItem key={ind.title} className="bg-dark">
              <div className="group h-full p-8 lg:p-10 flex flex-col items-start gap-6 transition-colors hover:bg-card">
                <ind.icon className="w-7 h-7 text-secondary transition-transform duration-500 group-hover:scale-110" />
                <span className="font-display text-lg font-medium text-dark-foreground">{ind.title}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function PartnersBlock() {
  const partners = [
    { name: "NITA", full: "National Information Technology Agency", description: "Smart Infraco partners with NITA to ensure effective maintenance and commercialisation of the nation's fibre cable in the Eastern corridor." },
    { name: "Ascend Digital Solutions", full: "Digital Reimagined", description: "Our parent company Ascend Digital Solutions Ltd provides rural telephony to 2,016 locations, connecting 3.4 million Ghanaians to basic telephone services." },
  ];
  return (
    <section className="relative section-padding bg-background">
      <div className="container-wide">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Outstanding partnerships</Eyebrow>
          <h2 className="font-display mt-5 text-display-lg text-foreground">
            Built alongside the institutions shaping Ghana's future.
          </h2>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-2 gap-6">
          {partners.map((p) => (
            <RevealItem key={p.name}>
              <GlassCard className="p-8 lg:p-10 h-full bg-card">
                <div className="flex items-center justify-between mb-6">
                  <Eyebrow tone="primary">Partner</Eyebrow>
                  <Shield className="w-4 h-4 text-secondary" />
                </div>
                <h3 className="font-display text-2xl text-foreground">{p.name}</h3>
                <span className="block mt-1 text-xs text-muted-foreground uppercase tracking-[0.18em]">{p.full}</span>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function MobileApp() {
  return (
    <section className="relative section-padding bg-dark overflow-hidden">
      <div
        aria-hidden
        className="absolute right-0 top-0 w-[600px] h-[600px] opacity-50"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.35), transparent 70%)" }}
      />
      <GridBackdrop variant="lines" className="opacity-30" />
      <div className="relative container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <Eyebrow>
              <Smartphone className="w-3.5 h-3.5" /> mySmartApp
            </Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
              Your network, in your pocket.
            </h2>
            <p className="mt-6 text-dark-foreground/70 leading-relaxed max-w-lg">
              Monitor network status, view billing, raise tickets and manage every Smart Infraco service from a single mobile app — engineered for speed and clarity.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "Real-time network status monitoring",
                "View & pay invoices",
                "Raise and track support tickets",
                "Service usage analytics",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-dark-foreground/85 py-2 border-b border-hairline">
                  <span className="w-1 h-1 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center gap-3 px-5 py-3 glass hover:border-secondary/40 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-dark-foreground" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-dark-foreground/60">Download on the</span>
                  <span className="block text-sm font-semibold text-dark-foreground">App Store</span>
                </span>
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center gap-3 px-5 py-3 glass hover:border-secondary/40 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-dark-foreground" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-1.97 1.13-2.5-2.5 2.5-2.5 1.97 1.13zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-dark-foreground/60">Get it on</span>
                  <span className="block text-sm font-semibold text-dark-foreground">Google Play</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <motion.img
              src={appMockup}
              alt="mySmartApp mobile application"
              className="w-72 lg:w-[22rem] drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-aurora" />
      <GridBackdrop variant="lines" className="opacity-40" />
      <div className="relative container-wide section-padding-sm text-center">
        <Reveal>
          <Eyebrow tone="accent">Ready when you are</Eyebrow>
          <h2 className="font-display mt-5 text-display-xl text-primary-foreground max-w-3xl mx-auto">
            Let's engineer your next layer of infrastructure.
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Connect with our team to map out a network, cloud or data centre footprint built for your scale.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <MagneticButton to="/contact" variant="accent">Start a conversation</MagneticButton>
            <MagneticButton to="/about" variant="ghost">About Smart Infraco</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <TrustStrip />
      <ServicesBento />
      <NetworkSection />
      <StatsBand />
      <WhyUs />
      <IndustriesBlock />
      <PartnersBlock />
      <MobileApp />
      <CtaBand />
    </Layout>
  );
}

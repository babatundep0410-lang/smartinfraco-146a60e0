import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Network, Server, Cloud, Shield, Globe, Zap, Activity,
  Building2, Landmark, Wifi, HardDrive, MonitorCheck, Smartphone,
  Sparkles, TrendingUp, Check, Quote, ArrowRight, ArrowUpRight, Star,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Eyebrow from "@/components/ui-system/Eyebrow";
import AnimatedCounter from "@/components/ui-system/AnimatedCounter";
import MagneticButton from "@/components/ui-system/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import heroSky from "@/assets/hero-datacenter.jpg";
import ctaSky from "@/assets/cta-sky.jpg";
import svcNetwork from "@/assets/service-network.jpg";
import svcInternet from "@/assets/service-internet.jpg";
import svcDatacenter from "@/assets/service-datacenter.jpg";
import svcCloud from "@/assets/service-cloud.jpg";
import svcStorage from "@/assets/service-storage.jpg";
import svcManaged from "@/assets/service-managed.jpg";
import whySingleWindow from "@/assets/why-single-window.jpg";
import whyReliability from "@/assets/why-reliability.jpg";
import whyScale from "@/assets/why-scale.jpg";
import whyEnterprise from "@/assets/why-enterprise.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   HERO  (Aeline-style sky + fanned cards)
   ============================================================ */
function Hero() {
  const fanCards = [
    { img: svcNetwork,    label: "National Fibre" },
    { img: svcInternet,   label: "100 Gbps DIA" },
    { img: svcDatacenter, label: "Tier III Accra" },
    { img: svcCloud,      label: "Hybrid Cloud" },
    { img: svcStorage,    label: "Sovereign Storage" },
    { img: svcManaged,    label: "24/7 NOC" },
    { img: svcNetwork,    label: "Metro Rings" },
  ];

  return (
    <section className="relative overflow-hidden h-screen min-h-[640px] flex items-center justify-center pt-20">
      <img src={heroSky} alt="" width={1920} height={1088} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/70" />

      <div className="relative container-wide">
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-display text-display-2xl text-white"
          >
            <span className="block font-semibold">Data centre, cloud,</span>
            <span className="block font-light italic text-white/85">CONNECTIVITY &<br />CYBERSECURITY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="mt-8 text-base lg:text-lg text-white/85 max-w-xl mx-auto leading-relaxed"
          >
            Smart Infraco powers Ghana's digital backbone — secure, scalable
            national infrastructure for government and enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton to="/connectivity" variant="dark">View Solutions</MagneticButton>
            <MagneticButton to="/contact" variant="primary">Get Started</MagneticButton>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LOGO STRIP
   ============================================================ */
function LogoStrip() {
  const sectors = ["Government", "Banking", "Telecoms", "Energy", "Healthcare", "Education", "Logistics", "Mining"];
  return (
    <section className="bg-white py-10 lg:py-12 border-y border-border">
      <div className="container-wide flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-16">
        {sectors.map((s) => (
          <div key={s} className="flex items-center gap-2 text-muted-foreground/70">
            <span className="w-5 h-5 rounded-full border border-muted-foreground/30 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
            </span>
            <span className="text-sm font-medium">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT BENTO
   ============================================================ */
function AboutBento() {
  return (
    <section className="bg-muted/40 section-padding-sm">
      <div className="container-narrow">
        <Reveal className="text-center max-w-3xl mx-auto">
          <Eyebrow tone="muted">About Us</Eyebrow>
          <h2 className="font-display mt-5 text-display-lg text-foreground">
            A national infrastructure partner
            <br />
            dedicated to building{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span className="inline-flex w-9 h-9 rounded-full bg-primary items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="font-semibold">smarter</span>
            </span>
            <br className="hidden sm:block" />
            and{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span className="inline-flex w-9 h-9 rounded-full bg-primary items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="font-light italic">more resilient</span>
            </span>{" "}
            networks.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* blue stat card */}
          <RevealItem className="md:col-span-4">
            <div className="relative h-full rounded-3xl overflow-hidden p-7 text-white min-h-[260px] flex flex-col justify-between"
                 style={{ background: "linear-gradient(160deg, hsl(206 70% 50%), hsl(206 80% 35%))" }}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">Smart Infraco</span>
                <span className="inline-flex w-8 h-8 rounded-full bg-white/20 items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div>
                <div className="font-display text-6xl font-semibold tabular-nums">
                  <AnimatedCounter to={300} suffix="+" />
                </div>
                <p className="mt-3 text-sm text-white/80">
                  Customers served across Ghana — backed by 1,000 km of owned national fibre reaching every region.
                </p>
              </div>
            </div>
          </RevealItem>

          {/* white quote card */}
          <RevealItem className="md:col-span-4">
            <div className="relative h-full rounded-3xl bg-white p-7 min-h-[260px] flex flex-col justify-between border border-border">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">Network availability</div>
                <div className="mt-3 font-display text-5xl font-semibold text-foreground tabular-nums">
                  <AnimatedCounter to={99.99} decimals={2} suffix="%" />
                </div>
              </div>
              <div>
                <div className="flex -space-x-2 mb-3">
                  {["A", "K", "T", "B"].map((c, i) => (
                    <span key={i} className="w-7 h-7 rounded-full border-2 border-white text-[11px] font-semibold flex items-center justify-center text-white"
                          style={{ background: `hsl(${[206, 75, 225, 200][i]} 60% 50%)` }}>{c}</span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  "Smart Infraco completely reshaped how we operate. Resilient, secure and engineered for our scale."
                </p>
              </div>
            </div>
          </RevealItem>

          {/* lime stat card */}
          <RevealItem className="md:col-span-4">
            <div className="relative h-full rounded-3xl bg-primary p-7 min-h-[260px] flex flex-col justify-between text-primary-foreground">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">Backbone</span>
                <Network className="w-4 h-4" />
              </div>
              <div>
                <div className="font-display text-6xl font-semibold tabular-nums">
                  <AnimatedCounter to={1000} suffix="+" /> km
                </div>
                <p className="mt-3 text-sm text-primary-foreground/80">
                  National fibre backbone reaching every region — engineered for sub-millisecond intra-Ghana latency.
                </p>
              </div>
            </div>
          </RevealItem>

          {/* PoPs card */}
          <RevealItem className="md:col-span-6">
            <div className="relative h-full rounded-3xl bg-secondary text-secondary-foreground p-7 flex items-center justify-between gap-6 flex-wrap min-h-[180px]">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-foreground/60">Active connections</div>
                <div className="mt-2 font-display text-4xl lg:text-5xl font-semibold">
                  <AnimatedCounter to={48} suffix="+" /> PoPs
                </div>
                <p className="mt-3 text-sm text-secondary-foreground/70 max-w-sm">
                  Points of presence distributed across Ghana for low-latency access.
                </p>
              </div>
            </div>
          </RevealItem>

          {/* Data centres card */}
          <RevealItem className="md:col-span-6">
            <div className="relative h-full rounded-3xl bg-secondary text-secondary-foreground p-7 flex items-center justify-between gap-6 flex-wrap min-h-[180px]">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-foreground/60">Data centres</div>
                <div className="mt-2 font-display text-4xl lg:text-5xl font-semibold">
                  Two facilities
                </div>
                <p className="mt-3 text-sm text-secondary-foreground/70 max-w-sm">
                  Tier II (Kumasi) &amp; Tier III (Accra) — Ghana's most modern colocation facilities.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary group">
                More about us
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES (3-card)
   ============================================================ */
function ServicesThree() {
  const items = [
    { title: "Connectivity", desc: "National fibre backbone, metro rings and dedicated internet access up to 100 Gbps.", img: svcNetwork, href: "/connectivity", icon: Network },
    { title: "Data Centres", desc: "Tier III Accra and Tier II Kumasi — Ghana's most modern colocation facilities.", img: svcDatacenter, href: "/data-centres", icon: Server },
    { title: "Cloud & Security", desc: "Sovereign hybrid cloud, managed storage, BaaS and a 24/7 SOC.", img: svcCloud, href: "/cloud-services", icon: Cloud },
  ];
  return (
    <section className="bg-muted/40 section-padding-sm">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Eyebrow tone="muted">Services</Eyebrow>
          <h2 className="font-display mt-5 text-display-lg text-foreground">
            Comprehensive infrastructure and intelligent operations.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Whether you're scaling today or building for tomorrow, we help you move faster with confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/contact" variant="primary">Get Started</MagneticButton>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((s) => (
            <RevealItem key={s.title}>
              <Link to={s.href} className="group block h-full rounded-3xl bg-white border border-border p-5 hover:shadow-elevated transition-shadow">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <s.icon className="w-4 h-4" />
                  </span>
                </div>
                <div className="px-2 pt-5 pb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ============================================================
   EXPERTISE GRID (4 mixed feature cards)
   ============================================================ */
function ExpertiseGrid() {
  return (
    <section className="bg-muted/40 section-padding-sm">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Eyebrow tone="muted">Why Smart Infraco</Eyebrow>
          <h2 className="font-display mt-5 text-display-lg text-foreground">
            Strength, resource, capacity — the partner of choice for Enterprises in Ghana.
          </h2>
          <p className="mt-5 text-muted-foreground">
            One trusted infrastructure partner — built for reliability, scale and enterprise performance across the nation.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              img: whySingleWindow,
              title: "A single window interface",
              desc: "One provider, one contract, one portal — helping you gain cost efficiencies and extended reach across the continent.",
            },
            {
              img: whyReliability,
              title: "Reliability and security",
              desc: "Resilient, redundant and secure infrastructure — engineered to keep your services online and your data protected, 24/7.",
            },
            {
              img: whyScale,
              title: "Unrivalled scale and network reach",
              desc: "Owned national fibre, towers and data centres — extending your reach into every region of Ghana and beyond.",
            },
            {
              img: whyEnterprise,
              title: "Enterprise-grade services",
              desc: "Backed by strict SLAs, 24/7 NOC support and a dedicated account team — the standard of service enterprises and CSPs demand.",
            },
          ].map((c) => (
            <RevealItem key={c.title}>
              <div className="group rounded-3xl bg-white border border-border p-5 lg:p-6 h-full hover:shadow-elevated transition-shadow">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={896}
                    height={672}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 pt-6 pb-2">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ============================================================
   PRICING TIERS
   ============================================================ */
function IndustriesWeServe() {
  const industries = [
    {
      name: "Government & Public Sector",
      icon: Landmark,
      blurb: "Powering Ghana's digital agenda with sovereign, secure infrastructure for ministries, agencies and e-government platforms.",
    },
    {
      name: "Telecom & ISPs",
      icon: Wifi,
      blurb: "Wholesale fibre, dark fibre, IP transit and tower co-location — the backbone behind the country's carriers and service providers.",
      highlighted: true,
    },
    {
      name: "Financial Services",
      icon: Building2,
      blurb: "Low-latency connectivity, secure data centres and resilient links for banks, fintechs and payment networks.",
    },
    {
      name: "Energy & Utilities",
      icon: Zap,
      blurb: "Mission-critical fibre, SCADA-grade links and remote-site connectivity to keep generation, transmission and distribution online.",
    },
    {
      name: "Enterprise & SMEs",
      icon: Server,
      blurb: "Dedicated internet, cloud and managed services tailored to growing Ghanaian businesses across every sector.",
    },
    {
      name: "Education & Health",
      icon: Globe,
      blurb: "High-capacity connectivity and cloud services that bring universities, schools and hospitals into the digital era.",
    },
  ];

  return (
    <section className="bg-muted/40 section-padding-sm">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Eyebrow tone="muted">Industries we serve</Eyebrow>
          <h2 className="font-display mt-5 text-display-lg text-foreground">
            Trusted infrastructure for every sector driving Ghana forward.
          </h2>
          <p className="mt-5 text-muted-foreground">
            From government and telecoms to banking, energy and education — we deliver the connectivity and cloud foundations that critical industries rely on.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/industries" variant="primary">Explore Industries</MagneticButton>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <RevealItem key={ind.name}>
              <div
                className={`group relative h-full rounded-3xl p-7 lg:p-8 border transition-shadow hover:shadow-elevated ${
                  ind.highlighted
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-white border-border text-foreground"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                    ind.highlighted ? "bg-secondary text-primary" : "bg-secondary text-primary"
                  }`}
                >
                  <ind.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold">{ind.name}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    ind.highlighted ? "text-primary-foreground/85" : "text-muted-foreground"
                  }`}
                >
                  {ind.blurb}
                </p>
                <Link
                  to="/industries"
                  className={`mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                    ind.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  Learn more
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials() {
  const quotes = [
    { name: "Kwame Mensah", role: "Director, MDA Ghana", img: testimonial1, quote: "They brought clarity to complex problems, breaking down barriers and delivering innovative solutions." },
    { name: "Ama Boateng", role: "Head of IT, National Bank", img: testimonial2, quote: "Their insight resolved difficult hurdles, opening new paths and creating highly effective strategies." },
    { name: "Kojo Asare", role: "CTO, Telecom Provider", img: testimonial3, quote: "We found focus for tricky requirements, cutting through noise and providing truly advanced responses." },
    { name: "Akosua Owusu", role: "COO, Energy Sector", img: testimonial4, quote: "They gave a simple path to fix capability, removing all delays while building fresh brilliant projects." },
  ];
  return (
    <section className="bg-muted/40 section-padding-sm">
      <div className="container-wide">
        <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <Eyebrow tone="muted">Testimonials</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">What they say about us</h2>
            <p className="mt-3 text-muted-foreground max-w-xl text-sm">
              Here's what they shared about their experience working with our team.
            </p>
          </div>
          <div className="flex gap-2">
            <button aria-label="prev" className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:bg-muted transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button aria-label="next" className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:bg-muted transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {quotes.map((q, i) => (
            <RevealItem key={i}>
              <div className="rounded-3xl bg-white border border-border overflow-hidden h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={q.img}
                    alt={q.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <Quote className="w-5 h-5 text-primary mb-3" />
                  <p className="text-sm text-foreground leading-relaxed">"{q.quote}"</p>
                  <p className="mt-4 font-display text-sm font-semibold text-foreground">{q.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{q.role}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ============================================================
   BLOG STRIP
   ============================================================ */
function BlogStrip() {
  const posts = [
    { title: "Turning data into strategy: the power of analytics", img: svcManaged, href: "/articles" },
    { title: "5 ways infrastructure can streamline operations",   img: svcCloud,   href: "/articles" },
    { title: "Human × Machine: finding the perfect balance",      img: svcStorage, href: "/articles" },
  ];
  return (
    <section className="bg-muted/40 pb-16 lg:pb-20">
      <div className="container-wide">
        <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <Eyebrow tone="muted">Blog &amp; Articles</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">Latest insights and trends</h2>
            <p className="mt-3 text-muted-foreground max-w-xl text-sm">
              Whether you're optimising today or building for tomorrow, we help you move faster with confidence.
            </p>
          </div>
          <Link to="/articles" className="inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] bg-secondary text-secondary-foreground rounded-full">
            View all
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <RevealItem key={p.title}>
              <Link to={p.href} className="group block rounded-3xl overflow-hidden relative aspect-[4/3]">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg lg:text-xl font-semibold text-white leading-tight">{p.title}</h3>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ============================================================
   CTA SKY PANEL
   ============================================================ */
function CtaPanel() {
  return (
    <section className="pb-16 lg:pb-24 bg-muted/40">
      <div className="w-full">
        <Reveal>
          <div className="relative overflow-hidden p-10 lg:p-16 min-h-[300px] lg:min-h-[360px]">
            <img src={ctaSky} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
            <div className="container-wide relative">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">Trusted by 300+ customers</span>
                  <div className="flex -space-x-1.5">
                    {["A", "K", "T"].map((c, i) => (
                      <span key={i} className="w-6 h-6 rounded-full border-2 border-white text-[10px] font-semibold flex items-center justify-center text-white"
                            style={{ background: `hsl(${[206, 75, 225][i]} 60% 50%)` }}>{c}</span>
                    ))}
                  </div>
                </div>
                <h2 className="font-display text-display-lg text-foreground">
                  <span className="block font-semibold">We combine national reach</span>
                  <span className="block font-light italic">with intelligent infrastructure.</span>
                </h2>
                <p className="mt-5 text-sm lg:text-base text-foreground/75 max-w-md">
                  Our consultancy team brings deep network engineering, security and operations expertise — designed to support your scale.
                </p>
                <div className="mt-7">
                  <MagneticButton to="/contact" variant="primary">Get Started</MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <LogoStrip />
      <AboutBento />
      <ServicesThree />
      <ExpertiseGrid />
      <IndustriesWeServe />
      <Testimonials />
      <BlogStrip />
      <CtaPanel />
    </Layout>
  );
}

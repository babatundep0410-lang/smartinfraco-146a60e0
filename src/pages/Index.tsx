import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network, Server, Cloud, Shield, Globe, Clock,
  Building2, Landmark, Wifi, HardDrive, MonitorCheck, Headphones, Smartphone,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import StatCard from "@/components/shared/StatCard";
import heroBg from "@/assets/hero-bg.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import appMockup from "@/assets/app-mockup.png";

const heroSlides = [
  {
    image: heroBg,
    title: <>Enterprise-Grade <span className="text-gradient">Smart Infrastructure</span> Solutions</>,
    description: "Transforming the state of play in digital technologies. Secure. Scalable. National infrastructure for government and enterprise.",
  },
  {
    image: heroSlide2,
    title: <>Connecting Ghana with <span className="text-gradient">National Fibre</span> Backbone</>,
    description: "Over 1,010 km of fibre optic backbone connecting communities, businesses and government institutions across Ghana.",
  },
  {
    image: heroSlide3,
    title: <>World-Class <span className="text-gradient">Data Centre</span> Services</>,
    description: "Tier III certified facilities in Accra delivering carrier-neutral colocation, cloud and managed services.",
  },
];

const services = [
  { icon: Network, title: "Network Solutions", description: "Highly reliable, always available network solutions and support for your critical applications and end-users." },
  { icon: Wifi, title: "Dedicated Internet Access", description: "Plug into a reliable and dedicated connection to support your business-critical applications and large numbers of concurrent users, with bandwidths up to 100 Gbps." },
  { icon: Server, title: "Data Centre Services", description: "All-in-one, robust, reliable and secure data centre solutions. The largest modern facility of its kind in Ghana." },
  { icon: Cloud, title: "Cloud Services", description: "Get enhanced scalability, simplicity and security for your critical applications and data with our cloud services." },
  { icon: HardDrive, title: "Storage & Backup", description: "Enterprise-grade STaaS and BaaS for data resilience, regulatory compliance, and local data sovereignty." },
  { icon: MonitorCheck, title: "Managed IT Services", description: "End-to-end infrastructure management, monitoring, and 24/7 NOC support for your IT environment." },
];

const stats = [
  { value: "1,010+", label: "KM National Backbone" },
  { value: "1,500+", label: "Institutions Served" },
  { value: "Tier III", label: "Data Centre – Accra" },
  { value: "Tier II", label: "Data Centre – Kumasi" },
];

const reasons = [
  { icon: Shield, title: "Reliability & Security", description: "Industry-leading capabilities in delivering highly available and secure services." },
  { icon: Globe, title: "Unrivalled Scale & Reach", description: "Access to one of the most wide-reaching networks across Ghana." },
  { icon: Headphones, title: "A Single Window Interface", description: "A single provider who helps you gain cost efficiencies and extended reach across the continent." },
  { icon: Clock, title: "Enterprise-Grade Services", description: "International-standard management and support services backed by stringent SLAs." },
];

const industries = [
  { icon: Landmark, title: "Government MDAs" },
  { icon: Building2, title: "Financial Institutions" },
  { icon: Wifi, title: "Telecom & ISPs" },
  { icon: Globe, title: "Large Enterprises" },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative bg-dark overflow-hidden min-h-[90vh] flex items-center">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={slide.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          width={1920}
          height={1080}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/60" />
      <div className="relative container-wide w-full py-24 lg:py-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-foreground leading-tight">
              {slide.title}
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-dark-foreground/70 leading-relaxed max-w-xl">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/connectivity"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors bg-secondary"
              >
                Explore Our Solutions
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold border border-dark-foreground/20 text-dark-foreground hover:bg-dark-foreground/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 transition-all ${i === current ? "bg-primary w-8" : "bg-dark-foreground/30 hover:bg-dark-foreground/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats */}
      <section className="bg-dark border-t border-dark-foreground/10">
        <div className="container-wide py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="About Us"
            title="A High-Tech Digital Solutions & Support Services Company"
            description="Ghana is flying the digital banner. As a trusted service provider, Smart Infraco has access to the Government of Ghana's robust, effective and world-class IT infrastructure and information super highway, and it brings the strength, resources and capacity to change the face of digitalisation in Ghana."
          />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeading
            label="Core Services"
            title="Delivering to Industry Needs"
            description="Secure, scalable infrastructure for fast-tracking digital transformation in key industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark">
        <div className="container-wide">
          <SectionHeading
            label="Why Smart Infraco"
            title="Strength, Resource, Capacity"
            description="The partner of choice for CSPs in Ghana"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-dark-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-dark-foreground/60">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Industries We Serve"
            title="Trusted by Ghana's Most Critical Sectors"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 p-8 border border-border bg-card hover:border-primary/20 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <ind.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-foreground">{ind.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading
            label="Our Partners"
            title="Outstanding Partnerships"
            description="Backed by strong institutional partnerships driving Ghana's digital transformation."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "NITA",
                full: "National Information Technology Agency",
                description: "Smart Infraco partners with NITA to ensure effective maintenance and commercialisation of the nation's fibre cable in the Eastern corridor.",
              },
              {
                name: "Ascend Digital Solutions",
                full: "Digital Reimagined",
                description: "Our parent company Ascend Digital Solutions Ltd provides rural telephony to 2,016 locations, connecting 3.4 million Ghanaians to basic telephone services.",
              },
            ].map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative bg-card border border-border p-8 hover:border-primary/20 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/15 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{partner.name}</h3>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{partner.full}</span>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Download */}
      <section className="section-padding bg-dark overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                <Smartphone className="w-4 h-4" />
                mySmartApp
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-foreground mb-4">
                Manage Your Services on the Go
              </h2>
              <p className="text-dark-foreground/70 leading-relaxed mb-6 max-w-lg">
                Download the mySmartApp to monitor your network status, view billing, raise support tickets, and manage your Smart Infraco services — all from your mobile device.
              </p>
              <ul className="space-y-3 mb-8">
                {["Real-time network status monitoring", "View & pay invoices", "Raise and track support tickets", "Service usage analytics"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-dark-foreground/80">
                    <div className="w-5 h-5 bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-dark-foreground/10 border border-dark-foreground/15 hover:bg-dark-foreground/15 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-dark-foreground" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] text-dark-foreground/60 leading-none">Download on the</div>
                    <div className="text-sm font-semibold text-dark-foreground leading-tight">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-dark-foreground/10 border border-dark-foreground/15 hover:bg-dark-foreground/15 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-dark-foreground" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-1.97 1.13-2.5-2.5 2.5-2.5 1.97 1.13zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] text-dark-foreground/60 leading-none">Get it on</div>
                    <div className="text-sm font-semibold text-dark-foreground leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={appMockup}
                alt="mySmartApp mobile application interface"
                className="w-72 lg:w-80 drop-shadow-2xl"
                width={800}
                height={1024}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-brand section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Connect with our team to discuss how Smart Infraco can power your organisation's digital transformation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold bg-dark text-dark-foreground hover:bg-dark/90 transition-colors"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

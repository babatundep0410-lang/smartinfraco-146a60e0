import {
  Server, Shield, Thermometer, Flame, Eye, Zap,
  HardDrive, Network, Building, Globe, MonitorCheck, Lock, Database,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CtaBand from "@/components/shared/CtaBand";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import GlassCard from "@/components/ui-system/GlassCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import dcBg from "@/assets/datacenter-bg.jpg";

const features = [
  { icon: Zap,         label: "Redundant Power",   desc: "Independent dual power distribution with redundant clean power intake and rack power distribution system." },
  { icon: Thermometer, label: "N+1 Cooling",       desc: "N+1 cooling infrastructure with precision efficient rack cooling solutions." },
  { icon: Flame,       label: "Fire Suppression",  desc: "State-of-the-art fire detection and suppression system." },
  { icon: Shield,      label: "Physical Security", desc: "Four layers of physical security with top-tier access controls to racks." },
  { icon: Eye,         label: "24/7 Monitoring",   desc: "Round-the-clock NOC monitoring with quick-access to client's co-located infrastructure on request." },
  { icon: Network,     label: "Carrier Neutral",   desc: "Carrier-neutral facility allowing unrestricted interconnect between carriers and customers." },
];

const tiers = [
  {
    name: "Tier III · Accra",
    badge: "Flagship",
    description: "Our primary data centre is a fully operational carrier-neutral tier III designed and constructed facility and it provides unrestricted interconnect between carriers and customers. The facility was designed with uptime tier III design standards and constructed in line with technical specifications to provide resilience across all of its critical infrastructures. Currently the largest modern facility of its kind in Ghana.",
    specs: ["Tier III Design Standard", "Carrier Neutral", "Earthquake-Resistant (1m Elevated)", "Dual Power Distribution", "N+1 Cooling", "4 Layers Physical Security"],
  },
  {
    name: "Tier II · Kumasi",
    badge: "Regional",
    description: "Our Kumasi facility provides redundant capacity for critical infrastructure components, delivering reliable hosting for regional operations and disaster recovery scenarios. Connected via our national fibre backbone for full redundancy.",
    specs: ["Redundant Components", "Regional Hub", "DR Capable", "Fibre Connected", "N+1 Redundancy"],
  },
];

const dcServices = [
  { icon: Server,       title: "Rack Colocation",            description: "Premium rack hosting and colocation with resilient physical security, redundant network, power, and cooling components. Quick and easy provisioning with powered servers and easy-to-scale storage." },
  { icon: HardDrive,    title: "Virtual Private Server",     description: "Multi-tenant cloud hosting where high-performance physical servers are virtualised, offering higher levels of performance, flexibility, and control in a virtual environment." },
  { icon: Globe,        title: "Web Hosting",                description: "Dedicated website hosting on a cost sharing basis. Shared WHM hosting control panel with flexible cPanel, reliable 24x7 customer support, and 99.9% guaranteed uptime." },
  { icon: Database,     title: "Domain Registration",        description: "NITA is the authoritative registrar for the gov.gh domain space. We help you acquire a domain name — gov.gh domains are available at no cost to eligible government institutions." },
  { icon: HardDrive,    title: "Storage as a Service (STaaS)", description: "Enable your organisation to use our data centre and cloud storage resources. More cost-efficient than building private storage infrastructure, especially for storing data locally in Ghana." },
  { icon: MonitorCheck, title: "Monitoring as a Service (MaaS)", description: "24×7 monitoring of various levels of IT assets with proactive and reactive measures, including early detection alerts against cyber threats, vulnerabilities detection, and resource utilisation management." },
  { icon: Database,     title: "Backup as a Service (BaaS)", description: "Offsite data storage through regular data transfer from on-premises to data centre. Protect sensitive government, business, or personal data from loss associated with user error, hacking, or disasters." },
  { icon: Lock,         title: "Security Services",          description: "Multi-layered security including VPS audit & hardening, IPS/IDS protections, web application vulnerability assessments, SIEM tools, and gateway anti-virus security services with deep packet inspection." },
];

export default function DataCentresPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Data Centres"
        title="Data Centre Solutions"
        description="All-in-one, robust, reliable and secure data centre solutions. Purpose-built facilities in Accra and Kumasi engineered for maximum uptime, security, and scalability."
        bgImage={dcBg}
      />

      {/* Tiers */}
      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Our Facilities</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              Two strategic locations. <span className="text-gradient-aurora">Continental reach.</span>
            </h2>
          </Reveal>

          <RevealGroup className="grid lg:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <RevealItem key={tier.name}>
                <GlassCard className="p-8 lg:p-10 h-full bg-card">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 glass flex items-center justify-center">
                        <Building className="w-5 h-5 text-secondary" />
                      </div>
                      <Eyebrow tone="primary">{tier.badge}</Eyebrow>
                    </div>
                  </div>
                  <h3 className="font-display text-3xl text-foreground">{tier.name}</h3>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {tier.specs.map((s) => (
                      <span key={s} className="text-[11px] font-medium px-3 py-1.5 border border-hairline text-foreground/85 hover:border-secondary/40 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Features */}
      <section className="relative section-padding bg-dark overflow-hidden">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Facility Features</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
              Engineered for resilience.
            </h2>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {features.map((f) => (
              <RevealItem key={f.label} className="bg-dark">
                <div className="group p-7 lg:p-8 h-full transition-colors hover:bg-card">
                  <div className="w-11 h-11 glass flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-base text-dark-foreground">{f.label}</h3>
                  <p className="mt-2 text-sm text-dark-foreground/65 leading-relaxed">{f.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* DC Services */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Services</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              Complete data centre service stack.
            </h2>
            <p className="mt-5 text-base text-muted-foreground max-w-xl leading-relaxed">
              From colocation to security services, we deliver the full spectrum of data centre solutions under one roof.
            </p>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
            {dcServices.map((s) => (
              <RevealItem key={s.title} className="bg-background">
                <div className="group h-full p-6 lg:p-7 transition-colors hover:bg-card">
                  <div className="w-10 h-10 glass flex items-center justify-center mb-5">
                    <s.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-sm text-foreground">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        eyebrow="Step inside"
        title={<>Tour our <span className="text-gradient-aurora">Tier III</span> facility.</>}
        description="Schedule a visit to see our Accra data centre in person and meet the engineering team."
        primaryLabel="Book a Tour"
        secondaryLabel="Explore Cloud"
        secondaryTo="/cloud-services"
      />
    </Layout>
  );
}

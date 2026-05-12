import {
  Server, Shield, Thermometer, Flame, Eye, Zap,
  HardDrive, Network, Building, Globe, MonitorCheck, Lock, Database,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import dcBg from "@/assets/datacenter-bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  { icon: Zap, label: "Redundant Power", desc: "Independent dual power distribution with redundant clean power intake and rack power distribution system." },
  { icon: Thermometer, label: "N+1 Cooling", desc: "N+1 cooling infrastructure with precision efficient rack cooling solutions." },
  { icon: Flame, label: "Fire Suppression", desc: "State-of-the-art fire detection and suppression system." },
  { icon: Shield, label: "Physical Security", desc: "Four layers of physical security with top-tier access controls to racks." },
  { icon: Eye, label: "24/7 Monitoring", desc: "Round-the-clock NOC monitoring with quick-access to client's co-located infrastructure on request." },
  { icon: Network, label: "Carrier Neutral", desc: "Carrier-neutral facility allowing unrestricted interconnect between carriers and customers." },
];

const tiers = [
  {
    name: "Tier III – Accra",
    description: "Our primary data centre is a fully operational carrier-neutral tier III designed and constructed facility and it provides unrestricted interconnect between carriers and customers. The facility was designed with uptime tier III design standards and constructed in line with technical specifications to provide resilience across all of its critical infrastructures. Currently the largest modern facility of its kind in Ghana.",
    specs: ["Tier III Design Standard", "Carrier Neutral", "Earthquake-Resistant (1m Elevated)", "Dual Power Distribution", "N+1 Cooling", "4 Layers Physical Security"],
  },
  {
    name: "Tier II – Kumasi",
    description: "Our Kumasi facility provides redundant capacity for critical infrastructure components, delivering reliable hosting for regional operations and disaster recovery scenarios. Connected via our national fibre backbone for full redundancy.",
    specs: ["Redundant Components", "Regional Hub", "DR Capable", "Fibre Connected", "N+1 Redundancy"],
  },
];

const dcServices = [
  { icon: Server, title: "Rack Colocation", description: "Premium rack hosting and colocation with resilient physical security, redundant network, power, and cooling components. Quick and easy provisioning with powered servers and easy-to-scale storage." },
  { icon: HardDrive, title: "Virtual Private Server", description: "Multi-tenant cloud hosting where high-performance physical servers are virtualised, offering higher levels of performance, flexibility, and control in a virtual environment." },
  { icon: Globe, title: "Web Hosting", description: "Dedicated website hosting on a cost sharing basis. Shared WHM hosting control panel with flexible cPanel, reliable 24x7 customer support, and 99.9% guaranteed uptime." },
  { icon: Database, title: "Domain Registration", description: "NITA is the authoritative registrar for the gov.gh domain space. We help you acquire a domain name — gov.gh domains are available at no cost to eligible government institutions." },
  { icon: HardDrive, title: "Storage as a Service (STaaS)", description: "Enable your organisation to use our data centre and cloud storage resources. More cost-efficient than building private storage infrastructure, especially for storing data locally in Ghana." },
  { icon: MonitorCheck, title: "Monitoring as a Service (MaaS)", description: "24×7 monitoring of various levels of IT assets with proactive and reactive measures, including early detection alerts against cyber threats, vulnerabilities detection, and resource utilisation management." },
  { icon: Database, title: "Backup as a Service (BaaS)", description: "Offsite data storage through regular data transfer from on-premises to data centre. Protect sensitive government, business, or personal data from loss associated with user error, hacking, or disasters." },
  { icon: Lock, title: "Security Services", description: "Multi-layered security including VPS audit & hardening, IPS/IDS protections, web application vulnerability assessments, SIEM tools, and gateway anti-virus security services with deep packet inspection." },
];

export default function DataCentresPage() {
  return (
    <Layout>
      <PageHero
        title="Data Centre Solutions"
        description="All-in-one, robust, reliable and secure data centre solutions. Purpose-built facilities in Accra and Kumasi engineered for maximum uptime, security, and scalability."
        bgImage={dcBg}
      />

      {/* Tiers */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading label="Our Facilities" title="Two Strategic Locations" />
          <div className="grid lg:grid-cols-2 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-border bg-card p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tier.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tier.specs.map((s) => (
                    <span key={s} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-dark">
        <div className="container-wide">
          <SectionHeading label="Facility Features" title="Engineered for Resilience" light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 border border-dark-foreground/10 bg-dark-foreground/5"
              >
                <f.icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-dark-foreground mb-1">{f.label}</h3>
                <p className="text-sm text-dark-foreground/60">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DC Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Services"
            title="Complete Data Centre Service Stack"
            description="From colocation to security services, we deliver the full spectrum of data centre solutions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dcServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 border border-border bg-card"
              >
                <s.icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-brand section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Tour Our Facilities</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Schedule a visit to see our Tier III data centre in Accra.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold bg-dark text-dark-foreground hover:bg-dark/90 transition-colors">
            Book a Tour
          </Link>
        </div>
      </section>
    </Layout>
  );
}

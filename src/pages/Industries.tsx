import {
  Landmark, Building2, Wifi, Rocket, Globe,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import industriesHero from "@/assets/industries-hero.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Landmark,
    title: "Government",
    description: "Smart Infraco partners with NITA to ensure effective maintenance and commercialisation of the nation's fibre cable. We connect government ministries, departments, and agencies with secure, high-availability infrastructure enabling e-government services, inter-agency communication, and citizen service delivery at scale.",
    capabilities: ["E-Government Connectivity", "Secure Data Hosting", "National Backbone Access", "Gov.gh Domain Registration", "Disaster Recovery"],
  },
  {
    icon: Building2,
    title: "Financial Services",
    description: "Banks, insurance companies, and fintech firms rely on our low-latency, high-security infrastructure for transaction processing, data hosting, and regulatory compliance. Our carrier-neutral data centre enables direct interconnection for maximum performance.",
    capabilities: ["Low-Latency Connectivity", "Secure Colocation", "Multi-Site MPLS", "Data Sovereignty", "24/7 Monitoring"],
  },
  {
    icon: Wifi,
    title: "Telecom & ISPs",
    description: "We provide wholesale capacity, dark fibre, and interconnection services to licensed operators and internet service providers across Ghana. With direct connection to all 5 undersea cables serving the South Atlantic Coast of Africa.",
    capabilities: ["Wholesale Bandwidth", "Dark Fibre Leasing", "Carrier Peering", "Infrastructure Sharing", "Undersea Cable Access"],
  },
  {
    icon: Rocket,
    title: "SMEs & Startups",
    description: "Scalable cloud hosting, VPS, and managed services that grow with your business — without the overhead of building your own infrastructure. Our parent company Ascend Digital Solutions Ltd provides rural telephony to 2,016 locations, connecting 3.4 million Ghanaians.",
    capabilities: ["Scalable VPS", "Cloud Hosting", "Web Hosting", "Domain Registration", "Managed IT Support"],
  },
  {
    icon: Globe,
    title: "Large Enterprises",
    description: "Multi-site enterprises benefit from our MPLS networks, dedicated internet access, and hybrid cloud solutions designed for complex, distributed operations. Our open neutral-access digital infrastructure facilitates best-in-class voice and data service.",
    capabilities: ["MPLS Networks", "Dedicated Internet", "Hybrid Cloud", "Managed WAN", "Storage as a Service"],
  },
];

export default function IndustriesPage() {
  return (
    <Layout>
      <PageHero
        title="Industries We Serve"
        description="Secure, scalable infrastructure for fast-tracking digital transformation in key industries across Ghana."
        bgImage={industriesHero}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Sectors"
            title="Delivering to Industry Needs"
            description="Tailored solutions built on a common, carrier-grade platform."
          />
          <div className="space-y-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid lg:grid-cols-3 gap-6 p-8 border border-border bg-card"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <ind.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{ind.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 content-start">
                  {ind.capabilities.map((c) => (
                    <span key={c} className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-brand section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Find the Right Solution for Your Industry</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our sector specialists can recommend the optimal infrastructure stack for your organisation.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold bg-dark text-dark-foreground hover:bg-dark/90 transition-colors">
            Speak to a Specialist
          </Link>
        </div>
      </section>
    </Layout>
  );
}

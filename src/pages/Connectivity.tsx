import { Network, Globe, Zap, ArrowRight, Radio, Cable } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import connectivityHero from "@/assets/connectivity-hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Zap,
    title: "Dedicated Internet",
    description: "Plug into a reliable and dedicated connection to support your business-critical applications and large numbers of concurrent users. We offer bandwidths up to 100 Gbps delivered over our IP/MPLS network with high network resilience. The service comes with 24×7 support and monitoring with static IP options available.",
    features: ["Up to 100 Gbps bandwidth delivered over IP/MPLS", "High resiliency", "Robust, simplified, and clearly defined SLAs", "Superior speeds and uptime", "Connections to major providers and carriers"],
  },
  {
    icon: ArrowRight,
    title: "MPLS L2 VPN",
    description: "Enterprises choose MPLS VPN as the preferred solution for inter-office connectivity, due to its capability to connect users that are geographically dispersed to the cloud privately and securely. The layer 2 version is designed to provide highly secure and dedicated site-to-site and site-to-multi-site connectivity.",
    features: ["Seamless transfer of large files or data sets", "Enables sensitive data exchange", "Maximised network access, security, and scalability"],
  },
  {
    icon: Network,
    title: "MPLS L3 VPN",
    description: "Connect multiple locations together while converging voice, video, and data onto a single IP-based network. Simplify your WAN routing by peering with any of our Provider Edge (PE) routers. Our high-performing VPN architecture can scale to thousands of customer sites.",
    features: ["Multi-site connections", "High QoS for real-time, business-critical applications", "Simplified network management", "Reduced opex and high scalability"],
  },
  {
    icon: Cable,
    title: "Dark Fibre",
    description: "Go unlimited. Stay future-proof. Dark Fibre is a high-capacity network solution for businesses who need unrestricted bandwidth, complete service control and total reliability. We have fibre networking solutions for customers across a wide variety of industries, delivered through our nationwide fibre footprint.",
    features: ["Design your own network", "Secure traffic with private physical infrastructure", "Scale without additional cost"],
  },
  {
    icon: Globe,
    title: "Network Colocation",
    description: "Depending on your requirements for power, cooling, redundancy, network, support, security, and compliance, our technical advisors will ensure your critical network infrastructure is deployed optimally in the most secure, connected, and cost-effective data centre.",
    features: ["Built-for-purpose facilities", "Carrier-neutral tier III facility", "Unrestricted interconnect between carriers and customers"],
  },
  {
    icon: Radio,
    title: "4G Fixed Wireless Access",
    description: "Wireless broadband solutions for areas where fibre deployment is not yet feasible, delivering reliable last-mile access across Ghana.",
    features: ["Last-mile connectivity", "Reliable wireless broadband", "Coverage expansion"],
  },
];

export default function ConnectivityPage() {
  return (
    <Layout>
      <PageHero
        title="Network Solutions"
        description="Highly reliable, always available network solutions and support for your critical applications and end-users."
        bgImage={connectivityHero}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Our Network"
            title="Boost Your Network Performance with Ease"
            description="From national backbone to last-mile access, Smart Infraco provides the complete connectivity stack for government, enterprise, and service provider networks."
          />
          <div className="space-y-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid lg:grid-cols-3 gap-6 p-8 border border-border bg-card"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 content-start">
                  {s.features.map((f) => (
                    <span key={f} className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network highlights */}
      <section className="section-padding bg-dark">
        <div className="container-wide">
          <SectionHeading label="Network Highlights" title="Smart Infraco Has a Broad Customer Base" light />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              ["Carrier Neutral", "Unrestricted interconnect between carriers and customers for better value, lower latency, and higher resilience"],
              ["Tier III Design Standard", "Designed with uptime tier III design standards with resilience across all critical infrastructures"],
              ["N+1 Cooling", "Independent dual power distribution, N+1 cooling infrastructure, state-of-art fire detection and suppression"],
              ["Earthquake-Resistant", "1-metre elevated earthquake-resistant building design, built for different seismic zones"],
              ["Industry-Leading Reliability", "Redundant systems (N+1 and 2(N+1)) with the latest technologies for industry-leading reliability"],
              ["All Telecom Carriers", "Including all telecommunication carriers in Ghana, ISPs, direct connection to all 5 undersea cables"],
            ].map(([label, desc], i) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-secondary mt-2 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-dark-foreground">{label}</div>
                  <div className="text-sm text-dark-foreground/60">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-brand section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need a Network Solution?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our network engineering team can design a bespoke solution for your organisation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-sm font-semibold bg-dark text-dark-foreground hover:bg-dark/90 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}

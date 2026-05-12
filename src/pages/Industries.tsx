import { Landmark, Building2, Wifi, Rocket, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CtaBand from "@/components/shared/CtaBand";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import industriesHero from "@/assets/industries-hero.jpg";

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
    capabilities: ["Hybrid Cloud", "MPLS L3 VPN", "Dedicated Internet", "Storage as a Service", "Managed Security"],
  },
];

export default function IndustriesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Industries"
        title="Trusted by Ghana's most critical sectors."
        description="From government to fintech, telecom to logistics — we power the operators that move the country forward."
        bgImage={industriesHero}
      />

      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <Eyebrow>Sectors served</Eyebrow>
                  <h2 className="font-display mt-5 text-display-lg text-foreground">
                    One operator. <br /><span className="text-gradient-aurora">Every sector.</span>
                  </h2>
                  <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                    Each industry has unique latency, sovereignty and SLA needs. We tailor the stack — connectivity, compute and security — to fit.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {industries.map((ind) => (
                      <li key={ind.title} className="flex items-center gap-3 text-sm text-foreground/80">
                        <ind.icon className="w-4 h-4 text-secondary" />
                        {ind.title}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            <RevealGroup className="lg:col-span-8 space-y-5">
              {industries.map((ind, i) => (
                <RevealItem key={ind.title}>
                  <div className="group relative overflow-hidden p-7 lg:p-8 border border-hairline bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                    <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="grid lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 glass flex items-center justify-center">
                            <ind.icon className="w-5 h-5 text-secondary" />
                          </div>
                          <div className="font-display text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            0{i + 1} · Sector
                          </div>
                        </div>
                        <h3 className="font-display mt-5 text-2xl text-foreground">{ind.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                      </div>
                      <div className="lg:col-span-5 flex flex-wrap gap-2 content-start">
                        {ind.capabilities.map((c) => (
                          <span key={c} className="text-[11px] font-medium px-3 py-1.5 border border-hairline text-foreground/85 hover:border-secondary/40 transition-colors">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Find your fit"
        title={<>The right infrastructure for <span className="text-gradient-aurora">your industry</span>.</>}
        description="Our sector specialists can recommend the optimal infrastructure stack for your organisation."
        primaryLabel="Speak to a Specialist"
        secondaryLabel="Explore Solutions"
        secondaryTo="/connectivity"
      />
    </Layout>
  );
}

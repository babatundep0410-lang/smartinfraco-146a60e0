import { Eye, Target, Award, Users, FileCheck, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import aboutHero from "@/assets/about-hero.jpg";
import ghanaMap from "@/assets/ghana-network-map.jpg";
import { motion } from "framer-motion";

const values = [
  { icon: Eye, title: "Vision", description: "To accelerate the growth and transformation of Ghana's telecoms sector, ensuring equal access to robust infrastructure solutions that enable private players to digitalise and monetise their goals." },
  { icon: Target, title: "Mission", description: "To provide an open neutral-access digital infrastructure that facilitates best-in-class voice and data service for all businesses and consumers, accelerating service delivery on 3G/4G networks and making the nation ready for 5G." },
  { icon: Award, title: "Values", description: "Access to unparalleled and equitable infrastructure, robust local and global technical support, international standard practices, competitive pricing, and great socio-economic impact." },
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
  { icon: FileCheck, title: "NCA Licensed", description: "Licensed under the National Communications Authority of Ghana." },
  { icon: FileCheck, title: "Carrier Neutral", description: "Carrier-neutral facility allowing unrestricted interconnect between carriers and customers for better value, lower latency, and higher resilience." },
];

export default function AboutPage() {
  return (
    <Layout>
      <PageHero
        title="About Smart Infraco"
        description="Ghana's trusted digital infrastructure and services provider, enabling the robust, effective and world-class infrastructure that powers the nation."
        bgImage={aboutHero}
      />

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="Company Overview"
                title="Ghana's Trusted Digital Infrastructure Provider"
                description="The Government of Ghana's 1,010-km Eastern corridor fibre cable was originally built to digitalise the government administration across the nation, and to amplify economic activity in the Eastern side of the country. It however lacked the required technical systems and support infrastructure to make it as effective as possible."
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                By acting as the commercial wing of NITA, with high-grade systems and support infrastructure, Smart Infraco has enabled the robust, effective and world-class infrastructure that we have today. It is built with the additional capacity and technical support system to meet all of the government's needs, and to extend it to private enterprises as well.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ghana's digitalisation progress has driven a rising demand for high-quality, affordable, and equally available internet service. As the commercial wing of NITA, Smart Infraco has the responsibility of ensuring that all public and private enterprises alike have equal access to, and enjoy the full benefit of, the nation's best-of-breed fibre infrastructure.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden border border-border"
            >
              <img src={ghanaMap} alt="Ghana network infrastructure map" loading="lazy" width={800} height={1024} className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeading
            label="Our Promise"
            title="Your Lifeline to Enterprise-Grade Connectivity"
            description="Created through a seamless digital ecosystem that makes for superior management and operationalisation of your business and services."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {promises.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 p-4 border border-border bg-card"
              >
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-foreground">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading label="Our Purpose" title="Vision, Mission & Values" />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ServiceCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeading
            label="Leadership"
            title="Executive Team"
            description="Our leadership brings decades of experience in telecommunications, digital infrastructure, and public-private partnerships."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {["CEO", "CTO", "CFO", "COO"].map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 border border-border bg-card"
              >
                <div className="w-20 h-20 bg-muted flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="text-sm font-semibold text-foreground">Name Placeholder</div>
                <div className="text-xs text-muted-foreground mt-1">{role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-dark">
        <div className="container-wide">
          <SectionHeading label="Compliance" title="Certifications & Standards" light />
          <div className="grid md:grid-cols-3 gap-6">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-dark-foreground/10 bg-dark-foreground/5"
              >
                <c.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-base font-semibold text-dark-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-dark-foreground/60">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

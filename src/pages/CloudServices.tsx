import {
  Cloud, Server, HardDrive, Database, MonitorCheck, Shield,
  Globe, Settings,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import cloudBg from "@/assets/cloud-bg.jpg";
import { Link } from "react-router-dom";

const services = [
  { icon: Cloud, title: "Hybrid Cloud", description: "Seamlessly integrate on-premise infrastructure with cloud resources for flexible, cost-optimised workloads. Smart Infraco's services underpin NITA's efforts to provide a cost-effective and secure cloud-based solution to address the government's need to store and manage its critical applications and data." },
  { icon: Server, title: "Virtual Private Servers", description: "Multi-tenant cloud hosting where high-performance physical servers are virtualised, offering higher levels of performance, flexibility, and control. End users have access to the infrastructure and enjoy the same flexibility and control in the virtual environment." },
  { icon: Database, title: "Backup as a Service", description: "Offsite data storage through regular data transfer from on-premises to data centre. Protect sensitive government, business, or personal data from loss associated with user error, hacking, or any other kind of technological and natural disaster." },
  { icon: HardDrive, title: "Storage as a Service", description: "Enable your organisation to use our data centre and cloud storage resources. More cost-efficient than building private storage infrastructure, especially based on regulatory requirements of storing data locally in the jurisdiction of Ghana." },
  { icon: MonitorCheck, title: "Monitoring as a Service", description: "24×7 monitoring of various levels of IT assets with proactive and reactive measures, such as early detection alerts against cyber threats, vulnerabilities detection, and management of resource utilisation." },
  { icon: Settings, title: "Managed IT Infrastructure", description: "End-to-end management of your IT estate including servers, networking, security, and compliance. Through our decades of industry experience in data centre operations, we will help you find the right solution for your business." },
];

const benefits = [
  { icon: Shield, label: "Data Sovereignty", desc: "All data hosted within Ghana, meeting local regulatory and compliance requirements for storing data locally in the jurisdiction of Ghana." },
  { icon: Globe, label: "Cost Effective & Secure", desc: "Cloud computing has emerged as a more reliable, cost-effective, and scalable option for organisations to meet their computing needs." },
  { icon: MonitorCheck, label: "SLA Backed", desc: "Enterprise-grade SLAs with proactive 24×7 NOC monitoring, incident management, and prompt notification system alerts." },
];

export default function CloudServicesPage() {
  return (
    <Layout>
      <PageHero
        title="Cloud & Managed Services"
        description="Simplify, scale, and secure end-to-end operations. Enterprise-grade cloud infrastructure hosted in Ghana for government and enterprise."
        bgImage={cloudBg}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="What We Offer"
            title="Complete Cloud & IT Management Stack"
            description="In the past few years, cloud computing has emerged as a more reliable, cost-effective, and scalable option for organisations to meet their computing needs. Smart Infraco's services underpin NITA's efforts to provide a cost-effective and secure cloud-based solution to address the government's need to store and manage its critical applications and data."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-wide">
          <SectionHeading label="Why Our Cloud" title="Local Infrastructure, Global Standards" light />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <div key={b.label} className="text-center">
                <div className="w-14 h-14 bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-dark-foreground mb-2">{b.label}</h3>
                <p className="text-sm text-dark-foreground/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-brand section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Migrate to Smart Infraco Cloud</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our cloud architects can design a migration plan tailored to your enterprise needs.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold bg-dark text-dark-foreground hover:bg-dark/90 transition-colors">
            Talk to an Expert
          </Link>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Shield, Lock, Eye, AlertTriangle, Server, Users } from "lucide-react";

const services = [
  { icon: Shield, title: "Threat Detection & Response", description: "24/7 monitoring and rapid incident response to protect your infrastructure from evolving cyber threats." },
  { icon: Lock, title: "Network Security", description: "Firewall management, intrusion prevention, and secure access controls for your entire network." },
  { icon: Eye, title: "Security Operations Centre (SOC)", description: "Dedicated SOC team providing continuous surveillance and threat intelligence." },
  { icon: AlertTriangle, title: "Vulnerability Management", description: "Regular assessments and penetration testing to identify and remediate security gaps." },
  { icon: Server, title: "Endpoint Protection", description: "Comprehensive endpoint security solutions to safeguard devices across your organisation." },
  { icon: Users, title: "Security Awareness Training", description: "Empower your team with the knowledge to recognise and prevent cyber attacks." },
];

export default function Cybersecurity() {
  return (
    <Layout>
      <PageHero
        title="Cybersecurity"
        description="Comprehensive cybersecurity solutions to protect your digital assets and infrastructure"
      />
      <section className="py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="border border-border bg-card p-8 group hover:border-primary/30 transition-colors">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

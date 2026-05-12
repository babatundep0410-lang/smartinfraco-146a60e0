import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-hero.jpg";

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "Our team will be in touch shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        description="Get in touch with our team to discuss your infrastructure requirements."
        bgImage={contactHero}
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <SectionHeading
                title="Send Us a Message"
                description="Fill out the form and our team will respond within one business day."
                centered={false}
              />
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <input
                      required
                      maxLength={100}
                      type="text"
                      className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="John Mensah"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Organisation</label>
                    <input
                      maxLength={100}
                      type="text"
                      className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Ministry of Communications"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    required
                    maxLength={255}
                    type="email"
                    className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>Fibre Connectivity</option>
                    <option>Data Centre Services</option>
                    <option>Cloud & Managed Services</option>
                    <option>Dedicated Internet</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    maxLength={2000}
                    rows={5}
                    className="w-full px-4 py-3 border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    info@smartinfraco.com
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    +233 (0) 30 000 0000
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>Smart Infraco Headquarters<br />Accra, Ghana</span>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="border border-border overflow-hidden bg-muted h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm">Google Map Placeholder</p>
                  <p className="text-xs">Accra, Ghana</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

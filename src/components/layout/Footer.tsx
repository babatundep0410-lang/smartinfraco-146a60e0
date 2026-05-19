import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import Eyebrow from "@/components/ui-system/Eyebrow";

const footerLinks = {
  Solutions: [
    { label: "Connectivity",       href: "/connectivity" },
    { label: "Data Centres",       href: "/data-centres" },
    { label: "Cloud Services",     href: "/cloud-services" },
    { label: "Cybersecurity",      href: "/cybersecurity" },
  ],
  Company: [
    { label: "About Us",   href: "/about" },
    
    { label: "Contact",    href: "/contact" },
  ],
  Media: [
    { label: "News",     href: "/news" },
    { label: "Articles", href: "/articles" },
    { label: "Videos",   href: "/videos" },
    { label: "Events",   href: "/events" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-dark text-dark-foreground overflow-hidden">
      {/* lime hairline top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
      <GridBackdrop variant="lines" className="opacity-40" />

      <div className="relative container-wide pt-24 lg:pt-32 pb-10">
        {/* CTA strip */}
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-hairline">
          <div className="lg:col-span-7">
            <Eyebrow tone="accent">Continental Infrastructure</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground max-w-2xl">
              Building the rails for Ghana's <span className="text-gradient">digital economy</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end items-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-secondary text-secondary-foreground font-medium text-sm"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mt-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Smart Infraco" className="h-10 w-auto" />
              <div className="leading-none">
                <div className="text-sm font-semibold text-dark-foreground">Smart Infraco</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-dark-foreground/50">Ghana · Continental</div>
              </div>
            </div>
            <p className="text-sm text-dark-foreground/65 leading-relaxed max-w-sm">
              Powering Ghana's digital backbone with secure, scalable national infrastructure for government and enterprise.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 border border-hairline">
              <span className="pulse-dot" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-dark-foreground/70">All systems operational</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5 text-dark-foreground/45">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-dark-foreground/75 hover:text-secondary transition-colors story-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5 text-dark-foreground/45">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-dark-foreground/75">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary mt-1 shrink-0" />
                <a href="mailto:info@smartinfraco.com" className="hover:text-secondary transition-colors">
                  info@smartinfraco.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary mt-1 shrink-0" />
                +233 (0) 30 000 0000
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary mt-1 shrink-0" />
                Accra, Ghana
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hairline mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-foreground/50">
            © {new Date().getFullYear()} Smart Infraco. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-dark-foreground/50">
            <span className="hover:text-dark-foreground/80 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-dark-foreground/80 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-dark-foreground/80 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

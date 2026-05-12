import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  Solutions: [
    { label: "Connectivity", href: "/connectivity" },
    { label: "Data Centres", href: "/data-centres" },
    { label: "Cloud Services", href: "/cloud-services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
              <img src={logo} alt="Smart Infraco" className="h-[180px] w-auto mb-4" />
            <p className="text-sm text-dark-foreground/70 leading-relaxed">
              Powering Ghana's digital backbone with secure, scalable national
              infrastructure for government and enterprise.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-dark-foreground/50">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-dark-foreground/70 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-dark-foreground/50">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-dark-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                info@smartinfraco.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +233 (0) 30 000 0000
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Accra, Ghana
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-foreground/50">
            © {new Date().getFullYear()} Smart Infraco. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-dark-foreground/50">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

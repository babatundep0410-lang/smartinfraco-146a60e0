import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  { label: "Connectivity", href: "/connectivity", desc: "National Fibre Backbone, Metro Fibre, DIA, MPLS" },
  { label: "Data Centres", href: "/data-centres", desc: "Tier III Accra, Tier II Kumasi, Colocation" },
  { label: "Cloud & Managed Services", href: "/cloud-services", desc: "Hybrid Cloud, VPS, BaaS, STaaS, MaaS" },
  { label: "Cybersecurity", href: "/cybersecurity", desc: "SOC, Threat Detection, Network Security" },
];

const media = [
  { label: "News", href: "/news", desc: "Latest updates and press releases" },
  { label: "Articles", href: "/articles", desc: "Insights and thought leadership" },
  { label: "Videos", href: "/videos", desc: "Watch our presentations and showcases" },
  { label: "Events", href: "/events", desc: "Upcoming conferences and summits" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "#", children: solutions },
  { label: "Media", href: "#", children: media },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isGroupActive = (children: typeof solutions) => children.some((s) => location.pathname === s.href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Smart Infraco" className="h-[180px] lg:h-[216px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(link.label)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                    isGroupActive(link.children)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {megaOpen === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-80 bg-card border border-border shadow-lg p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block px-4 py-3 transition-colors ${
                            isActive(child.href)
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted"
                          }`}
                        >
                          <div className="text-sm font-medium">{child.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {child.desc}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container-wide py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="space-y-1">
                    <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium ${
                      isActive(link.href) ? "text-primary bg-primary/5" : "hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 mt-3 text-center px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

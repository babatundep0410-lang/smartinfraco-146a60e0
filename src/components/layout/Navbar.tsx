import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const solutions = [
  { label: "Connectivity",       href: "/connectivity",  desc: "National Fibre, Metro, DIA, MPLS" },
  { label: "Data Centres",       href: "/data-centres",  desc: "Tier III Accra · Tier II Kumasi" },
  { label: "Cloud & Managed",    href: "/cloud-services",desc: "Hybrid Cloud, VPS, BaaS, STaaS" },
  { label: "Cybersecurity",      href: "/cybersecurity", desc: "SOC, threat detection, network security" },
];

const media = [
  { label: "News",     href: "/news",     desc: "Latest updates and press releases" },
  { label: "Articles", href: "/articles", desc: "Insights and thought leadership" },
  { label: "Videos",   href: "/videos",   desc: "Presentations and showcases" },
  { label: "Events",   href: "/events",   desc: "Conferences and summits" },
];

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Solutions",  href: "#", children: solutions },
  { label: "Industries", href: "/industries" },
  { label: "Media",      href: "#", children: media },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setMegaOpen(null); }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;
  const isGroupActive = (children: typeof solutions) =>
    children.some((s) => location.pathname === s.href);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-hairline" : "bg-transparent border-b border-transparent"
      )}
    >
      {/* scroll progress hairline */}
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-px origin-left bg-gradient-to-r from-primary via-secondary to-primary"
        style={{ scaleX: progress }}
      />

      <div className="container-bleed flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo lockup */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Smart Infraco" className="h-9 lg:h-10 w-auto" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-tight text-foreground">Smart Infraco</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Ghana · Continental</span>
          </span>
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
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors",
                    isGroupActive(link.children) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>
                <AnimatePresence>
                  {megaOpen === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-[420px] glass shadow-[var(--shadow-elevated)] p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "group flex items-start justify-between gap-4 px-4 py-3 transition-colors",
                            isActive(child.href) ? "bg-primary/15 text-foreground" : "hover:bg-foreground/5"
                          )}
                        >
                          <div>
                            <div className="text-sm font-medium text-foreground">{child.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{child.desc}</div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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
                className={cn(
                  "px-3.5 py-2 text-[13px] font-medium transition-colors story-link",
                  isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="pulse-dot" />
            All systems operational
          </span>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-hairline"
          >
            <div className="container-wide py-5 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.children ? (
                    <div className="space-y-1 py-1">
                      <div className="px-1 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.22em]">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-1 py-2 text-base text-foreground/90 hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-1 py-2.5 text-base font-medium",
                        isActive(link.href) ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mx-1 mt-4 text-center px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground"
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

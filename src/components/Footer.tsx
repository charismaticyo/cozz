import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Infrastructure & Security", href: "/services/infrastructure-security" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submission logic
    setEmail("");
  };

  return (
    <footer className="border-t border-border/50">
      <div className="container-editorial-wide px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground tracking-tight leading-none mb-6">
              KOMZ
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              Transforming technology chaos into competitive advantage. 
              One partner, infinite possibilities.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-6 mt-10">
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              Insights on AI, automation, and digital transformation.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-border pb-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-0 bottom-3 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </motion.button>
              </div>
            </form>

            <div className="mt-10">
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>36 Albemarle Street</li>
                <li>London, United Kingdom</li>
                <li>
                  <a href="tel:02035002626" className="hover:text-foreground transition-colors">
                    0203 500 2626
                  </a>
                </li>
                <li>
                  <a href="mailto:info@komzconsulting.com" className="hover:text-foreground transition-colors">
                    info@komzconsulting.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-20 pt-8 border-t border-border/30">
          <p className="text-xs text-slate-light">
            © {new Date().getFullYear()} Komz Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

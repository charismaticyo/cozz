import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Cpu, Settings, Brain, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { 
    name: "System Technology", 
    href: "/services#system-technology",
    icon: Cpu,
    description: "Application development, cloud transformation & infrastructure"
  },
  { 
    name: "Operations Services", 
    href: "/services#operations",
    icon: Settings,
    description: "Process automation & industry platform solutions"
  },
  { 
    name: "Data & AI Services", 
    href: "/services#data-ai",
    icon: Brain,
    description: "AI solutions, digital engineering & IoT integration"
  },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
  },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "#");

  return (
    <>
      {/* Floating Pill Navigation - Desktop */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay: 0.2
        }}
        className={cn(
          "fixed top-5 left-0 right-0 z-50 hidden lg:block transition-all duration-300",
          scrolled ? "bg-card/95 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
        )}
      >
        <div className="container-editorial">
          <div className="floating-nav mx-auto px-3 py-2" style={{ maxWidth: 'calc(100vw - 3rem)' }}>
            <div className="flex items-center gap-1">
            {/* Logo */}
            <Link 
              to="/" 
              className="px-4 py-2 mr-2 flex-shrink-0"
            >
              <motion.span 
                className="text-lg font-serif font-medium text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                Komz<span className="font-sans font-normal text-primary">Consulting</span>
              </motion.span>
            </Link>

            {/* Nav Links */}
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "nav-link-bubble flex items-center gap-1 relative z-10",
                      isActive(item.href) && "active"
                    )}
                  >
                    <span>{item.name}</span>
                    <motion.div
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-3 h-3" />
                    </motion.div>
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-card rounded-3xl p-4 overflow-hidden border border-border/50"
                        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
                      >
                        <div className="space-y-1">
                          {services.map((service, index) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                to={service.href}
                                className={cn(
                                  "flex items-start gap-4 p-3 rounded-2xl transition-all duration-200 group",
                                  "hover:bg-secondary"
                                )}
                              >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
                                  <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-foreground text-sm mb-0.5">
                                    {service.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* View All Services Link */}
                        <div className="mt-3 pt-3 border-t border-border">
                          <Link
                            to="/services"
                            className="flex items-center justify-between px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                          >
                            <span>View all services</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "nav-link-bubble relative z-10 flex-shrink-0",
                    isActive(item.href) && "active"
                  )}
                >
                  <span>{item.name}</span>
                </Link>
              )
            )}

            {/* CTA Button */}
            <motion.div 
              className="ml-2 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300",
          scrolled || mobileMenuOpen
            ? "bg-card/95 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-lg font-serif font-medium text-foreground">
                Komz<span className="font-sans font-normal text-primary">Consulting</span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 text-foreground rounded-full hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="overflow-hidden"
              >
                <div className="py-6 space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        className={cn(
                          "block py-3 text-lg font-medium transition-colors rounded-xl px-4",
                          isActive(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-secondary"
                        )}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <div className="pl-4 mt-1 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center gap-3 py-2 px-4 text-base transition-colors rounded-xl text-muted-foreground hover:text-primary"
                            >
                              <service.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                              <span>{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigation.length * 0.05 }}
                    className="pt-4"
                  >
                    <Link
                      to="/contact"
                      className="block py-3 px-4 text-center text-lg font-medium rounded-xl bg-primary text-primary-foreground"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
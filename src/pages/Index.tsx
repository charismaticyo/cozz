import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowRight, Phone, BarChart3, Shield, Code2, Smartphone, Zap, Sparkles, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { TrustTicker } from "@/components/TrustTicker";
import { AudioVisualizer, LineChart, AnimatedLock, CodeBlock, PhoneMockup } from "@/components/BentoElements";
import heroGradient from "@/assets/hero-gradient.jpg";

export default function Index() {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="blob blob-coral w-[600px] h-[600px] -top-40 -right-40"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="blob blob-teal w-[500px] h-[500px] top-1/2 -left-40"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="blob blob-gold w-[400px] h-[400px] bottom-20 right-1/4"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
          <div className="container-editorial-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Next-gen technology consulting</span>
                </motion.div>
                
                <h1 className="headline-hero text-foreground mb-6">
                  <span className="block">Stop Managing</span>
                  <motion.span 
                    className="block text-gradient"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Tech.
                  </motion.span>
                </h1>
                <p className="body-large mb-10 max-w-lg">
                  We turn technology chaos into competitive advantage. 
                  From AI agents to infrastructure—one partner, infinite possibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to="/contact" className="btn-gradient">
                      Start a Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to="/portfolio" className="btn-editorial-outline">
                      View Our Work
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Framed Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.4
                }}
                className="relative"
              >
                <div className="framed-container aspect-video group">
                  <img
                    src={heroGradient}
                    alt="Technology visualization"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
                  {/* Floating Stats */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-6 left-6 right-6 flex gap-4"
                  >
                    {[
                      { value: "500+", label: "Projects", icon: TrendingUp },
                      { value: "98%", label: "Retention", icon: Users },
                      { value: "10+", label: "Years", icon: Sparkles },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="bg-card/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex-1 cursor-default"
                      >
                        <div className="flex items-center gap-2">
                          <stat.icon className="w-4 h-4 text-primary" />
                          <div className="text-xl font-serif font-medium text-foreground">{stat.value}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm"
                  animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 backdrop-blur-sm"
                  animate={{ rotate: [0, -10, 0], scale: [1, 0.95, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Ticker */}
        <TrustTicker />

        {/* Services Bento Grid */}
        <section className="section-padding relative">
          <div className="container-editorial-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="accent-line mx-auto mb-6"
              />
              <p className="text-primary font-medium tracking-wide uppercase mb-4">
                Core Capabilities
              </p>
              <h2 className="headline-section text-foreground">
                Everything you need to <span className="text-gradient">scale</span>
              </h2>
            </motion.div>

            {/* Bento Grid */}
            <div className="bento-grid">
              {/* AI Voice Agents - Large */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8 }}
                className="bento-large swiss-card p-8 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-float">
                    <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">AI Voice Agents</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  Intelligent assistants that handle calls, book appointments, and qualify leads—24/7.
                </p>
                <div className="flex-1 min-h-[120px]">
                  <AudioVisualizer />
                </div>
                <Link 
                  to="/services/ai-automation" 
                  className="mt-4 text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Legacy Modernization - Wide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8 }}
                className="bento-wide swiss-card p-6 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-float">
                    <Code2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Legacy Modernization</h3>
                </div>
                <div className="flex-1">
                  <CodeBlock />
                </div>
              </motion.div>

              {/* Mobile Engineering - Tall */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -8 }}
                className="bento-tall swiss-card p-6 flex flex-col items-center justify-center group"
              >
                <div className="flex items-center gap-3 mb-4 self-start">
                  <div className="icon-float">
                    <Smartphone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Mobile Apps</h3>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <PhoneMockup />
                </div>
              </motion.div>

              {/* Cybersecurity - Small */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bento-small swiss-card p-6 flex flex-col items-center justify-center group"
              >
                <AnimatedLock />
                <h3 className="text-lg font-semibold text-foreground mt-4">Security</h3>
                <p className="text-xs text-muted-foreground text-center mt-1">Enterprise-grade protection</p>
              </motion.div>

              {/* Analytics - Small */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bento-small swiss-card p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">Analytics</h3>
                </div>
                <div className="h-20">
                  <LineChart />
                </div>
              </motion.div>

              {/* Automation - Wide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -8 }}
                className="bento-wide swiss-card p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-float">
                    <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Process Automation</h3>
                    <p className="text-xs text-muted-foreground">Reduce manual work by 80%</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Invoicing", "CRM Sync", "Reports"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-br from-secondary to-secondary/50 rounded-xl p-3 text-center cursor-default"
                    >
                      <div className="text-sm font-medium text-foreground">{item}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/services" className="btn-editorial-outline">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
          <div className="container-editorial relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="accent-line mx-auto mb-6"
              />
              <h2 className="headline-section text-foreground">
                In their <span className="text-gradient">words</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "The AI voice agent handles our calls flawlessly. Our staff gained hours back every single day.",
                  author: "Ava Mitchell",
                  role: "Operations Director",
                  color: "from-primary/10 to-accent/5",
                },
                {
                  quote: "Legacy modernization was risky. Komz delivered perfectly. Zero downtime. Zero stress.",
                  author: "Rahul Desai",
                  role: "CTO, FinTech",
                  color: "from-accent/10 to-primary/5",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`swiss-card p-10 bg-gradient-to-br ${testimonial.color}`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Sparkles className="w-4 h-4 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-foreground mb-8 font-serif leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding relative">
          <div className="container-editorial text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-primary" />
              </motion.div>
              <h2 className="headline-section text-foreground mb-6">
                Ready to build<br />
                something <span className="text-gradient">extraordinary</span>?
              </h2>
              <p className="body-large max-w-xl mx-auto mb-10">
                Let's architect your competitive advantage together.
              </p>
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="btn-gradient text-lg px-12 py-5">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
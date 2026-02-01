import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Cloud, Network, Lock, Server, AlertTriangle, Eye } from "lucide-react";
import securityCenter from "@/assets/security-center.jpg";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Penetration testing, vulnerability assessments, and security audits. We ensure you are compliant and safe from threats.",
    features: ["Penetration testing", "Compliance auditing", "Incident response", "Security training"],
  },
  {
    icon: Cloud,
    title: "Cloud Enablement",
    description: "Migrate to AWS, Azure, or Google Cloud. We optimize your cloud infrastructure to reduce costs and improve speed.",
    features: ["Cloud migration", "Multi-cloud architecture", "Cost optimization", "Disaster recovery"],
  },
  {
    icon: Network,
    title: "Hardware & Networking",
    description: "Complete hardware networking solutions to ensure your physical office connectivity is as fast as your cloud servers.",
    features: ["Network design", "Enterprise WiFi", "VPN setup", "24/7 monitoring"],
  },
];

const metrics = [
  { icon: Lock, value: "100%", label: "Compliance" },
  { icon: AlertTriangle, value: "0", label: "Breaches" },
  { icon: Eye, value: "24/7", label: "Monitoring" },
  { icon: Server, value: "99.99%", label: "Uptime" },
];

export default function InfrastructureSecurity() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-apple text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-medium mb-4">Infrastructure & Security</p>
            <h1 className="headline-hero text-foreground mb-6">
              Protect. Connect.
              <br />
              <span className="text-primary">Scale.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-large max-w-2xl mx-auto mb-10">
              Enterprise-grade security and infrastructure solutions. 24/7 protection for your digital and physical infrastructure.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link to="/contact" className="btn-apple">
              Get security audit
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-20">
        <AnimatedSection>
          <div className="container-apple-wide">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={securityCenter} alt="Security Operations Center" className="w-full h-auto" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-foreground">
        <div className="container-apple-wide px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 0.1}>
                <div className="text-center">
                  <metric.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-semibold text-background mb-2">{metric.value}</div>
                  <p className="text-sm text-background/60">{metric.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-apple-wide px-6">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="headline-section text-foreground mb-4">Complete infrastructure solutions</h2>
              <p className="body-large max-w-2xl mx-auto">
                End-to-end security and infrastructure services for modern enterprises.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className="bg-secondary/50 rounded-3xl p-10 md:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <service.icon className="w-12 h-12 text-primary mb-6" />
                      <h3 className="headline-card text-foreground mb-4">{service.title}</h3>
                      <p className="body-medium mb-8">{service.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <service.icon className="w-40 h-40 text-primary/10" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-apple text-center">
          <AnimatedSection>
            <h2 className="headline-section text-foreground mb-6">
              Is your infrastructure secure?
            </h2>
            <p className="body-large max-w-2xl mx-auto mb-10">
              Get a comprehensive security audit and infrastructure assessment from our expert team.
            </p>
            <Link to="/contact" className="btn-apple">
              Request audit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

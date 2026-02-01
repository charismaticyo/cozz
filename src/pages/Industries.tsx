import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Stethoscope, Cpu, ShoppingCart, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare IT",
    description: "Specialized expertise in EMR implementation and healthcare interoperability standards. We help healthcare providers digitize patient care while maintaining strict HIPAA compliance.",
    features: ["EMR/EHR implementation", "HIPAA compliance", "Telemedicine platforms", "Healthcare analytics"],
  },
  {
    icon: Cpu,
    title: "Internet of Things",
    description: "Connecting smart devices for industrial and commercial efficiency. From smart factories to connected office spaces, we build the infrastructure for the connected world.",
    features: ["Industrial IoT", "Smart building automation", "Predictive maintenance", "Fleet management"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description: "End-to-end digital storefronts that drive sales, integrated with your inventory and logistics systems. We help retailers thrive in the digital economy.",
    features: ["Custom e-commerce", "Inventory management", "Customer analytics", "Omnichannel solutions"],
  },
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-apple text-center">
          <AnimatedSection>
            <h1 className="headline-hero text-foreground mb-6">
              Industry
              <br />
              <span className="text-primary">expertise.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-large max-w-2xl mx-auto">
              Deep domain knowledge combined with cutting-edge technology. 
              We understand your industry's unique challenges.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding-sm">
        <div className="container-apple-wide px-6">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <industry.icon className="w-16 h-16 text-primary mb-8" />
                    <h2 className="headline-section text-foreground mb-6">{industry.title}</h2>
                    <p className="body-medium mb-8">{industry.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {industry.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="link-arrow">
                      Learn more <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className={`bg-secondary/50 rounded-3xl aspect-square flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <industry.icon className="w-40 h-40 text-primary/20" />
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
              Don't see your industry?
            </h2>
            <p className="body-large max-w-2xl mx-auto mb-10">
              Our adaptable team has successfully delivered solutions across dozens of industries.
            </p>
            <Link to="/contact" className="btn-apple">
              Let's talk
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

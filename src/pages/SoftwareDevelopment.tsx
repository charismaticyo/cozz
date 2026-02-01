import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Smartphone, RefreshCw, TestTube } from "lucide-react";
import softwareDev from "@/assets/software-dev.jpg";

const services = [
  {
    icon: Smartphone,
    title: "Custom App Development",
    description: "From iOS and Android to complex Web Apps. We use React, Node, Python, and Java to build scalable solutions that drive business growth.",
    technologies: ["React", "Node.js", "Python", "Swift", "Kotlin"],
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    description: "Is your current software failing? We specialize in rescuing stalled projects and modernizing legacy codebases without losing your historical data.",
    technologies: ["Microservices", "Cloud-Native", "Docker", "CI/CD"],
  },
  {
    icon: TestTube,
    title: "Quality Engineering",
    description: "Automated testing and QA pipelines to ensure your software is robust and secure before it ever hits the market.",
    technologies: ["Selenium", "Jest", "Cypress", "LoadRunner"],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "Understand your goals and requirements" },
  { step: "02", title: "Architecture", description: "Design scalable system architecture" },
  { step: "03", title: "Development", description: "Agile sprints with continuous delivery" },
  { step: "04", title: "Launch", description: "Deploy and optimize for production" },
];

export default function SoftwareDevelopment() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-apple text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-medium mb-4">Software Development</p>
            <h1 className="headline-hero text-foreground mb-6">
              Build. Rescue.
              <br />
              <span className="text-primary">Transform.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-large max-w-2xl mx-auto mb-10">
              Whether you need a new application from scratch or need to rescue a failing project, we deliver robust, scalable solutions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link to="/contact" className="btn-apple">
              Start your project
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-20">
        <AnimatedSection>
          <div className="container-apple-wide">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={softwareDev} alt="Software Development" className="w-full h-auto" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container-apple-wide px-6">
          <AnimatedSection>
            <h2 className="headline-card text-foreground text-center mb-16">Our process</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-apple-wide px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <service.icon className="w-12 h-12 text-primary mb-6" />
                    <h3 className="headline-card text-foreground mb-4">{service.title}</h3>
                    <p className="body-medium mb-8">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-secondary/50 rounded-3xl aspect-square flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <service.icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-apple text-center">
          <AnimatedSection>
            <h2 className="headline-section text-background mb-6">
              Have a stalled project?
            </h2>
            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-10">
              Our Project Rescue team has successfully revived over 50 enterprise IT initiatives.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-background text-foreground hover:opacity-90 transition-opacity">
              Request assessment
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

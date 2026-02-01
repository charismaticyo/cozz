import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Bot, Cpu, BarChart3, Phone, Calendar, MessageSquare, Zap } from "lucide-react";
import aiVoiceAgent from "@/assets/ai-voice-agent.jpg";

const services = [
  {
    icon: Bot,
    title: "AI Voice Agents",
    description: "Replace your call center with intelligent AI. Our voice agents handle customer support, appointment bookings, and lead qualification 24/7 with human-like fluency.",
    features: ["24/7 availability", "Multi-language support", "CRM integration", "Real-time analytics"],
  },
  {
    icon: Cpu,
    title: "Process Automation",
    description: "Stop doing repetitive work. We build custom bots that handle data entry, report generation, and CRM syncing, reducing manual workload by up to 80%.",
    features: ["Custom workflows", "Document processing", "ERP integration", "Exception handling"],
  },
  {
    icon: BarChart3,
    title: "Data & BI",
    description: "Turn data into decisions. We implement PowerBI and custom dashboards to visualize your business performance in real-time.",
    features: ["Custom dashboards", "Real-time visualization", "Predictive analytics", "Automated reporting"],
  },
];

const useCases = [
  { icon: Phone, title: "Customer Support" },
  { icon: Calendar, title: "Appointment Booking" },
  { icon: MessageSquare, title: "Lead Qualification" },
  { icon: Zap, title: "Task Automation" },
];

export default function AIAutomation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-apple text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-medium mb-4">AI & Automation</p>
            <h1 className="headline-hero text-foreground mb-6">
              Intelligent automation
              <br />
              <span className="text-primary">that never sleeps.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-large max-w-2xl mx-auto mb-10">
              Leverage cutting-edge AI to transform your operations. Reduce costs by up to 80% with intelligent systems that work around the clock.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link to="/contact" className="btn-apple">
              Start automating
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-20">
        <AnimatedSection>
          <div className="container-apple-wide">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={aiVoiceAgent} alt="AI Voice Agent" className="w-full h-auto" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-secondary/30">
        <div className="container-apple-wide px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={useCase.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-background flex items-center justify-center shadow-lg">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{useCase.title}</h3>
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
              <h2 className="headline-section text-foreground mb-4">AI-powered solutions</h2>
              <p className="body-large max-w-2xl mx-auto">
                Comprehensive automation services tailored to your business needs.
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
      <section className="section-padding bg-foreground">
        <div className="container-apple text-center">
          <AnimatedSection>
            <h2 className="headline-section text-background mb-6">
              Ready to automate?
            </h2>
            <p className="text-xl text-background/70 max-w-2xl mx-auto mb-10">
              Join hundreds of businesses that have transformed their operations with our AI solutions.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-background text-foreground hover:opacity-90 transition-opacity">
              Schedule a demo
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

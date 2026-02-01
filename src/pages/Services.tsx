import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import ChatbotDemo from "@/components/ChatbotDemo";
import VoiceAgentDemo from "@/components/VoiceAgentDemo";
import ServicesTabs from "@/components/ServicesTabs";
import { 
  ArrowRight, ClipboardCheck, FileText, Rocket, Users
} from "lucide-react";
import { motion } from "framer-motion";

const engagementSteps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "The Audit",
    timeline: "Days 1-3",
    description: "We don't guess. We analyze your current infrastructure and identify the bottlenecks."
  },
  {
    icon: FileText,
    step: "02",
    title: "The Blueprint",
    timeline: "Days 4-7",
    description: "You receive a clear roadmap, fixed costs, and a timeline. No hidden fees."
  },
  {
    icon: Rocket,
    step: "03",
    title: "The Execution",
    timeline: "Weekly Sprints",
    description: "Our agile squads build and deploy. You see progress every week, not just at the deadline."
  },
  {
    icon: Users,
    step: "04",
    title: "The Handover",
    timeline: "Transition",
    description: "We train your internal team to manage the system, or we stay on to manage it for you."
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial text-center">
          <AnimatedSection>
            <p className="text-primary font-medium tracking-wide uppercase mb-4">
              Expert IT Consulting
            </p>
            <h1 className="headline-hero text-foreground mb-6">
              Digital Transformation<br />
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="body-large max-w-3xl mx-auto mb-10">
              At Komz Consulting, we specialize in data analytics and digital products, 
              helping businesses like yours build robust technology frameworks that drive 
              efficiency and growth. Our team delivers comprehensive services including 
              mobile development, application development, and e-commerce solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-editorial">
                Consult with an Architect
              </Link>
              <Link to="/portfolio" className="btn-editorial-outline">
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories with Tabs */}
      <section className="section-padding bg-secondary/30">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-wide uppercase mb-4">
                Our Services
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
                Comprehensive Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our wide range of services designed to drive digital transformation and business growth.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <ServicesTabs defaultTab="system-technology" />
          </AnimatedSection>
        </div>
      </section>

      {/* Chatbot Demo Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  🤖
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
                Experience Our AI Chatbot
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                See our chatbot technology in action. Ask questions about our services, expertise, and how we can help transform your business.
              </p>
              <p className="text-sm text-primary font-medium">
                This is a live demo of the AI chatbot services we offer to our clients.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="h-[500px] md:h-[600px]">
                <ChatbotDemo />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Interested in deploying an AI chatbot for your business?
              </p>
              <Link to="/contact" className="btn-editorial">
                Contact Us About Chatbot Solutions
                <ArrowRight className="w-5 h-5 inline ml-2" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Voice Agent Demo Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                  📞
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
                AI Voice Agent Demo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                Listen to our voice agent handling real customer inquiries. Experience 24/7 automated call handling with human-like conversations.
              </p>
              <p className="text-sm text-primary font-medium">
                This is a live demonstration of our voice agent technology for customer support and lead qualification.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="h-[500px] md:h-[600px]">
                <VoiceAgentDemo />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Want to deploy a voice agent for your business?
              </p>
              <Link to="/contact" className="btn-editorial">
                Contact Us About Voice Agent Solutions
                <ArrowRight className="w-5 h-5 inline ml-2" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="section-padding bg-secondary/30">
        <div className="container-editorial text-center mb-20">
          <AnimatedSection>
            <p className="text-primary font-medium tracking-wide uppercase mb-4">
              Our Engagement Process
            </p>
            <h2 className="headline-section text-foreground mb-6">
              Low Friction. High Transparency.
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Here's how we work.
            </p>
          </AnimatedSection>
        </div>

        <div className="container-editorial-wide">
          <div className="grid md:grid-cols-4 gap-8">
            {engagementSteps.map((step, index) => (
              <AnimatedSection key={step.title}>
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 5 }}
                    >
                      <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    </motion.div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{step.timeline}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-editorial">
          <AnimatedSection>
            <div className="swiss-card p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6">
                Why Choose Komz Consulting?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-10">
                We prioritize cost optimization, risk management, and innovation. With fixed rates 
                and experienced professionals, we help you achieve sustainable results in data 
                analytics and digital products.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">20+</div>
                  <p className="text-muted-foreground text-sm">Years of Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground text-sm">Fixed-Price Delivery</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground text-sm">Expert Support</p>
                </div>
              </div>
              <Link to="/contact" className="btn-editorial">
                Schedule a Consultation 
                <ArrowRight className="w-5 h-5 inline ml-2" strokeWidth={1.5} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

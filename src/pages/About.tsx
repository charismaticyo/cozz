import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Zap, Users } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Zero-defect delivery through quality engineering and rigorous assurance processes.",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Rapid adaptation to market shifts with agile methodology and continuous improvement.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Long-term strategic collaboration. Your success is our success.",
  },
];

const team = [
  { name: "Laito French", role: "Chief Executive Officer" },
  { name: "Adam Ivan", role: "Strategic Advisor" },
  { name: "Sarah Chen", role: "Head of Engineering" },
  { name: "Michael Torres", role: "Director of AI Solutions" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-apple text-center">
          <AnimatedSection>
            <h1 className="headline-hero text-foreground mb-6">
              Engineering trust.
              <br />
              <span className="text-primary">Delivering innovation.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-large max-w-3xl mx-auto">
              A premier digital product and technology development firm based in London. 
              We define ourselves not just by the code we write, but by the business goals we achieve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 pb-20">
        <AnimatedSection>
          <div className="container-apple-wide">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={teamMeeting}
                alt="Komz Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Story */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-apple">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="headline-card text-foreground mb-8">
                A decade of digital excellence
              </h2>
              <div className="space-y-6 body-medium">
                <p>
                  With over a decade of experience, we specialize in 'Project Rescue'—taking failing 
                  IT initiatives and turning them into success stories.
                </p>
                <p>
                  Our team of expert engineers, security analysts, and AI specialists work together 
                  to deliver solutions that don't just meet expectations, they exceed them.
                </p>
                <p>
                  From healthcare EMR implementations to fintech security overhauls, we've helped 
                  businesses across every major industry modernize their technology stack and 
                  embrace the future of digital transformation.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-apple-wide px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="headline-section text-foreground mb-4">Our philosophy</h2>
              <p className="body-large max-w-2xl mx-auto">
                Three core values that guide every decision and solution.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-secondary/50 rounded-3xl p-10 h-full">
                  <value.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary/30">
        <div className="container-apple-wide px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="headline-section text-foreground mb-4">Leadership</h2>
              <p className="body-large max-w-2xl mx-auto">
                Experienced leaders driving innovation and excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-4xl font-semibold text-gray-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-apple text-center">
          <AnimatedSection>
            <h2 className="headline-section text-foreground mb-6">
              Ready to work together?
            </h2>
            <p className="body-large max-w-2xl mx-auto mb-10">
              Let's discuss how we can help transform your technology infrastructure.
            </p>
            <Link to="/contact" className="btn-apple">
              Get in touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

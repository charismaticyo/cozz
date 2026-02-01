import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const openings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "London / Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Automation",
    location: "London / Remote",
    type: "Full-time",
  },
  {
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "London",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "London / Remote",
    type: "Full-time",
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "London",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive compensation",
  "Flexible remote work",
  "Learning budget",
  "Health insurance",
  "Team events",
  "Career growth",
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-apple text-center">
          <AnimatedSection>
            <h1 className="headline-hero text-foreground mb-6">
              Build the future
              <br />
              <span className="text-primary">with us.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="body-large max-w-2xl mx-auto">
              We're always looking for talented developers, security analysts, and AI engineers. 
              Join a team that values innovation and work-life balance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container-apple-wide px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="headline-card text-foreground mb-4">Why join Komz?</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit} delay={index * 0.05}>
                <div className="bg-background rounded-2xl p-6 text-center">
                  <p className="text-sm font-medium text-foreground">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="container-apple-wide px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="headline-section text-foreground mb-4">Open positions</h2>
              <p className="body-large max-w-2xl mx-auto">
                Explore opportunities to grow your career with us.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job, index) => (
              <AnimatedSection key={job.title} delay={index * 0.1}>
                <Link
                  to="/contact"
                  className="block bg-secondary/50 rounded-2xl p-6 hover:bg-secondary/80 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{job.department}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
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
              Don't see the right role?
            </h2>
            <p className="body-large max-w-2xl mx-auto mb-10">
              We're always interested in meeting talented people. Send us your resume.
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

import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import { RetellCall } from "@/components/RetellCall";

const caseStudies = [
  {
    id: "automated-clinic",
    title: "The Automated Clinic",
    industry: "Healthcare",
    client: "MedFirst Group",
    image: "/placeholder.svg",
    result: "+40% Bookings",
    description: "AI Voice Agent handling 100% of appointment calls 24/7",
    featured: true,
  },
  {
    id: "fintech-security",
    title: "Security Overhaul",
    industry: "Financial Services",
    client: "SecureBank Ltd",
    image: "/placeholder.svg",
    result: "100% Compliance",
    description: "Complete cybersecurity audit and SOC2 implementation",
    featured: false,
  },
  {
    id: "enterprise-rescue",
    title: "Project Rescue",
    industry: "Enterprise",
    client: "TechCorp",
    image: "/placeholder.svg",
    result: "$5M Saved",
    description: "ERP development rescued and launched in 3 months",
    featured: false,
  },
  {
    id: "retail-transform",
    title: "Digital Transformation",
    industry: "Retail",
    client: "StyleHouse",
    image: "/placeholder.svg",
    result: "+200% Sales",
    description: "Custom omnichannel platform integrating all sales channels",
    featured: true,
  },
  {
    id: "hotel-automation",
    title: "Smart Hospitality",
    industry: "Hospitality",
    client: "Grand Hotels",
    image: "/placeholder.svg",
    result: "+35% Revenue",
    description: "AI concierge and contactless payment integration",
    featured: false,
  },
  {
    id: "realstate-ar",
    title: "Virtual Showroom",
    industry: "Real Estate",
    client: "Prime Properties",
    image: "/placeholder.svg",
    result: "2x Leads",
    description: "AR property tours and automated lead qualification",
    featured: false,
  },
];

const achievements = [
  { icon: TrendingUp, value: "$50M+", label: "Client Revenue Generated" },
  { icon: Award, value: "50+", label: "Projects Rescued" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h1 className="headline-hero text-foreground mb-6">
              Proven results.
              <br />
              <span className="text-primary">Real impact.</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="body-large max-w-2xl mx-auto"
          >
            Explore how we've helped businesses across industries transform
            their operations and achieve measurable success.
          </motion.p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-foreground">
        <div className="container-editorial-wide px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <achievement.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <div className="text-5xl font-serif font-medium text-background mb-2">
                  {achievement.value}
                </div>
                <p className="text-background/60 text-sm">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Portfolio */}
      <section className="section-padding">
        <div className="container-editorial-wide px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-section text-foreground text-center mb-16"
          >
            Case Studies
          </motion.h2>

          {/* Art Gallery Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl bg-card ${study.featured ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <Link to={`/portfolio/${study.id}`} className="block">
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${study.featured ? "aspect-[2/1]" : "aspect-square"}`}>
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      {/* Industry Badge */}
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider mb-2"
                      >
                        {study.industry}
                      </motion.span>

                      {/* Title - slides up on hover */}
                      <motion.h3
                        className="font-serif text-2xl md:text-3xl text-background mb-1 transform transition-transform duration-500 group-hover:-translate-y-2"
                      >
                        {study.title}
                      </motion.h3>

                      {/* Client */}
                      <p className="text-background/60 text-sm mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {study.client}
                      </p>

                      {/* Result Badge - slides up on hover */}
                      <div className="flex items-center gap-4 transform transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-1 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                          <TrendingUp className="w-4 h-4" strokeWidth={1.5} />
                          {study.result}
                        </span>
                        <span className="text-background/80 text-sm flex items-center gap-1">
                          View Case Study
                          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section className="py-20 bg-foreground text-background relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 text-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        </div>

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="headline-section text-background mb-4">
              Experience the Future
            </h2>
            <p className="text-white/60 body-large max-w-2xl mx-auto">
              Interact with our advanced voice agent directly. Experience how we can automate your customer communications.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <RetellCall />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-section text-foreground mb-6">
              Ready to be our next success story?
            </h2>
            <p className="body-large max-w-2xl mx-auto mb-10">
              Let's discuss how we can deliver similar results for your business.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="btn-editorial">
                Start Your Transformation
                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

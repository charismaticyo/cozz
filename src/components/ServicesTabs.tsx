import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Cloud, Server, Lock, RefreshCw, Layers, CheckCircle, Settings, Zap,
  Workflow, Database, Globe, Network, Bot, Smartphone, Lightbulb, ClipboardCheck,
  Cpu, Brain
} from 'lucide-react';

interface Service {
  icon: any;
  name: string;
  description: string;
  features: string[];
}

interface ServiceCategory {
  id: string;
  label: string;
  icon: any;
  color: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "system-technology",
    label: "System Technology",
    icon: Cpu,
    color: "from-blue-500/10 to-indigo-500/10",
    services: [
      {
        icon: Code2,
        name: "Application Services",
        description: "Build and maintain web and mobile applications, portals and e‑commerce solutions with fixed-price delivery and experienced teams.",
        features: ["Mobile & Web Apps", "Portal & E‑commerce", "Agile Delivery", "Fixed Pricing"]
      },
      {
        icon: Cloud,
        name: "Cloud Enablement",
        description: "Migrate legacy servers to modern cloud (AWS, hybrid) with minimal disruption and optimized operations.",
        features: ["Cloud Migration", "Hybrid Architectures", "Cost Optimization", "Managed Cloud"]
      },
      {
        icon: Server,
        name: "Infrastructure Services",
        description: "Full IT infrastructure management: networking, data centres, communications and platform operations for reliable foundations.",
        features: ["Networking & Comms", "Data Centre Ops", "Platform Management", "Sustainable Infrastructure"]
      },
      {
        icon: Lock,
        name: "Security",
        description: "End‑to‑end cyber security including threat & vulnerability management, identity controls, encryption and proactive monitoring.",
        features: ["Threat Management", "Identity & Access", "Data Encryption", "Compliance & Monitoring"]
      },
      {
        icon: RefreshCw,
        name: "Modernization",
        description: "Modernize legacy apps and platforms using cloud, AI/ML and automation to improve performance and reduce costs.",
        features: ["App Modernization", "AI & ML", "Resource Optimization", "Legacy Retirement"]
      },
      {
        icon: Layers,
        name: "Enterprise Application Service",
        description: "Implement and integrate ERP/CRM (SAP, Oracle, Dynamics) to streamline processes, automate workflows and improve visibility.",
        features: ["ERP/CRM Integration", "Workflow Automation", "Financial Visibility", "Custom Integrations"]
      },
      {
        icon: CheckCircle,
        name: "Quality Engineering & Assurances",
        description: "AI‑driven testing, automated assurance and performance validation to deliver bug‑free, compliant solutions.",
        features: ["Automated QA", "Performance Testing", "Compliance Assurance", "AI Testing"]
      },
      {
        icon: Zap,
        name: "Intelligent Process Automation",
        description: "Automate high‑volume workflows using RPA, AI and RaaS to reduce manual effort and improve accuracy.",
        features: ["RPA & RaaS", "AI Workflows", "Operational Insights", "Error Reduction"]
      }
    ]
  },
  {
    id: "operations",
    label: "Operations",
    icon: Settings,
    color: "from-emerald-500/10 to-teal-500/10",
    services: [
      {
        icon: Workflow,
        name: "Industry & Platform Services",
        description: "Industry-ready solutions for efficient business operations. Choose the right platform for your organization and stay ahead with fast, accurate business processes.",
        features: ["Agile Operations", "Platform Services", "Digital Ready Processes", "Industry Solutions"]
      },
      {
        icon: Zap,
        name: "Intelligent Process Automation",
        description: "Configure automation solutions that plug into your existing legacy frameworks seamlessly. Save on expensive man-hours and improve bottom-lines.",
        features: ["Enterprise Automation", "Operational Insights", "Automation As A Service", "RPA & AI"]
      }
    ]
  },
  {
    id: "data-ai",
    label: "Data & AI",
    icon: Brain,
    color: "from-violet-500/10 to-purple-500/10",
    services: [
      {
        icon: Database,
        name: "Artificial Intelligence Solutions",
        description: "Process large amounts of data to derive actionable insights. Data is the strongest moat you can build around your business, making it defensible against competition.",
        features: ["Data Modernization", "Intelligent Decisioning", "AI Chatbots", "Deep Learning"]
      },
      {
        icon: Globe,
        name: "Digital Engineering Consulting",
        description: "Design the most intuitive product experiences for the digital economy. Adopting a customer-first approach, we engineer pathbreaking digital products and services.",
        features: ["Virtual Software Engineering", "In-Store Experiences", "Ed-Tech Solutions", "DevOps"]
      },
      {
        icon: Network,
        name: "Internet of Things (IoT) Solutions",
        description: "Building smart appliances and connected ecosystems. Be at the forefront of the technological utopia where devices communicate seamlessly.",
        features: ["Smart Devices", "Connected Systems", "IoT Integration", "Sensor Networks"]
      },
      {
        icon: Bot,
        name: "Chatbot Creation",
        description: "Custom AI chatbots for 24/7 support, lead qualification, and system integrations with continuous performance tuning.",
        features: ["24/7 Support", "CRM Integration", "Lead Qualification", "Conversational AI"]
      },
      {
        icon: Smartphone,
        name: "Voice Agents",
        description: "AI voice agents for inbound/outbound calls that handle inquiries, bookings and CRM‑backed personalization.",
        features: ["Call Automation", "CRM Integration", "Human‑like Voice", "Appointment Booking"]
      },
      {
        icon: Lightbulb,
        name: "AR Integration",
        description: "Augmented reality for product visualization, remote training and interactive experiences across web and mobile.",
        features: ["Product Visualization", "Remote Training", "Interactive UX", "AR SDKs"]
      },
      {
        icon: ClipboardCheck,
        name: "Google Business Review Collector System",
        description: "Automated review collection flows that guide satisfied customers to Google Business, boosting visibility and local SEO.",
        features: ["Review Funnels", "Compliance‑Safe Widgets", "Automated Redirects", "Real‑time Tracking"]
      }
    ]
  }
];

interface ServicesTabsProps {
  defaultTab?: string;
}

const ServicesTabs: React.FC<ServicesTabsProps> = ({ defaultTab = "system-technology" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-12 justify-center">
        {serviceCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeTab === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 border ${
                isActive
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                  : 'bg-secondary border-border text-muted-foreground hover:border-primary hover:text-foreground'
              }`}
            >
              <Icon size={18} strokeWidth={1.5} />
              <span className="hidden sm:inline">{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Category Header */}
            <div className="text-center mb-8">
              <motion.div 
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${activeCategory.color} flex items-center justify-center mx-auto mb-6`}
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <activeCategory.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.services.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="swiss-card p-8 h-full group hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeCategory.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <ServiceIcon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesTabs;

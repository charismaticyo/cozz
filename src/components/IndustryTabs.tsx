import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Industry {
  id: string;
  icon: LucideIcon;
  name: string;
  title: string;
  subtitle: string;
  features: { name: string; desc: string }[];
}

interface IndustryTabsProps {
  industries: Industry[];
}

export function IndustryTabs({ industries }: IndustryTabsProps) {
  const [activeTab, setActiveTab] = useState(industries[0]?.id || "");

  const activeIndustry = industries.find((i) => i.id === activeTab);

  return (
    <div className="space-y-8">
      {/* Tab Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {industries.map((industry) => {
          const IconComponent = industry.icon;
          return (
            <motion.button
              key={industry.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(industry.id)}
              className={cn(
                "industry-tab flex items-center gap-2",
                activeTab === industry.id && "active"
              )}
            >
              <IconComponent className="w-4 h-4" strokeWidth={1.5} />
              {industry.name}
            </motion.button>
          );
        })}
      </div>

      {/* Content Panel */}
      <AnimatePresence mode="wait">
        {activeIndustry && (
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="swiss-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <activeIndustry.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  {activeIndustry.title}
                </h3>
                <p className="text-muted-foreground mb-6">{activeIndustry.subtitle}</p>
                
                <div className="space-y-4">
                  {activeIndustry.features.map((feature, index) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-foreground">{feature.name}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-64 h-64 rounded-3xl bg-secondary flex items-center justify-center"
                >
                  <activeIndustry.icon className="w-24 h-24 text-primary/30" strokeWidth={1} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

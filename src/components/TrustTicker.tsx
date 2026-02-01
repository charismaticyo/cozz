import { motion } from "framer-motion";

export function TrustTicker() {
  const companies = [
    "Microsoft", "Google", "Amazon", "Spotify", "Slack", 
    "Airbnb", "Stripe", "Shopify", "Notion", "Figma",
    "Dropbox", "Zoom", "Salesforce", "HubSpot"
  ];

  return (
    <div className="ticker-wrapper py-8 relative overflow-hidden">
      <div className="flex">
        <motion.div 
          className="ticker-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div 
              key={`${company}-${index}`}
              className="ticker-item flex items-center justify-center min-w-[180px]"
            >
              <span className="text-xl font-medium text-foreground/40 tracking-wide">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function AudioVisualizer() {
  const bars = 40;
  
  return (
    <div className="flex items-end justify-center gap-[2px] h-full min-h-[100px]">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[2px] bg-foreground/80 rounded-full"
          animate={{
            height: [
              `${20 + Math.random() * 30}%`,
              `${40 + Math.random() * 50}%`,
              `${10 + Math.random() * 40}%`,
              `${30 + Math.random() * 60}%`,
            ],
          }}
          transition={{
            duration: 1 + Math.random() * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.02,
          }}
        />
      ))}
    </div>
  );
}

export function LineChart() {
  return (
    <svg 
      viewBox="0 0 200 100" 
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,80 C30,70 40,40 60,45 C80,50 90,30 110,35 C130,40 150,20 170,15 C190,10 200,25 200,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.path
        d="M0,80 C30,70 40,40 60,45 C80,50 90,30 110,35 C130,40 150,20 170,15 C190,10 200,25 200,25 L200,100 L0,100 Z"
        fill="url(#gradient)"
        className="opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AnimatedLock() {
  return (
    <motion.div
      className="relative w-20 h-20"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          className="w-10 h-10 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function CodeBlock() {
  const beforeCode = `// Legacy Code
function processData(d) {
  var result = [];
  for(var i=0; i<d.length; i++) {
    result.push(d[i] * 2);
  }
  return result;
}`;

  const afterCode = `// Modern Code
const processData = (data: number[]) => 
  data.map(item => item * 2);

// Type-safe, functional, clean`;

  return (
    <div className="grid grid-cols-2 gap-4 h-full text-xs font-mono">
      <div className="bg-secondary/50 rounded-xl p-4 overflow-hidden">
        <div className="text-muted-foreground/60 mb-2 text-[10px] uppercase tracking-wider">Before</div>
        <pre className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{beforeCode}</pre>
      </div>
      <div className="bg-primary/5 rounded-xl p-4 overflow-hidden border border-primary/20">
        <div className="text-primary mb-2 text-[10px] uppercase tracking-wider">After</div>
        <pre className="text-foreground whitespace-pre-wrap leading-relaxed">{afterCode}</pre>
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="w-32 h-64 bg-foreground rounded-3xl p-1.5 shadow-2xl">
        <div className="w-full h-full bg-card rounded-[22px] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-foreground rounded-b-xl" />
          
          {/* Screen content */}
          <div className="pt-8 px-3 pb-3 h-full">
            <div className="bg-secondary rounded-xl h-20 mb-2" />
            <div className="space-y-2">
              <div className="bg-secondary/60 rounded-lg h-4 w-3/4" />
              <div className="bg-secondary/40 rounded-lg h-3 w-1/2" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-primary/20 rounded-lg h-12" />
              <div className="bg-primary/10 rounded-lg h-12" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute -right-4 top-1/4 w-8 h-8 bg-primary rounded-lg shadow-lg"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-6 top-1/2 w-6 h-6 bg-secondary rounded-full shadow-md"
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
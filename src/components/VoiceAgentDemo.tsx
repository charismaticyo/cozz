import React, { useRef, useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface VoiceAgentDemoProps {
  audioUrl?: string;
  onClose?: () => void;
}

const VoiceAgentDemo: React.FC<VoiceAgentDemoProps> = ({ 
  audioUrl,
  onClose 
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const src = audioUrl ?? new URL('../assets/voice_agent_demo.aac', import.meta.url).href;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="flex flex-col h-full bg-secondary/50 rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">Voice Agent Demo</h3>
            <p className="text-xs text-muted-foreground">AI-powered call handling</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-lg transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent">
        {/* Phone Icon */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full h-full rounded-full flex items-center justify-center"
            >
              <Phone size={32} className="text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Status Text */}
        <div className="text-center space-y-2">
          <h4 className="text-xl font-semibold text-foreground">
            Voice Agent Call Demo
          </h4>
          <p className="text-sm text-muted-foreground">
            Hear how our AI handles real customer inquiries 24/7
          </p>
        </div>

        {/* Waveform Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isPlaying ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-16 flex items-center justify-center gap-1"
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              animate={isPlaying ? { height: ['12px', '70px', '12px'] } : { height: '12px' }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut'
              }}
              className="w-1.5 bg-blue-400 rounded-full"
            />
          ))}
        </motion.div>

        {/* Audio Player */}
        <div className="space-y-4">
          <audio
            ref={audioRef}
            controls
            className="w-full accent-blue-500 bg-secondary rounded-lg p-2"
          >
            <source src={src} type="audio/aac" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Transcript Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-secondary/40 border border-border rounded-lg p-4 max-h-48 overflow-y-auto space-y-3 text-sm leading-relaxed"
        >
          <div>
            <span className="font-semibold text-blue-400">Voice Agent (Sarah):</span>
            <p className="text-muted-foreground mt-1">
              Thank you for calling John General Physician Practice. This is Sarah. I'd be happy to help you schedule an appointment today.
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-400">Prospect (John Carter):</span>
            <p className="text-muted-foreground mt-1">
              Hi, Sarah. Could you please book an appointment for me for tomorrow at 5 p.m. for a general physician, please?
            </p>
          </div>

          <div>
            <span className="font-semibold text-blue-400">Voice Agent (Sarah):</span>
            <p className="text-muted-foreground mt-1">
              Of course, I can help with that. Can I have your full name, please?
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-400">Prospect (John Carter):</span>
            <p className="text-muted-foreground mt-1">
              My name is John Carter.
            </p>
          </div>

          <div>
            <span className="font-semibold text-blue-400">Voice Agent (Sarah):</span>
            <p className="text-muted-foreground mt-1">
              Got it, John Carter. What's the reason for your visit tomorrow?
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-400">Prospect (John Carter):</span>
            <p className="text-muted-foreground mt-1">
              It's just a normal routine checkup.
            </p>
          </div>

          <div>
            <span className="font-semibold text-blue-400">Voice Agent (Sarah):</span>
            <p className="text-muted-foreground mt-1">
              Perfect. Tomorrow works. So that would be January 3, 2026. At what time did you want again?
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-400">Prospect (John Carter):</span>
            <p className="text-muted-foreground mt-1">
              I think 5 p.m. would be fine.
            </p>
          </div>

          <div>
            <span className="font-semibold text-blue-400">Voice Agent (Sarah):</span>
            <p className="text-muted-foreground mt-1">
              All right. So just confirming, you'd like your routine checkup scheduled for January 3 at 5 p.m., right?
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-400">Prospect (John Carter):</span>
            <p className="text-muted-foreground mt-1">
              Yes, yes.
            </p>
          </div>

          <div>
            <span className="font-semibold text-blue-400">Voice Agent (Sarah):</span>
            <p className="text-muted-foreground mt-1">
              Excellent. Let me get that booked for you right now.
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-400">Prospect (John Carter):</span>
            <p className="text-muted-foreground mt-1">
              Is it booked?
            </p>
          </div>

          <div>
            <span className="font-semibold text-blue-400">Voice Agent (Sarah):</span>
            <p className="text-muted-foreground mt-1">
              Yes, it's all set. Your appointment is confirmed for January 3 at 5 p.m. for a routine checkup. You'll get a confirmation on the number ending in 5151. Is there anything else I can help you with?
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-400">Prospect (John Carter):</span>
            <p className="text-muted-foreground mt-1">
              No, I think that would be it. Thank you.
            </p>
          </div>

          <div>
            <span className="font-semibold text-blue-400">Voice Agent (Sarah):</span>
            <p className="text-muted-foreground mt-1">
              You're very welcome, John. Thanks for calling and have a great day. Bye.
            </p>
          </div>
        </motion.div>

        {/* Info Box */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
          <p className="text-xs text-blue-400">
            ✓ 24/7 Availability | ✓ Multi-language Support | ✓ CRM Integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgentDemo;

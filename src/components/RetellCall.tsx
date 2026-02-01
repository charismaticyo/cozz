import React, { useEffect, useState, useRef } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, PhoneOff, Loader2, Volume2, AlertCircle, User, Bot } from "lucide-react";

// Initialize client
const retellWebClient = new RetellWebClient();

interface Message {
    role: 'agent' | 'user';
    content: string;
}

export const RetellCall = () => {
    const [isCalling, setIsCalling] = useState(false);
    const [isInitializing, setIsInitializing] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [error, setError] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        // Event handlers
        const onCallStarted = () => {
            console.log("Call started");
            setIsCalling(true);
            setIsInitializing(false);
            setError(null);
            setMessages([]); // Clear old messages
        };

        const onCallEnded = () => {
            console.log("Call ended");
            setIsCalling(false);
            setIsInitializing(false);
        };

        const onUpdate = (update: any) => {
            // Handle transcript update
            if (update.transcript) {
                let newMessages = update.transcript;

                // Ensure it's an array
                if (typeof newMessages === 'string') {
                    // Try to parse if it's a JSON string
                    try {
                        if (newMessages.trim().startsWith('[')) {
                            newMessages = JSON.parse(newMessages);
                        }
                    } catch (e) {
                        console.error("Failed to parse transcript string", e);
                    }
                }

                if (Array.isArray(newMessages)) {
                    setMessages(newMessages);
                } else if (typeof newMessages === 'object') {
                    // Single message object?
                    setMessages([newMessages]);
                }
            }
        };

        const onError = (err: any) => {
            console.error("Voice Error:", err);
            setError("An error occurred. Please try again.");
            setIsCalling(false);
            setIsInitializing(false);
        };

        // Register listeners
        retellWebClient.on("call_started", onCallStarted);
        retellWebClient.on("call_ended", onCallEnded);
        retellWebClient.on("update", onUpdate);
        retellWebClient.on("error", onError);

        return () => {
            // Cleanup
            retellWebClient.off("call_started", onCallStarted);
            retellWebClient.off("call_ended", onCallEnded);
            retellWebClient.off("update", onUpdate);
            retellWebClient.off("error", onError);
            retellWebClient.stopCall();
        };
    }, []);

    const startCall = async () => {
        setIsInitializing(true);
        setError(null);
        setMessages([]);

        try {
            const response = await fetch("http://localhost:3000/create-web-call", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Failed to start call (Backend)");
            }

            const data = await response.json();
            if (!data.access_token) {
                throw new Error("No access token received");
            }

            await retellWebClient.startCall({
                accessToken: data.access_token,
            });

        } catch (err: any) {
            console.error(err);
            setError(err.message || "Failed to connect");
            setIsInitializing(false);
        }
    };

    const stopCall = () => {
        retellWebClient.stopCall();
        setIsCalling(false);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Glassmorphism Card with Noise Texture */}
            <div
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-12 transition-all duration-700 hover:shadow-primary/5 group"
            >
                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />

                {/* Gradient Orbs */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />

                {/* Header / Intro */}
                <div className="relative z-10 text-center mb-12">
                    {!isCalling && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent border border-white/5 mb-2 shadow-inner">
                                <Mic className="w-6 h-6 text-white/80" />
                            </div>
                            <h3 className="text-4xl font-serif text-white tracking-tight">
                                Voice Interface
                            </h3>
                            <p className="text-white/40 text-sm font-mono tracking-wider uppercase">
                                Advanced Neural Voice
                            </p>
                        </motion.div>
                    )}

                    {isCalling && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-green-500/10 text-green-400 border border-green-500/20 uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                System Active
                            </span>
                        </motion.div>
                    )}
                </div>

                {/* Waveform Visualizer */}
                <div className="h-32 flex items-center justify-center mb-12 relative z-10">
                    {isCalling ? (
                        <div className="flex items-center gap-2 h-full">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-gradient-to-t from-primary/40 via-primary to-primary/40 rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                                    animate={{
                                        height: ["15%", "60%", "15%"],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        delay: i * 0.08,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        height: "15%"
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center">
                            <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </div>
                    )}
                </div>

                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, scale: 0.95 }}
                            animate={{ height: "auto", opacity: 1, scale: 1 }}
                            exit={{ height: 0, opacity: 0, scale: 0.95 }}
                            className="mb-8 relative z-10"
                        >
                            <div className="bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-mono p-4 rounded-lg flex items-center justify-center gap-3">
                                <AlertCircle className="w-4 h-4" />
                                <span>{error}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Controls */}
                <div className="relative z-10 flex justify-center">
                    {!isCalling ? (
                        <button
                            onClick={startCall}
                            disabled={isInitializing}
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative flex items-center gap-3">
                                {isInitializing ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span className="font-mono text-sm uppercase tracking-wide">Initializing system...</span>
                                    </>
                                ) : (
                                    <>
                                        <Mic className="w-4 h-4" />
                                        <span className="font-mono text-sm uppercase tracking-wide">Initiate Call</span>
                                    </>
                                )}
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={stopCall}
                            className="group relative px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium transition-all hover:bg-white/5 hover:border-white/40 active:scale-95"
                        >
                            <span className="relative flex items-center gap-3">
                                <PhoneOff className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors" />
                                <span className="font-mono text-sm uppercase tracking-wide">Terminate Session</span>
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

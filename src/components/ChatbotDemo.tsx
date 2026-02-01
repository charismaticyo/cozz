import React, { useState, useEffect, useRef } from 'react';
import { Message, Role } from '@/types/chat';
import { generateResponse } from '@/services/chatbotService';
import { isRateLimited, incrementMessageCount, getRemainingMessages } from '@/utils/chatRateLimiter';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatbotDemoProps {
  onClose?: () => void;
}

const ChatbotDemo: React.FC<ChatbotDemoProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: Role.MODEL,
      content: "👋 Welcome! I'm the Komz Consulting Chatbot. I'm here to answer questions about our services, expertise, and how we can help transform your business. Feel free to ask me anything!",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [remaining, setRemaining] = useState(getRemainingMessages());
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      setTimeout(() => {
        messagesContainerRef.current!.scrollTop = messagesContainerRef.current!.scrollHeight;
      }, 0);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (content: string) => {
    if (isRateLimited()) {
      setError("You've reached the message limit for this demo. Please try again in an hour.");
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: Role.USER,
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const responseText = await generateResponse(messages, content);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: Role.MODEL,
        content: responseText || "I apologize, but I couldn't generate a response. Please try again.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      incrementMessageCount();
      setRemaining(getRemainingMessages());
    } catch (err: any) {
      setError(err.message || "An error occurred while processing your message. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-secondary/50 rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">Komz Consulting Bot</h3>
            <p className="text-xs text-muted-foreground">Always available to help</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-lg transition-colors"
          >
            <X size={18} className="text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Messages Container */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ChatMessage message={message} />
            </motion.div>
          ))}
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-start"
            >
              <div className="px-4 py-3 rounded-xl rounded-tl-none bg-cyan-500/10 border border-cyan-500/20">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mx-4 mb-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-gap-2 gap-2"
        >
          <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-500">{error}</p>
        </motion.div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-secondary/30 border-t border-border backdrop-blur-sm">
        <ChatInput 
          onSendMessage={handleSendMessage} 
          disabled={isLoading}
          placeholder="Ask me anything about our services..."
        />
      </div>
    </div>
  );
};

export default ChatbotDemo;

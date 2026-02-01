import React, { useState, useRef, useEffect } from 'react';
import { sanitizeInput } from '@/utils/chatSanitizer';
import { Send, Loader } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  disabled: boolean;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled, placeholder }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const sanitized = sanitizeInput(input);
    if (sanitized && !disabled) {
      onSendMessage(sanitized);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e as any);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-end gap-2 p-2 bg-secondary border border-border rounded-xl shadow-sm transition-all duration-300 focus-within:border-primary focus-within:shadow-md">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={disabled ? "Service is temporarily unavailable" : (placeholder || "Ask about our services...")}
            disabled={disabled}
            className="w-full bg-transparent border-none rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:ring-0 focus:outline-none transition-all resize-none min-h-[40px] max-h-[120px]"
            rows={1}
          />
        </div>

        {/* Send Button */}
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 flex-shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
        >
          {disabled ? (
            <Loader size={18} className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatInput;

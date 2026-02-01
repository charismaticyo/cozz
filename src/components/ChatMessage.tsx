import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Message, Role } from '@/types/chat';
import { Bot, UserRound } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  return (
    <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[90%] md:max-w-[600px] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl mt-1 border transition-all duration-300 ${
          isUser 
            ? 'ml-3 bg-indigo-500/10 border-indigo-500/30 text-indigo-400' 
            : 'mr-3 bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
        }`}>
          {isUser ? (
            <UserRound size={16} />
          ) : (
            <Bot size={16} />
          )}
        </div>
        
        {/* Message Bubble */}
        <div className={`px-4 py-3 rounded-xl transition-all duration-300 ${
          isUser 
            ? 'rounded-tr-none bg-indigo-500/10 border border-indigo-500/20 text-foreground' 
            : 'rounded-tl-none bg-cyan-500/10 border border-cyan-500/20 text-foreground'
        }`}>
          <div className="prose prose-sm max-w-none prose-p:m-0 prose-p:leading-relaxed prose-headings:text-base prose-headings:font-semibold prose-strong:text-cyan-400 prose-code:text-indigo-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          </div>
          
          {/* Timestamp */}
          <div className={`text-[10px] opacity-50 mt-2 ${isUser ? 'text-right' : 'text-left'}`}>
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

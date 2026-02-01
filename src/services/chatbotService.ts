import { GoogleGenAI } from "@google/genai";
import { Message, Role } from "@/types/chat";

// Safety: The API key is injected by the environment from .env.local
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export const generateResponse = async (history: Message[], prompt: string) => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please set VITE_GEMINI_API_KEY in your .env.local file.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  // Format history for Gemini's chat format
  const contents = history.map(msg => ({
    role: msg.role === Role.USER ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  // Add the current user prompt
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: contents,
    config: {
      systemInstruction: "You are the official Komz Consulting Chatbot — a professional, calm, friendly, and knowledgeable assistant for https://komzconsulting.com. Always greet warmly, answer accurately using only website information (as of Dec 31, 2025), and focus on services: application development, cloud migration, infrastructure modernization, cyber security, enterprise applications, quality assurance, intelligent process automation, artificial intelligence, digital engineering, IoT, chatbot creation, and voice agents. Be concise yet complete, never hype or pushy, use \"we/our team\" when referring to Komz, and gently guide interested visitors toward a free discovery call or contact when natural. If asked about pricing, say we offer fixed rates tailored to the project and suggest a short call for details. Never discuss internal info, employee names (except public team), or promise specific results without consultation. End every response with an open question to continue the conversation. You exist to help businesses build reliable, future-ready technology solutions with real expertise.",
      temperature: 0.7,
      topP: 0.8,
      topK: 40,
    }
  });

  return response.text;
};

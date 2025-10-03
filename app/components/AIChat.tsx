'use client';

import { useState, useRef, useEffect } from 'react';
import { queryReignAI } from '../lib/mcpClient';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

const prompts = [
  'Which employees are ready for a promotion?',
  'Who deserves a wage increase?',
  'What improvements can I make to my team arrangements?',
  'Who has the highest skill levels in welding?',
];

export default function AIChat() {
  const [useMCPMode, setUseMCPMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm R.E.I.G.N.'s AI assistant. Ask me about employee promotions, wage increases, team optimization, or skill analysis. I'll provide data-driven insights based on verified hours and skill progression.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = input;
    setInput('');
    setIsTyping(true);

    try {
      // Query through API (Claude or MCP based on toggle)
      const responseContent = await queryReignAI(query, useMCPMode);

      const aiResponse: Message = {
        role: 'assistant',
        content: responseContent,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="flex flex-col h-[600px] bg-black/50 backdrop-blur-sm rounded-2xl border-2 border-purple-500/10 overflow-hidden shadow-xl shadow-black/70">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 border-b border-purple-500/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full animate-pulse ${useMCPMode ? 'bg-cyan-400' : 'bg-green-400'}`}></div>
            <div>
              <h3 className="text-white font-bold">R.E.I.G.N. AI Assistant</h3>
              <p className="text-purple-100 text-xs">
                {useMCPMode ? 'Connected to Live MCP Server' : 'Demo Mode - Powered by Claude AI'}
              </p>
            </div>
          </div>
          
          {/* MCP Toggle */}
          <button
            onClick={() => {
              const newMode = !useMCPMode;
              setUseMCPMode(newMode);
              setMessages((prev) => [
                ...prev,
                {
                  role: 'system',
                  content: newMode 
                    ? '🔗 Switched to Live MCP Server. Querying real REIGN workforce data.'
                    : '🎭 Switched to Demo Mode. Using Claude AI with sample data.',
                  timestamp: new Date(),
                },
              ]);
            }}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-xs font-medium text-white transition-all border border-white/20"
          >
            <div className={`w-10 h-5 rounded-full relative transition-all ${useMCPMode ? 'bg-cyan-500' : 'bg-slate-600'}`}>
              <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${useMCPMode ? 'left-5' : 'left-0.5'}`}></div>
            </div>
            <span>{useMCPMode ? 'MCP' : 'Demo'}</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : message.role === 'system'
                  ? 'bg-cyan-900/30 backdrop-blur-sm text-cyan-200 border border-cyan-500/30'
                  : 'bg-slate-700/50 backdrop-blur-sm text-gray-200 border border-slate-600/50'
              }`}
            >
              <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
              <p className="text-xs opacity-60 mt-2">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-700/50 backdrop-blur-sm text-gray-200 border border-slate-600/50 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts */}
      {messages.length <= 1 && (
        <div className="px-6 pb-3">
          <p className="text-xs text-gray-400 mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {prompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptClick(prompt)}
                className="text-xs px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-full border border-purple-500/30 transition-all hover:scale-105"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-slate-900/50 border-t border-slate-700/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about promotions, skills, team performance..."
            className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}


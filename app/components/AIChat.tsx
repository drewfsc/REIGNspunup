'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface EmployeeData {
  name: string;
  role: string;
  skills: { name: string; hours: number; level: number }[];
  totalHours: number;
  promotionReady: boolean;
  wageIncreaseReady: boolean;
}

// Mock employee data
const mockEmployees: EmployeeData[] = [
  {
    name: 'Marcus Thompson',
    role: 'Senior Welder',
    skills: [
      { name: 'MIG Welding', hours: 2450, level: 5 },
      { name: 'TIG Welding', hours: 1850, level: 4 },
      { name: 'Safety Protocols', hours: 980, level: 5 },
    ],
    totalHours: 5280,
    promotionReady: true,
    wageIncreaseReady: true,
  },
  {
    name: 'Sofia Martinez',
    role: 'Project Coordinator',
    skills: [
      { name: 'Project Management', hours: 1920, level: 4 },
      { name: 'Team Leadership', hours: 1650, level: 4 },
      { name: 'Budget Analysis', hours: 890, level: 3 },
    ],
    totalHours: 4460,
    promotionReady: true,
    wageIncreaseReady: false,
  },
  {
    name: 'Jordan Kim',
    role: 'Quality Inspector',
    skills: [
      { name: 'Quality Assurance', hours: 1240, level: 3 },
      { name: 'Documentation', hours: 680, level: 3 },
      { name: 'Technical Writing', hours: 420, level: 2 },
    ],
    totalHours: 2340,
    promotionReady: false,
    wageIncreaseReady: false,
  },
];

const prompts = [
  'Which employees are ready for a promotion?',
  'Who deserves a wage increase?',
  'What improvements can I make to my team arrangements?',
  'Who has the highest skill levels in welding?',
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm R.E.I.G.N.'s AI assistant. Ask me about your team's skills, promotions, or performance insights. Try asking about promotions or wage increases!",
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

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('promotion')) {
      const ready = mockEmployees.filter((e) => e.promotionReady);
      return `Based on verified hours and skill progression, **${ready.length} employees** are ready for promotion:\n\n${ready
        .map(
          (e) =>
            `• **${e.name}** (${e.role})\n  - ${e.totalHours.toLocaleString()} total verified hours\n  - Peak skills: ${e.skills[0].name} (Level ${e.skills[0].level})\n  - Recommendation: Ready for advancement`
        )
        .join('\n\n')}`;
    }

    if (lowerQuery.includes('wage') || lowerQuery.includes('raise') || lowerQuery.includes('increase')) {
      const ready = mockEmployees.filter((e) => e.wageIncreaseReady);
      return `Analysis shows **${ready.length} employee${ready.length > 1 ? 's' : ''}** have met criteria for wage increases:\n\n${ready
        .map(
          (e) =>
            `• **${e.name}**\n  - ${e.skills.filter((s) => s.level >= 4).length} skills at Level 4+\n  - ${e.totalHours.toLocaleString()} verified hours\n  - Suggested increase: 8-12% based on skill progression`
        )
        .join('\n\n')}`;
    }

    if (lowerQuery.includes('team') || lowerQuery.includes('arrangement') || lowerQuery.includes('improvement')) {
      return `**Team Optimization Insights:**\n\n**Skill Coverage Analysis:**\n• Welding expertise: Strong (Marcus at Level 5)\n• Project management: Growing (Sofia at Level 4)\n• Quality control: Developing (Jordan at Level 3)\n\n**Recommendations:**\n1. Cross-train Jordan in advanced welding (480 hours to Level 4)\n2. Pair Sofia with senior PM for leadership development\n3. Consider Marcus for mentor role - proven expertise\n\n**Diversity & Balance:** Your team shows strong skill distribution with clear growth paths for each member.`;
    }

    if (lowerQuery.includes('welding') || lowerQuery.includes('skill')) {
      const welders = mockEmployees.filter((e) => e.skills.some((s) => s.name.includes('Welding')));
      return `**Welding Skill Analysis:**\n\n${welders
        .map(
          (e) => {
            const weldingSkills = e.skills.filter((s) => s.name.includes('Welding'));
            return `• **${e.name}**\n${weldingSkills
              .map((s) => `  - ${s.name}: ${s.hours} hours (Level ${s.level})`)
              .join('\n')}`;
          }
        )
        .join('\n\n')}\n\n**Top performer:** Marcus Thompson with 4,300+ welding hours across MIG and TIG.`;
    }

    return `Great question! R.E.I.G.N.'s AI analyzes **verified time-punch data**, **skill progression**, and **performance metrics** to provide unbiased insights.\n\nTry asking about:\n• Employee promotions\n• Wage increases\n• Team improvements\n• Specific skills`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: generateResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="flex flex-col h-[600px] bg-black/50 backdrop-blur-sm rounded-2xl border-2 border-purple-500/10 overflow-hidden shadow-xl shadow-black/70">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 border-b border-purple-500/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div>
            <h3 className="text-white font-bold">R.E.I.G.N. AI Assistant</h3>
            <p className="text-purple-100 text-xs">Powered by GPT, Gemini & Grok</p>
          </div>
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


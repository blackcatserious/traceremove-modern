'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  MessageCircle, 
  MinusIcon,
  HelpCircle,
  Search,
  Navigation,
  Book,
  Settings,
  Volume2,
  VolumeX
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AICatAssistantProps {
  className?: string;
}

// Cat animation states
const catStates = {
  idle: "M12 6c1.5 0 3 1.5 3 3.5S13.5 13 12 13s-3-1.5-3-3.5S10.5 6 12 6zm-6 8c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5c0 1.5-.5 2.5-1.5 3.5-.5.5-1 .8-1.5 1-.5.2-1 .3-1.5.3h-2c-.5 0-1-.1-1.5-.3-.5-.2-1-.5-1.5-1C6.5 16.5 6 15.5 6 14z",
  talking: "M12 6c1.5 0 3 1.5 3 3.5S13.5 13 12 13s-3-1.5-3-3.5S10.5 6 12 6zm-2 4.5c0 .5.2 1 .5 1.3.3.3.8.5 1.3.5s1-.2 1.3-.5c.3-.3.5-.8.5-1.3s-.2-1-.5-1.3c-.3-.3-.8-.5-1.3-.5s-1 .2-1.3.5c-.3.3-.5.8-.5 1.3z",
  happy: "M12 6c1.5 0 3 1.5 3 3.5S13.5 13 12 13s-3-1.5-3-3.5S10.5 6 12 6zm-1 4c0 .3.1.5.3.7.2.2.4.3.7.3s.5-.1.7-.3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3c-.2.2-.3.4-.3.7z"
};

const predefinedResponses: Record<string, string> = {
  "hello": "Meow! 🐱 Welcome to Traceremove Research! I'm your AI assistant cat. How can I help you navigate our research platform today?",
  "research": "Our research focuses on AI ethics, privacy-preserving technologies, and agentic systems. Check out our Research section for detailed papers and findings! 📚",
  "tools": "We have amazing interactive tools including an AI Research Dashboard, Semantic Search, and Privacy Score Calculator. Visit our Tools section! 🛠️",
  "contact": "You can reach out through our Contact page, or connect with us on our academic networks. We love collaborating! 📬",
  "about": "Traceremove is led by Artur Ziganshin, an AI researcher focused on ethical AI development. Learn more in our About section! 👨‍🎓",
  "help": "I can help you navigate the site, answer questions about our research, explain our tools, or provide general information. Just ask me anything! 💭",
  "navigation": "Use the main navigation menu to explore Research (11 areas), Projects (7 active), Tools (7 interactive), Academic resources, and Articles. Need help finding something specific? 🧭",
  "default": "That's an interesting question! 🤔 While I'm still learning, I can help you navigate our research platform. Try asking about our research areas, tools, or how to get started!"
};

export default function AICatAssistant({ className = '' }: AICatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [catState, setCatState] = useState<keyof typeof catStates>('idle');
  const [isTyping, setIsTyping] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Meow! 🐱 I'm your AI research assistant. I can help you navigate our platform, answer questions about AI ethics, or explain our research tools. What would you like to know?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      setCatState('happy');
      setTimeout(() => setCatState('idle'), 2000);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setCatState('talking');

    // Simple AI response logic
    setTimeout(() => {
      const response = generateResponse(inputText.toLowerCase());
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      setCatState('happy');
      setTimeout(() => setCatState('idle'), 2000);
    }, 1000 + Math.random() * 1000); // Simulate thinking time
  };

  const generateResponse = (input: string): string => {
    // Simple keyword matching for demo purposes
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (keyword !== 'default' && input.includes(keyword)) {
        return response;
      }
    }

    // Context-aware responses based on current page
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.includes('/research') && !input.includes('research')) {
        return `I see you're exploring our research! ${predefinedResponses.research}`;
      }
      if (pathname.includes('/tools') && !input.includes('tools')) {
        return `You're checking out our tools section! ${predefinedResponses.tools}`;
      }
    }

    return predefinedResponses.default;
  };

  const quickActions = [
    { icon: HelpCircle, label: "Help", action: () => setInputText("help") },
    { icon: Search, label: "Search", action: () => setInputText("tools") },
    { icon: Navigation, label: "Navigate", action: () => setInputText("navigation") },
    { icon: Book, label: "Research", action: () => setInputText("research") }
  ];

  return (
    <>
      {/* Main Cat Assistant */}
      <motion.div
        className={`fixed bottom-6 right-6 z-50 ${className}`}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        {/* Chat Interface */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: isMinimized ? 0.9 : 1, 
                y: 0,
                height: isMinimized ? 60 : 400 
              }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="absolute bottom-20 right-0 w-80 bg-white/95 backdrop-blur-xl border border-purple-200/50 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-b border-purple-200/30">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🐱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">AI Cat Assistant</h3>
                    <p className="text-xs text-gray-600">
                      {isTyping ? "Typing..." : "Online"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                    className="p-1.5 rounded-lg hover:bg-purple-100/50 transition-colors"
                    aria-label={isSoundEnabled ? "Mute sounds" : "Enable sounds"}
                  >
                    {isSoundEnabled ? (
                      <Volume2 className="w-4 h-4 text-gray-600" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 rounded-lg hover:bg-purple-100/50 transition-colors"
                    aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                  >
                    <MinusIcon className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-red-100/50 transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Chat Content */}
              {!isMinimized && (
                <>
                  {/* Messages Area */}
                  <div className="h-64 overflow-y-auto p-4 space-y-3">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                            message.isUser
                              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing Indicator */}
                    <AnimatePresence>
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex justify-start"
                        >
                          <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions */}
                  <div className="px-4 py-2 border-t border-gray-200/50">
                    <div className="flex justify-center space-x-2">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={action.action}
                          className="p-2 rounded-lg hover:bg-purple-100/50 transition-colors group"
                          title={action.label}
                        >
                          <action.icon className="w-4 h-4 text-gray-600 group-hover:text-purple-600" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="p-4 border-t border-gray-200/50">
                    <div className="flex space-x-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask me anything..."
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-300 text-sm"
                        aria-label="Type your message"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim()}
                        className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cat Avatar Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/30 flex items-center justify-center hover:shadow-purple-500/40 transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: isOpen ? 0 : [0, -4, 0],
          }}
          transition={{ 
            y: { 
              repeat: isOpen ? 0 : Infinity, 
              duration: 2,
              ease: "easeInOut"
            }
          }}
          aria-label="Open AI Assistant Chat"
        >
          {/* Animated Cat SVG */}
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
            animate={{
              scale: catState === 'talking' ? [1, 1.1, 1] : 1,
            }}
            transition={{
              scale: { repeat: catState === 'talking' ? Infinity : 0, duration: 0.8 }
            }}
          >
            {/* Cat ears */}
            <path
              d="M8 6L10 4L12 6L14 4L16 6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Cat face */}
            <circle
              cx="12"
              cy="12"
              r="6"
              fill="currentColor"
              opacity="0.8"
            />
            {/* Cat eyes */}
            <circle
              cx="10"
              cy="10"
              r="1.5"
              fill="white"
              opacity={catState === 'happy' ? "0.9" : "0.7"}
            />
            <circle
              cx="14"
              cy="10"
              r="1.5"
              fill="white"
              opacity={catState === 'happy' ? "0.9" : "0.7"}
            />
            {/* Cat nose */}
            <path
              d="M12 13L11 14L13 14Z"
              fill="white"
              opacity="0.9"
            />
            {/* Cat mouth */}
            <path
              d="M10 15Q12 17 14 15"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              opacity={catState === 'happy' ? "1" : "0.7"}
            />
            {/* Cat whiskers */}
            <path
              d="M6 11L8 12M6 13L8 13M16 12L18 11M16 13L18 13"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.8"
            />
          </motion.svg>

          {/* Notification dot */}
          {!isOpen && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <MessageCircle className="w-2.5 h-2.5 text-white" />
            </motion.div>
          )}
        </motion.button>

        {/* Pulsing ring effect */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.7, 0, 0.7] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut" 
            }}
          />
        )}
      </motion.div>

      {/* Accessibility announcement for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isOpen ? "AI Assistant chat is open" : "AI Assistant is available"}
      </div>
    </>
  );
}
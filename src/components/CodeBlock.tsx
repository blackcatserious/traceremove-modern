'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import PremiumButton from '@/components/PremiumButton';

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export default function CodeBlock({ code, language, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`bg-gray-900 rounded-xl shadow-soft border border-gray-200 overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-sm font-medium text-gray-300 capitalize">{language}</span>
        <PremiumButton
          onClick={copyToClipboard}
          variant="ghost"
          size="sm"
          icon={copied ? Check : Copy}
          iconPosition="left"
          className="text-xs"
        >
          {copied ? 'Copied!' : 'Copy'}
        </PremiumButton>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
          showLineNumbers={true}
          lineNumberStyle={{
            color: '#6B7280',
            fontSize: '12px',
            paddingRight: '1rem',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

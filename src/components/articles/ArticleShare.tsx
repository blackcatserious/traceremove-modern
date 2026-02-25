'use client';

import { useEffect, useMemo, useState } from 'react';

type Props = {
  title: string;
};

export default function ArticleShare({ title }: Props) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = useMemo(() => encodeURIComponent(currentUrl), [currentUrl]);
  const encodedTitle = useMemo(() => encodeURIComponent(title), [title]);

  const handleCopy = async () => {
    if (!currentUrl) return;
    await navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-10 border-t border-slate-200 pt-6">
      <p className="mb-3 text-sm font-medium text-[#16213e]">Share this article</p>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-slate-100 px-3 py-2 text-[#1a1a2e] hover:bg-slate-200"
        >
          Twitter/X
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-slate-100 px-3 py-2 text-[#1a1a2e] hover:bg-slate-200"
        >
          LinkedIn
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md bg-slate-100 px-3 py-2 text-[#1a1a2e] hover:bg-slate-200"
        >
          {copied ? 'Copied!' : 'Copy link'}
        </button>
      </div>
    </div>
  );
}

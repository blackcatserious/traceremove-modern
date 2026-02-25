'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { ArticleRecord } from '@/lib/articles';

type Props = {
  articles: ArticleRecord[];
};

export default function ArticlesListingClient({ articles }: Props) {
  const [activeTag, setActiveTag] = useState<string>('All');

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    for (const article of articles) {
      for (const tag of article.tags) {
        allTags.add(tag);
      }
    }
    return ['All', ...Array.from(allTags).sort()];
  }, [articles]);

  const visibleArticles = useMemo(() => {
    if (activeTag === 'All') {
      return articles;
    }
    return articles.filter((article) => article.tags.includes(activeTag));
  }, [activeTag, articles]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === tag
                ? 'bg-[#0f3460] text-white'
                : 'bg-slate-100 text-[#1a1a2e] hover:bg-slate-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visibleArticles.map((article) => (
          <article
            key={article.slug}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {article.coverImage ? (
              <div className="relative h-44 w-full">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : null}

            <div className="space-y-3 p-5">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US')}</time>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>

              <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                <Link href={`/articles/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>

              <p className="text-sm text-[#1a1a2e]">
                {article.excerpt.slice(0, 160)}{article.excerpt.length > 160 ? '…' : ''}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {article.tags.map((tag) => (
                  <span
                    key={`${article.slug}-${tag}`}
                    className="rounded-full bg-[#e8eef7] px-2.5 py-1 text-xs text-[#0f3460]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

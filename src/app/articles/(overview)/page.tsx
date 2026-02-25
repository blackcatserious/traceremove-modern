import type { Metadata } from 'next';

import ArticlesListingClient from '@/components/articles/ArticlesListingClient';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Long-form writing on epistemic risks, language models, and ethical AI architecture.',
};

export default async function ArticlesOverviewPage() {
  const articles = await getAllArticles();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
      <header className="mb-8 space-y-3">
        <h1 className="text-4xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
          Articles
        </h1>
        <p className="max-w-3xl text-base text-[#1a1a2e]">
          Essays, research notes, and critical reflections on AI philosophy, governance, and model evaluation.
        </p>
      </header>

      <ArticlesListingClient articles={articles} />
    </div>
  );
}

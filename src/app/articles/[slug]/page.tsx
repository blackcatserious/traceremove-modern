import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import ArticleShare from '@/components/articles/ArticleShare';
import ReadingProgress from '@/components/articles/ReadingProgress';
import { mdxComponents } from '@/components/mdx/mdxComponents';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || !article.published) {
    notFound();
  }

  const allArticles = await getAllArticles();
  const related = getRelatedArticles(article, allArticles);

  const { content } = await compileMDX({
    source: article.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypeHighlight],
      },
    },
    components: mdxComponents,
  });

  return (
    <>
      <ReadingProgress />
      <article className="mx-auto w-full max-w-[720px] px-4 pb-24 pt-6 sm:px-6 lg:px-0">
        <Link href="/articles" className="text-sm text-[#0f3460] underline underline-offset-4 hover:text-[#e94560]">
          ← Back to articles
        </Link>

        <header className="mt-4 space-y-3 border-b border-slate-200 pb-6">
          <h1 className="text-4xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US')}</time>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#e8eef7] px-2.5 py-1 text-xs text-[#0f3460]">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="article-content mt-8 text-[18px] leading-[1.7] text-[#1a1a2e]"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {content}
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-[#16213e]">Subscribe to newsletter</h2>
          <p className="mt-2 text-sm text-[#1a1a2e]">Get new essays and publication notes directly via Substack.</p>
          <a
            href="https://substack.com"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-md bg-[#0f3460] px-4 py-2 text-sm font-medium text-white hover:bg-[#16213e]"
          >
            Subscribe on Substack
          </a>
        </div>

        <ArticleShare title={article.title} />

        {related.length > 0 ? (
          <section className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-semibold text-[#16213e]" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              Related articles
            </h2>
            <div className="mt-4 space-y-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/articles/${item.slug}`}
                  className="block rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50"
                >
                  <p className="font-medium text-[#16213e]">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.excerpt.slice(0, 120)}…</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}

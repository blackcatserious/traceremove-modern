import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

export type ArticleFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
  readingTime: string;
  published: boolean;
};

export type ArticleRecord = ArticleFrontmatter & {
  slug: string;
  content: string;
};

async function readArticleFile(fileName: string): Promise<ArticleRecord> {
  const slug = fileName.replace(/\.mdx$/, '');
  const fullPath = path.join(articlesDirectory, fileName);
  const raw = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(raw);

  const frontmatter = data as Partial<ArticleFrontmatter>;

  return {
    slug,
    title: frontmatter.title ?? slug,
    date: frontmatter.date ?? new Date().toISOString(),
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    excerpt: frontmatter.excerpt ?? '',
    coverImage: frontmatter.coverImage,
    readingTime: frontmatter.readingTime ?? '5 min',
    published: frontmatter.published ?? false,
    content,
  };
}

export async function getAllArticles(): Promise<ArticleRecord[]> {
  const files = await fs.readdir(articlesDirectory);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

  const records = await Promise.all(mdxFiles.map(readArticleFile));

  return records
    .filter((article) => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<ArticleRecord | null> {
  try {
    return await readArticleFile(`${slug}.mdx`);
  } catch {
    return null;
  }
}

export function getRelatedArticles(target: ArticleRecord, articles: ArticleRecord[]): ArticleRecord[] {
  const targetTags = new Set(target.tags);

  return articles
    .filter((article) => article.slug !== target.slug)
    .map((article) => ({
      article,
      score: article.tags.reduce((count, tag) => (targetTags.has(tag) ? count + 1 : count), 0),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.article);
}

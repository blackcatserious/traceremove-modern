import type { KnowledgeEntry } from './knowledgeBase';

export type KnowledgeBaseApiResponse = {
  query: string;
  category: string | null;
  total: number;
  returned: number;
  categories: Record<string, number>;
  resultCategories: Record<string, number>;
  entries: KnowledgeEntry[];
};

export type KnowledgeSnapshot = {
  entries: KnowledgeEntry[];
  total: number;
  returned: number;
  categories: string[];
  categoryCounts: Record<string, number>;
  resultCounts: Record<string, number>;
  dataSource: 'api' | 'fallback';
  error?: string | null;
};

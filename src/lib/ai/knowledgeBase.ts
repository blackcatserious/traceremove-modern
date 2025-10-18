import type { AIGenerateRequest, AIGenerateResponse, AIMessage } from './types';

export type KnowledgeQuickPrompt = {
  label: string;
  prompt: string;
};

export type KnowledgeEntry = {
  id: string;
  title: string;
  summary: string;
  category: string;
  keywords: string[];
  metrics: string[];
  toolchain: string[];
  playbooks: string[];
  followUps: string[];
  quickPrompts: KnowledgeQuickPrompt[];
  cta: { label: string; href: string };
  accent: string;
};

const KNOWLEDGE_BASE: ReadonlyArray<KnowledgeEntry> = [
  {
    id: 'metrics-and-observability',
    title: 'Metrics instrumentation & observability stack',
    category: 'Metrics & Observability',
    summary:
      'Traceremove captures every experiment, user journey, and deployment with layered telemetry: ingestion at the edge, model health probes, and product impact dashboards that drive weekly governance.',
    keywords: [
      'metric',
      'metrics',
      'analytics',
      'observability',
      'telemetry',
      'kpi',
      'dashboard',
      'measurement',
      'monitoring',
    ],
    metrics: [
      'North-star signals: mission engagement rate, completion velocity, ethical compliance index.',
      'Model health: drift delta under 1.5%, latency budget at sub-120ms p95 across assistants.',
      'Business impact: attributable revenue lift dashboards segmented by client region and blueprint.',
    ],
    toolchain: [
      'Unified telemetry lake synthesised from Atlas blueprints, Snowflake marts, and streaming feature stores.',
      'Motion-aware dashboards rendered through the cinematic hero scenes and exported to OKR reviews.',
      'Automated alerts routed into Traceremove Ops Center with playbook links for on-call engineers.',
    ],
    playbooks: [
      'Stand up metrics councils with weekly review cadences and automated variance annotations.',
      'Instrument feature toggles with experiment IDs so product, research, and compliance teams share lineage.',
      'Pair every KPI with a guardrail metric to keep Atlas-driven growth aligned with responsible AI mandates.',
    ],
    followUps: [
      'How do we extend the observability lake to a new geographic region?',
      'What KPIs gate promotion of an experimental algorithm into production?',
      'How are ethical guardrails encoded into the telemetry pipeline?',
    ],
    quickPrompts: [
      {
        label: 'Deploy the KPI ritual',
        prompt: 'Walk me through the KPI governance ritual that keeps Traceremove dashboards accountable.',
      },
      {
        label: 'Extend telemetry',
        prompt: 'How does Traceremove expand its observability lake into a new region while preserving compliance?',
      },
    ],
    cta: { label: 'View metrics playbook', href: '/research/big-data-interpretability' },
    accent: 'from-sky-500 via-indigo-500 to-purple-500',
  },
  {
    id: 'algorithms-and-evaluation',
    title: 'Algorithm experimentation & evaluation loops',
    category: 'Algorithms & Evaluation',
    summary:
      'Every algorithm lives inside Atlas blueprints with end-to-end evaluation: dataset provenance, automated benchmarking, human-in-the-loop review, and deployment readiness scoring.',
    keywords: [
      'algorithm',
      'algorithms',
      'model',
      'models',
      'evaluation',
      'benchmark',
      'research',
      'experimentation',
      'ml',
      'machine learning',
    ],
    metrics: [
      'Evaluation boards publish accuracy, fairness, safety, and carbon footprint indices per release.',
      'Experiment tracker records uplift deltas with Bayesian credible intervals, not just point estimates.',
      'Launch committee scoring rubric spans readiness, resilience, responsiveness, and regulation (the 4Rs).',
    ],
    toolchain: [
      'Atlas Scenario Lab for sandboxed simulations with controllable abstract motion environments.',
      'Mermaid-driven algorithm lineage diagrams embedded on research, projects, and academic pages.',
      'InteractiveCharts powering live benchmark rollups for each hero section and detail page.',
    ],
    playbooks: [
      'Codify evaluation recipes as reusable Atlas modules that the assistant can reference on demand.',
      'Gate production pushes through adaptive quality bars tied to the KPIs surfaced in cinematic heroes.',
      'Blend synthetic and human review cohorts to audit algorithm bias before rollout.',
    ],
    followUps: [
      'Show the benchmark deltas for the latest assistant algorithm refresh.',
      'Which evaluation recipes secure regulatory sign-off?',
      'How do we visualise lineage across 176 blueprint pages?',
    ],
    quickPrompts: [
      {
        label: 'Benchmarks pulse',
        prompt: 'Summarise the latest benchmark deltas from Traceremove’s assistant algorithms.',
      },
      {
        label: 'Evaluation recipes',
        prompt: 'Which evaluation recipes does Traceremove use to secure regulatory sign-off?',
      },
    ],
    cta: { label: 'Explore evaluation lab', href: '/research/agentic-systems-tool-use' },
    accent: 'from-purple-500 via-fuchsia-500 to-pink-500',
  },
  {
    id: 'tools-and-automation',
    title: 'Tools, automation, and operations enablement',
    category: 'Tools & Automation',
    summary:
      'Traceremove ships an integrated toolkit: deployment pipelines, compliance automations, and collaborative mega menus so every page links to the next action without friction.',
    keywords: [
      'tool',
      'tools',
      'automation',
      'workflow',
      'operations',
      'pipeline',
      'platform',
      'integration',
      'infrastructure',
    ],
    metrics: [
      'Operational uptime sustained above 99.98% with canary rollouts tracked by the metrics stack.',
      'Content velocity: 176 blueprint surfaces updated nightly via doc-as-code pipelines.',
      'Assistant response assurance with fallback knowledge verifying coverage across research, tools, and metrics.',
    ],
    toolchain: [
      'Mega menu surfacing tools, research, and support artefacts with animated affordances for power users.',
      'CI pipelines orchestrating lint, build, and visual regression sweeps before publishing updates.',
      'Ask Traceremove AI widget wired to programmatic and fallback knowledge for domain-consistent replies.',
    ],
    playbooks: [
      'Bundle toolkit usage guides within each hero CTA so onboarding is anchored to the cinematic scenes.',
      'Mirror site-map and footer taxonomies to align automated link validation with SEO goals.',
      'Use responsive, animated components to keep desktop and mobile parity without sacrificing performance.',
    ],
    followUps: [
      'Which automation reduces time-to-publish for atlas updates?',
      'How is the mega menu structured for mobile and desktop parity?',
      'What safeguards keep the assistant’s tool references accurate?',
    ],
    quickPrompts: [
      {
        label: 'Automation layers',
        prompt: 'Detail the automation layers that keep the Traceremove atlas updated nightly.',
      },
      {
        label: 'Mega menu ops',
        prompt: 'How is the Traceremove mega menu structured for parity across desktop and mobile?',
      },
    ],
    cta: { label: 'See tooling runway', href: '/tools' },
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
  {
    id: 'assistant-copilot',
    title: 'Assistant & chatbot orchestration',
    category: 'Assistant Operations',
    summary:
      'The chatbot anchors navigation through the cinematic stack: it triages questions into metrics, tools, or algorithms and links users back into Atlas, research, or contact flows.',
    keywords: [
      'chatbot',
      'assistant',
      'conversational',
      'chat',
      'support',
      'copilot',
      'ai assistant',
      'ask traceremove',
    ],
    metrics: [
      'Engagement scoring across prompts, with satisfaction tracked via thumbs telemetry in the assistant widget.',
      'Coverage audits to ensure every taxonomy (metrics, tools, algorithms, legal) has curated answers.',
      'Escalation SLAs for hand-off to human experts within two minutes when the assistant can’t resolve.',
    ],
    toolchain: [
      'Domain-tuned fallback knowledge base with semantic routing across 176 blueprint documents.',
      'Edge delivery of conversation models with server-side streaming when the managed API is available.',
      'Motion-aware launcher that adapts to reduced-motion preferences and mobile-first ergonomics.',
    ],
    playbooks: [
      'Seed the assistant with recent atlas updates and research milestones every release.',
      'Route regulatory or security inquiries straight into the contact and legal surfaces.',
      'Log anonymous analytics for continual improvement while respecting privacy and compliance.',
    ],
    followUps: [
      'What fallback does the assistant use when external AI is offline?',
      'How does the chatbot surface atlas research on mobile?',
      'Where do I escalate a conversation to a human specialist?',
    ],
    quickPrompts: [
      {
        label: 'Fallback pathways',
        prompt: 'Explain how the Traceremove assistant responds when external AI services are offline.',
      },
      {
        label: 'Escalation guardrails',
        prompt: 'How does the assistant orchestrate human hand-offs for complex research questions?',
      },
    ],
    cta: { label: 'Meet the copilot', href: '/assistant' },
    accent: 'from-blue-500 via-sky-500 to-indigo-500',
  },
];

export const KNOWLEDGE_ENTRIES: KnowledgeEntry[] = KNOWLEDGE_BASE.map((entry) => ({
  ...entry,
  metrics: [...entry.metrics],
  toolchain: [...entry.toolchain],
  playbooks: [...entry.playbooks],
  followUps: [...entry.followUps],
  quickPrompts: entry.quickPrompts.map((prompt) => ({ ...prompt })),
  cta: { ...entry.cta },
}));

type SearchOptions = {
  limit?: number;
  fallbackToAll?: boolean;
};

function normalise(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

type KnowledgeSearchIndexEntry = {
  entry: KnowledgeEntry;
  phrases: string[];
  phraseTokens: string[][];
};

const KNOWLEDGE_SEARCH_INDEX: KnowledgeSearchIndexEntry[] = KNOWLEDGE_BASE.map((entry) => {
  const phrases = Array.from(
    new Set(
      entry.keywords
        .map((keyword) => normalise(keyword))
        .filter((keyword): keyword is string => Boolean(keyword)),
    ),
  );

  const phraseTokens = phrases.map((phrase) => phrase.split(' ').filter(Boolean));

  return {
    entry,
    phrases,
    phraseTokens,
  };
});

const DEFAULT_FALLBACK_ENTRIES = KNOWLEDGE_BASE.filter((entry) => entry.id !== 'assistant-copilot');

const SEARCH_CACHE = new Map<string, KnowledgeEntry[]>();
const MAX_CACHE_SIZE = 200;

function getCacheKey(query: string, limit: number, fallbackToAll: boolean): string {
  const limitKey = Number.isFinite(limit) ? String(limit) : 'all';
  return `${query}::${limitKey}::${fallbackToAll ? '1' : '0'}`;
}

function readCache(key: string): KnowledgeEntry[] | null {
  const cached = SEARCH_CACHE.get(key);
  if (!cached) {
    return null;
  }
  return cached.slice();
}

function writeCache(key: string, entries: KnowledgeEntry[]) {
  if (!SEARCH_CACHE.has(key) && SEARCH_CACHE.size >= MAX_CACHE_SIZE) {
    const firstKey = SEARCH_CACHE.keys().next().value;
    if (typeof firstKey === 'string') {
      SEARCH_CACHE.delete(firstKey);
    }
  }

  SEARCH_CACHE.set(key, entries.slice());
}

function extractUserQuery(messages: AIMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === 'user' && messages[i]?.content) {
      return messages[i].content;
    }
  }
  return '';
}

function selectEntries(query: string, options: SearchOptions = {}): KnowledgeEntry[] {
  const { limit = 3, fallbackToAll = true } = options;
  const normalised = normalise(query);
  const cacheKey = getCacheKey(normalised, limit, fallbackToAll);

  const cached = readCache(cacheKey);
  if (cached) {
    return cached;
  }

  if (!normalised) {
    if (!Number.isFinite(limit)) {
      const result = DEFAULT_FALLBACK_ENTRIES.slice();
      writeCache(cacheKey, result);
      return result;
    }
    const result = DEFAULT_FALLBACK_ENTRIES.slice(0, limit);
    writeCache(cacheKey, result);
    return result;
  }

  const queryWords = normalised.split(' ').filter(Boolean);
  const queryWordSet = new Set(queryWords);

  const scored = KNOWLEDGE_SEARCH_INDEX.map(({ entry, phrases, phraseTokens }) => {
    let score = 0;

    for (let index = 0; index < phrases.length; index += 1) {
      const phrase = phrases[index];
      if (!phrase) {
        continue;
      }

      if (normalised.includes(phrase)) {
        const phraseWordCount = Math.max(phraseTokens[index]?.length ?? 0, 1);
        score += Math.max(2, phraseWordCount);
        continue;
      }

      const tokens = phraseTokens[index];
      if (!tokens?.length) {
        continue;
      }

      let matchedWords = 0;
      for (const token of tokens) {
        if (queryWordSet.has(token)) {
          matchedWords += 1;
        }
      }

      if (matchedWords > 0) {
        score += matchedWords;
      }
    }

    return { entry, score };
  });

  const matched = scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry);

  if (matched.length === 0) {
    const result = fallbackToAll ? KNOWLEDGE_BASE.slice() : [];
    writeCache(cacheKey, result);
    return result;
  }

  if (!Number.isFinite(limit)) {
    writeCache(cacheKey, matched);
    return matched.slice();
  }

  const result = matched.slice(0, Math.min(limit, matched.length));
  writeCache(cacheKey, result);
  return result;
}

export function searchKnowledgeEntries(query: string, options?: SearchOptions): KnowledgeEntry[] {
  return selectEntries(query, {
    limit: options?.limit ?? KNOWLEDGE_BASE.length,
    fallbackToAll: options?.fallbackToAll ?? true,
  });
}

function formatEntry(entry: KnowledgeEntry): string {
  const sections: string[] = [`### ${entry.title}`, entry.summary];

  if (entry.metrics.length > 0) {
    sections.push('', '**Key metrics**');
    sections.push(...entry.metrics.map((item) => `- ${item}`));
  }

  if (entry.toolchain.length > 0) {
    sections.push('', '**Toolchain & automation**');
    sections.push(...entry.toolchain.map((item) => `- ${item}`));
  }

  if (entry.playbooks.length > 0) {
    sections.push('', '**Playbooks**');
    sections.push(...entry.playbooks.map((item) => `- ${item}`));
  }

  return sections.join('\n');
}

export function generateFallbackResponse(
  req: AIGenerateRequest,
  error?: unknown,
): AIGenerateResponse {
  const query = extractUserQuery(req.messages ?? []);
  const entries = selectEntries(query);
  const headerParts: string[] = [];

  if (query) {
    headerParts.push(`**Query understood:** ${query.trim()}`);
  }

  if (error) {
    headerParts.push(
      'Live generative services are reconnecting, so I\'m answering from the on-site Traceremove knowledge base.',
    );
  } else if (!process.env.TRACEREMOVE_NET_API_URL || !process.env.TRACEREMOVE_NET_API_KEY) {
    headerParts.push(
      'Live generative services are not configured, so here\'s a response grounded in the Traceremove atlas.',
    );
  } else {
    headerParts.push('Here\'s how the Traceremove blueprint approaches this topic.');
  }

  const content = [
    headerParts.join('\n\n'),
    ...entries.map((entry) => formatEntry(entry)),
  ].join('\n\n');

  const followUps = Array.from(
    new Set(entries.flatMap((entry) => entry.followUps)).values(),
  ).slice(0, 4);

  const followUpSection =
    followUps.length > 0
      ? `\n\n_Ask for more detail on: ${followUps.join(' · ')}._`
      : '';

  return {
    id: 'traceremove-knowledge-fallback',
    created: Date.now(),
    model: 'traceremove-knowledge-base',
    choices: [
      {
        index: 0,
        message: {
          role: 'assistant',
          content: `${content}${followUpSection}`,
        },
      },
    ],
  };
}


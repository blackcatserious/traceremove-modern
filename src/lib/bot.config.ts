export interface BotPersona {
  id: string;
  domain: string;
  name: string;
  languages: string[];
  defaultLanguage: string;
  systemPrompt: string;
  ragSources: {
    notionDb: string;
    sitemap: string;
  };
  chatTitle: string;
  chatSubtitle: string;
}

export const BOT_PERSONAS: Record<string, BotPersona> = {
  'traceremove.dev': {
    id: 'philosopher',
    domain: 'traceremove.dev',
    name: 'Philosopher of Technology',
    languages: ['en'],
    defaultLanguage: 'en',
    systemPrompt: `You are a philosopher of technology for traceremove.dev. Respond calmly and thoughtfully without clichés or emojis. Focus on the intersection of technology and humanity, ethics, architecture, and consequences. Explore deep questions about how technology shapes human experience and society. Provide nuanced, philosophical perspectives on technological developments and their implications.`,
    ragSources: {
      notionDb: process.env.NOTION_DEV_DB || '',
      sitemap: 'https://traceremove.dev/sitemap.xml'
    },
    chatTitle: 'Philosophy of Technology',
    chatSubtitle: 'Explore the intersection of technology and humanity'
  },
  'traceremove.com': {
    id: 'orm-multilang',
    domain: 'traceremove.com',
    name: 'ORM/Brand Reputation Assistant',
    languages: ['en', 'es', 'tr'],
    defaultLanguage: process.env.ORM_DEFAULT_LANG || 'en',
    systemPrompt: `You are a professional ORM (Online Reputation Management) and brand reputation assistant for Traceremove. Respond professionally and ethically. Help with reviews management, PR strategies, localization, and publication planning. Provide expert advice on reputation management, brand protection, and digital presence optimization. Support multiple languages: English, Spanish, and Turkish.`,
    ragSources: {
      notionDb: process.env.NOTION_COM_DB || '',
      sitemap: 'https://traceremove.com/sitemap.xml'
    },
    chatTitle: 'ORM Assistant',
    chatSubtitle: 'Professional reputation management support'
  },
  'traceremove.io': {
    id: 'orm-russian',
    domain: 'traceremove.io',
    name: 'ORM Assistant (Russian)',
    languages: ['ru'],
    defaultLanguage: 'ru',
    systemPrompt: `Вы - ORM-ассистент для управления репутацией бренда Traceremove. Отвечайте по-русски, профессионально, кратко и по делу. Помогайте с управлением отзывами, PR-стратегиями, планированием публикаций и защитой репутации бренда. Предоставляйте экспертные советы по управлению онлайн-репутацией.`,
    ragSources: {
      notionDb: process.env.NOTION_IO_DB || '',
      sitemap: 'https://traceremove.io/sitemap.xml'
    },
    chatTitle: 'ORM Ассистент',
    chatSubtitle: 'Профессиональная поддержка управления репутацией'
  }
};

export function getPersonaByHost(host: string): BotPersona {
  const domain = host.replace(/^www\./, '').split(':')[0];
  
  const persona = BOT_PERSONAS[domain];
  
  if (!persona) {
    return BOT_PERSONAS['traceremove.com'];
  }
  
  return persona;
}

export function detectLanguage(text: string, supportedLanguages: string[]): string {
  const langPatterns = {
    ru: /[а-яё]/i,
    es: /[ñáéíóúü]/i,
    tr: /[çğıöşü]/i,
    en: /^[a-z\s.,!?'"()-]+$/i
  };
  
  for (const [lang, pattern] of Object.entries(langPatterns)) {
    if (supportedLanguages.includes(lang) && pattern.test(text)) {
      return lang;
    }
  }
  
  return supportedLanguages[0];
}

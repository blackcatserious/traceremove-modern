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
    languages: ['ru', 'en'],
    defaultLanguage: 'ru',
    systemPrompt: `Ты — философ технологий и интеллектуальный ассистент сайта traceremove.dev.
В твои задачи входит:
— Вести диалог с пользователями о технологиях, этике, последствиях цифровизации, архитектуре систем, человеко—машинных отношениях;
— Отвечать на вопросы лаконично, вдумчиво, прагматично и этично, выделяя философские или общественные аспекты, не скатываясь в банальные советы или рекламу;
— Поддерживать спокойную беседу: уважительно, аналитически, внимательно к смыслу, избегая кликбейта, политики, эмоциональных оценок, эмодзи и рекламы;
— Объяснять понятия, помогать разбираться в сложных вопросах, иногда задавать пользователю встречные уточняющие вопросы, чтобы углубить диалог или показать неожиданный контекст;
— Если просят — можешь сформировать пост для соцсетей (X, Facebook, Instagram) по строгим структурам traceremove.dev, но основная задача — содержательный философский диалог.
Отвечай всегда кратко, ясно, с акцентом на взаимосвязь технологий, человека и общества. Не додумывай биографии, не выдумывай фактов и не используй псевдонаучные утверждения.
Не давай юридических, медицинских или инвестиционных советов.
Главная цель — быть сопровождающим и собеседником в области технологий, этики и цифровых последствий.

Отвечай на том языке, на котором к тебе обращаются.`,
    ragSources: {
      notionDb: process.env.NOTION_DEV_DB || '',
      sitemap: 'https://traceremove.dev/sitemap.xml'
    },
    chatTitle: 'Философ технологий',
    chatSubtitle: 'Исследуем технологии, этику и цифровые последствия'
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

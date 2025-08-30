import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { getPersonaByHost, detectLanguage } from '@/lib/bot.config';
import { getContext } from '@/lib/rag';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    
    const host = request.headers.get('host') || 'traceremove.com';
    const persona = getPersonaByHost(host);
    
    const detectedLang = detectLanguage(message, persona.languages);
    
    const context = await getContext(message, persona.id);
    
    let systemPrompt = persona.systemPrompt;
    if (context) {
      systemPrompt += `\n\nRelevant context from knowledge base:\n${context}`;
    }
    
    const languageInstructions = {
      en: 'Respond in English.',
      es: 'Responde en español.',
      tr: 'Türkçe yanıt ver.',
      ru: 'Отвечай на русском языке.'
    };
    
    if (languageInstructions[detectedLang as keyof typeof languageInstructions]) {
      systemPrompt += `\n\n${languageInstructions[detectedLang as keyof typeof languageInstructions]}`;
    }
    
    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: systemPrompt }
    ];
    
    const recentHistory = history.slice(-10);
    for (const msg of recentHistory) {
      messages.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      });
    }
    
    messages.push({ role: 'user', content: message });
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    });
    
    const reply = completion.choices[0]?.message?.content || 'I apologize, but I could not generate a response.';
    
    return NextResponse.json({
      reply,
      persona: persona.id,
      lang: detectedLang,
      chatTitle: persona.chatTitle,
      chatSubtitle: persona.chatSubtitle
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

'use server';

export type AIMessage = { role: 'user' | 'assistant' | 'system'; content: string };

export interface AIGenerateRequest {
  messages: AIMessage[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

export interface AIGenerateResponse {
  id: string;
  created: number;
  model: string;
  choices: { index: number; message: AIMessage }[];
  usage?: unknown;
}

const API_URL = process.env.TRACEREMOVE_NET_API_URL;
const API_KEY = process.env.TRACEREMOVE_NET_API_KEY;

async function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('AI API timeout')), ms);
    p.then((v) => {
      clearTimeout(t);
      resolve(v);
    }).catch((e) => {
      clearTimeout(t);
      reject(e);
    });
  });
}

export async function aiGenerate(req: AIGenerateRequest, signal?: AbortSignal): Promise<AIGenerateResponse> {
  if (!API_URL || !API_KEY) {
    return {
      id: 'stub',
      created: Date.now(),
      model: req.model ?? 'traceremove-net',
      choices: [
        {
          index: 0,
          message: { role: 'assistant', content: 'Traceremove AI is initializing. Please try again later.' },
        },
      ],
    };
  }

  const body = JSON.stringify(req);

  const attempt = async (): Promise<AIGenerateResponse> => {
    const res = await fetch(`${API_URL}/v1/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body,
      signal,
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`AI API error ${res.status}`);
    }
    return res.json();
  };

  try {
    return await withTimeout(attempt(), 20000);
  } catch (_e) {
    return await withTimeout(attempt(), 20000);
  }
}

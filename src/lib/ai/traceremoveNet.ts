'use server';

import { generateFallbackResponse } from './knowledgeBase';
import type { AIGenerateRequest, AIGenerateResponse } from './types';
export type { AIMessage, AIGenerateRequest, AIGenerateResponse } from './types';

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
    return generateFallbackResponse(req);
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
  } catch (firstError) {
    try {
      return await withTimeout(attempt(), 20000);
    } catch (retryError) {
      return generateFallbackResponse(req, retryError ?? firstError);
    }
  }
}

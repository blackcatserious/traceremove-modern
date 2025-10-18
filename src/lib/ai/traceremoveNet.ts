'use server';

import { generateFallbackResponse } from './knowledgeBase';
import type { AIGenerateRequest, AIGenerateResponse } from './types';
import { DEFAULT_API_URL, DEFAULT_DOMAIN, DEFAULT_PROMPT_ID } from './config';

const API_URL = (process.env.TRACEREMOVE_NET_API_URL ?? DEFAULT_API_URL).replace(/\/$/, '');
const API_KEY = process.env.TRACEREMOVE_NET_API_KEY ?? process.env.TRACEREMOVE_NET_PROMPT_ID ?? DEFAULT_PROMPT_ID;
const PROMPT_ID = process.env.TRACEREMOVE_NET_PROMPT_ID ?? DEFAULT_PROMPT_ID;
const API_DOMAIN = process.env.TRACEREMOVE_NET_DOMAIN ?? DEFAULT_DOMAIN;

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
  const payload: AIGenerateRequest = {
    ...req,
    promptId: req.promptId ?? PROMPT_ID,
    domain: req.domain ?? API_DOMAIN,
  };

  if (!API_URL || !API_KEY) {
    return generateFallbackResponse(payload);
  }

  const body = JSON.stringify(payload);

  const attempt = async (): Promise<AIGenerateResponse> => {
    const res = await fetch(`${API_URL}/v1/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
        'X-Traceremove-Domain': payload.domain ?? API_DOMAIN,
        'X-Traceremove-Prompt': payload.promptId ?? PROMPT_ID,
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
      return generateFallbackResponse(payload, retryError ?? firstError);
    }
  }
}

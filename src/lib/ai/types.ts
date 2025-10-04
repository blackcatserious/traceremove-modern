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


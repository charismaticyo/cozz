export enum Role {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
}

export interface RateLimitState {
  count: number;
  lastReset: number;
}

export const DEMO_RATE_LIMIT = 5; // Max messages per hour for demo
export const RESET_INTERVAL = 20000 * 60 * 60 * 1000; // 1 hour in ms

import { RateLimitState, DEMO_RATE_LIMIT, RESET_INTERVAL } from '@/types/chat';

const STORAGE_KEY = 'chat_demo_rate_limit';

export const getRateLimitState = (): RateLimitState => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { count: 0, lastReset: Date.now() };
  }
  
  const state: RateLimitState = JSON.parse(stored);
  const now = Date.now();
  
  // Reset if interval passed
  if (now - state.lastReset > RESET_INTERVAL) {
    return { count: 0, lastReset: now };
  }
  
  return state;
};

export const incrementMessageCount = (): RateLimitState => {
  const state = getRateLimitState();
  const newState = {
    ...state,
    count: state.count + 1
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  return newState;
};

export const isRateLimited = (): boolean => {
  const state = getRateLimitState();
  return state.count >= DEMO_RATE_LIMIT;
};

export const getRemainingMessages = (): number => {
  const state = getRateLimitState();
  return Math.max(0, DEMO_RATE_LIMIT - state.count);
};

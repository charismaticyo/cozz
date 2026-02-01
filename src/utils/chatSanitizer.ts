/**
 * Simple sanitization to prevent basic script injections and clean up whitespace.
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .trim()                    // Remove leading/trailing whitespace
    .slice(0, 1000);           // Limit length to prevent buffer overloads
};

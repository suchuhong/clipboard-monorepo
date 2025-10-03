import { useState, useCallback } from "react";

export interface UseClipboardOptions {
  timeout?: number;
}

export function useClipboard(options: UseClipboardOptions = {}) {
  const { timeout = 2000 } = options;
  const [isCopying, setIsCopying] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copy = useCallback(
    async (text: string) => {
      if (isCopying) return;

      setIsCopying(true);
      setError(null);

      try {
        await navigator.clipboard.writeText(text);
        setTimeout(() => setIsCopying(false), timeout);
      } catch (err) {
        setError(err as Error);
        setIsCopying(false);
        console.error("Failed to copy:", err);
      }
    },
    [isCopying, timeout]
  );

  return { copy, isCopying, error };
}

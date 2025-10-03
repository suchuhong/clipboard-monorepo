import { useState, type ReactNode } from "react";

export interface CopyButtonProps {
  text: string;
  children?: ReactNode;
  onCopied?: () => void;
}

export function CopyButton({ text, children = "Copy", onCopied }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopied?.();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return <button onClick={handleCopy}>{copied ? "Copied!" : children}</button>;
}

import { useState, type ReactNode } from "react";

export interface CopyOnClickProps {
  text: string;
  children: ReactNode;
}

export function CopyOnClick({ text, children }: CopyOnClickProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <span
      onClick={handleClick}
      style={{ cursor: "pointer", position: "relative" }}
      title={copied ? "Copied!" : "Click to copy"}
    >
      {children}
      {copied && (
        <span style={{ marginLeft: "8px", color: "green", fontSize: "0.9em" }}>✓ Copied</span>
      )}
    </span>
  );
}

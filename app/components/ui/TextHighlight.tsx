import type { ReactNode } from "react";

type TextHighlightProps = {
  /** The text to highlight. */
  children: ReactNode;
  /** Color classes, e.g. "text-accent bg-accent/10". */
  className?: string;
};

/**
 * A span of text with background highlight.
 * @param children The text to highlight.
 * @param className Optional color classes, e.g. "text-accent bg-accent/10".
 */
export default function TextHighlight({
  children,
  className = "text-accent bg-accent/10",
}: TextHighlightProps) {
  return <strong className={`px-1 rounded-sm ${className}`}>{children}</strong>;
}

import type { CSSProperties, ReactNode } from "react";

type AnnotatedBlockProps = {
  /** Caption content. A string renders as one paragraph; pass multiple <p> (or any nodes) for more. */
  text: ReactNode;
  side?: "left" | "right";
  /** Fluid width: any CSS size, e.g. "45vw", "clamp(260px, 40vw, 480px)", "50%". */
  width?: string;
  /** CSS aspect-ratio, e.g. "16/9", "4/5", "1/1". Height is derived from this + width. */
  aspectRatio?: string;
  /** The media element (img/video) rendered inside the box. */
  media?: ReactNode;
  /** Any valid CSS margin shorthand, e.g. "0", "1px 0 0 3px", "4rem 8vw". Defaults to flush. */
  margin?: string;
};

export default function AnnotatedBlock({
  text,
  side = "left",
  width = "clamp(240px, 40vw, 480px)",
  aspectRatio = "16/10",
  media,
  margin = "0",
}: AnnotatedBlockProps) {
  const mediaBox = (
    <div
      className={`bg-zinc-200 flex items-center justify-center w-full md:w-(--block-width) max-w-full overflow-hidden shrink-0 ${
        side === "right" ? "md:order-2" : ""
      }`}
      style={{ "--block-width": width, aspectRatio } as CSSProperties}
    >
      {media ?? (
        <span className="text-zinc-400 text-sm">screenshot placeholder</span>
      )}
    </div>
  );

  const copy = (
    <div
      className={`text-foreground text-lg sm:text-xl font-medium flex-1 px-2 md:px-12 space-y-6 ${
        side === "right" ? "md:order-1" : ""
      }`}
    >
      <span className="font-display text-accent text-7xl sm:text-8xl leading-none block mb-2">
        »
      </span>
      {text}
    </div>
  );

  return (
    <div
      className="w-full flex flex-col md:flex-row items-center justify-between gap-8 box-border p-0 md:p-(--block-margin)"
      style={{ "--block-margin": margin } as CSSProperties}
    >
      {mediaBox}
      {copy}
    </div>
  );
}

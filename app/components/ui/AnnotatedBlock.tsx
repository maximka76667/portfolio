import type { CSSProperties, ReactNode } from "react";

type AnnotatedBlockProps = {
  /** Small heading shown above the caption. */
  title: string;
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
  /** Text color class for the title. Defaults to "text-accent" (for use on the light bg-background). */
  titleColorClassName?: string;
  /** Text color class for the caption. Defaults to "text-foreground" (for use on the light bg-background). */
  textColorClassName?: string;
};

export default function AnnotatedBlock({
  title,
  text,
  side = "left",
  width = "clamp(240px, 40vw, 480px)",
  aspectRatio = "16/10",
  media,
  margin = "0",
  titleColorClassName = "text-accent",
  textColorClassName = "text-foreground",
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
      className={`${textColorClassName} text-lg sm:text-xl 3xl:text-3xl font-medium flex-1 max-w-[clamp(280px,32vw,700px)] px-2 md:px-12 space-y-6 ${
        side === "right" ? "md:order-1" : ""
      }`}
    >
      <h3
        className={`font-display ${titleColorClassName} text-3xl sm:text-4xl 3xl:text-5xl leading-tight`}
      >
        » {title} «
      </h3>
      {text}
    </div>
  );

  return (
    <div
      className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 xl:gap-10 3xl:gap-6 box-border p-0 md:p-(--block-margin)"
      style={{ "--block-margin": margin } as CSSProperties}
    >
      {mediaBox}
      {copy}
    </div>
  );
}

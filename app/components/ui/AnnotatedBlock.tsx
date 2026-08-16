import type { CSSProperties, ReactNode } from "react";

type AnnotatedBlockProps = {
  /** Small heading shown above the caption. */
  title: string;
  /** Caption content. A string renders as one paragraph; pass multiple <p> (or any nodes) for more. */
  children: ReactNode;
  side?: "left" | "right";
  /** Fluid width: any CSS size, e.g. "45vw", "clamp(260px, 40vw, 480px)", "50%". */
  width?: string;
  /** CSS aspect-ratio, e.g. "16/9", "4/5", "1/1". Height is derived from this + width. */
  aspectRatio?: string;
  /** The media element (img/video) rendered inside the box. */
  media?: ReactNode;
  /** Any valid CSS margin shorthand, e.g. "0", "1px 0 0 3px", "4rem 8vw". Defaults to "0". */
  margin?: string;
  /** Text color class for the title. Defaults to "text-accent" (for use on the light bg-background). */
  titleColorClassName?: string;
  /** Text color class for the caption. Defaults to "text-foreground" (for use on the light bg-background). */
  textColorClassName?: string;
};

/**
 * A media box paired with a title and caption, side by side.
 * @param title Small heading shown above the caption.
 * @param children Caption content. A string renders as one paragraph; pass multiple <p> (or any nodes) for more.
 * @param side Which side the media box appears on. Defaults to "left".
 * @param width Fluid width: any CSS size, e.g. "45vw", "clamp(260px, 40vw, 480px)", "50%". Defaults to "clamp(240px, 40vw, 480px)".
 * @param aspectRatio CSS aspect-ratio, e.g. "16/9", "4/5", "1/1". Height is derived from this + width. Defaults to "16/10".
 * @param media The media element (img/video) rendered inside the box. Defaults to a placeholder.
 * @param margin Any valid CSS margin shorthand, e.g. "0", "1px 0 0 3px", "4rem 8vw". Defaults to "0" (flush).
 * @param titleColorClassName Text color class for the title. Defaults to "text-accent" (for use on the light bg-background).
 * @param textColorClassName Text color class for the caption. Defaults to "text-foreground" (for use on the light bg-background).
 */
export default function AnnotatedBlock({
  title,
  children,
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
      className={`${textColorClassName} text-lg sm:text-xl 3xl:text-3xl font-medium flex-1 max-w-[clamp(280px,34vw,900px)] px-2 md:px-12 space-y-6 ${
        side === "right" ? "md:order-1" : ""
      }`}
    >
      <h3
        className={`font-display ${titleColorClassName} text-3xl sm:text-4xl 3xl:text-5xl leading-tight`}
      >
        {title}
      </h3>
      {children}
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

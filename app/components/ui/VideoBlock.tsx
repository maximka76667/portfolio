import type { ReactNode } from "react";
import AnnotatedBlock from "./AnnotatedBlock";

type VideoBlockProps = {
  title: string;
  children: ReactNode;
  side?: "left" | "right";
  width?: string;
  aspectRatio?: string;
  className?: string;
  src: string;
  titleColorClassName?: string;
  textColorClassName?: string;
};

/**
 * A section with a video and text on the side. Used on the UI/UX, Performance and OS Compatibility project pages.
 * @param title Small heading shown above the caption.
 * @param children Caption content. A string renders as one paragraph; pass multiple <p> (or any nodes) for more.
 * @param side Which side the video appears on. Defaults to AnnotatedBlock's default ("left").
 * @param width Fluid width: any CSS size, e.g. "45vw", "clamp(260px, 40vw, 480px)", "50%". Defaults to AnnotatedBlock's default ("clamp(240px, 40vw, 480px)").
 * @param aspectRatio CSS aspect-ratio, e.g. "16/9", "4/5", "1/1". Height is derived from this + width. Defaults to AnnotatedBlock's default ("16/10").
 * @param className Additional classes applied to the outer wrapper — use for spacing, e.g. "md:px-[70px]".
 * @param src Video source URL. Plays autoplaying, muted, and looped. On screens narrower than 768px, a lower-resolution variant is used instead — the same path with "-mobile" inserted before the extension (e.g. "/foo.mp4" → "/foo-mobile.mp4") must exist.
 * @param titleColorClassName Text color class for the title. Defaults to AnnotatedBlock's default ("text-accent", for use on the light bg-background).
 * @param textColorClassName Text color class for the caption. Defaults to AnnotatedBlock's default ("text-foreground", for use on the light bg-background).
 */
export default function VideoBlock({
  title,
  children,
  side,
  width,
  aspectRatio,
  className,
  src,
  titleColorClassName,
  textColorClassName,
}: VideoBlockProps) {
  const mobileSrc = src.replace(/\.mp4$/, "-mobile.mp4");

  return (
    <AnnotatedBlock
      title={title}
      side={side}
      width={width}
      aspectRatio={aspectRatio}
      className={className}
      titleColorClassName={titleColorClassName}
      textColorClassName={textColorClassName}
      media={
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={mobileSrc} media="(max-width: 767px)" />
          <source src={src} />
        </video>
      }
    >
      {children}
    </AnnotatedBlock>
  );
}

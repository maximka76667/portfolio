import type { ReactNode } from "react";
import AnnotatedBlock from "./AnnotatedBlock";

type VideoBlockProps = {
  title: string;
  children: ReactNode;
  side?: "left" | "right";
  width?: string;
  aspectRatio?: string;
  margin?: string;
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
 * @param margin Any valid CSS margin shorthand, e.g. "0", "1px 0 0 3px", "4rem 8vw". Defaults to AnnotatedBlock's default ("0", flush).
 * @param src Video source URL. Plays autoplaying, muted, and looped.
 * @param titleColorClassName Text color class for the title. Defaults to AnnotatedBlock's default ("text-accent", for use on the light bg-background).
 * @param textColorClassName Text color class for the caption. Defaults to AnnotatedBlock's default ("text-foreground", for use on the light bg-background).
 */
export default function VideoBlock({
  title,
  children,
  side,
  width,
  aspectRatio,
  margin,
  src,
  titleColorClassName,
  textColorClassName,
}: VideoBlockProps) {
  return (
    <AnnotatedBlock
      title={title}
      side={side}
      width={width}
      aspectRatio={aspectRatio}
      margin={margin}
      titleColorClassName={titleColorClassName}
      textColorClassName={textColorClassName}
      media={
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      }
    >
      {children}
    </AnnotatedBlock>
  );
}

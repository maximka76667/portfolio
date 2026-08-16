import type { ReactNode } from "react";
import AnnotatedBlock from "./AnnotatedBlock";

type ImageBlockProps = {
  title: string;
  text: ReactNode;
  alt: string;
  side?: "left" | "right";
  width?: string;
  aspectRatio?: string;
  margin?: string;
  src: string;
  titleColorClassName?: string;
  textColorClassName?: string;
};

/**
 * A section with an image and text on the side. Used on the UI/UX, Performance and OS Compatibility project pages.
 */
export default function ImageBlock({
  title,
  text,
  alt,
  side = "left",
  width,
  aspectRatio,
  margin,
  src,
  titleColorClassName,
  textColorClassName,
}: ImageBlockProps) {
  return (
    <AnnotatedBlock
      title={title}
      text={text}
      side={side}
      width={width}
      aspectRatio={aspectRatio}
      margin={margin}
      titleColorClassName={titleColorClassName}
      textColorClassName={textColorClassName}
      media={
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      }
    />
  );
}

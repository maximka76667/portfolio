import type { ReactNode } from "react";
import AnnotatedBlock from "./AnnotatedBlock";

type ImageBlockProps = {
  text: ReactNode;
  alt: string;
  side?: "left" | "right";
  width?: string;
  aspectRatio?: string;
  margin?: string;
  src: string;
};

export default function ImageBlock({
  text,
  alt,
  side,
  width,
  aspectRatio,
  margin,
  src,
}: ImageBlockProps) {
  return (
    <AnnotatedBlock
      text={text}
      side={side}
      width={width}
      aspectRatio={aspectRatio}
      margin={margin}
      media={
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      }
    />
  );
}

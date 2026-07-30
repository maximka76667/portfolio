import type { ReactNode } from "react";
import AnnotatedBlock from "./AnnotatedBlock";

type VideoBlockProps = {
  title: string;
  text: ReactNode;
  side?: "left" | "right";
  width?: string;
  aspectRatio?: string;
  margin?: string;
  src: string;
};

export default function VideoBlock({
  title,
  text,
  side,
  width,
  aspectRatio,
  margin,
  src,
}: VideoBlockProps) {
  return (
    <AnnotatedBlock
      title={title}
      text={text}
      side={side}
      width={width}
      aspectRatio={aspectRatio}
      margin={margin}
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
    />
  );
}

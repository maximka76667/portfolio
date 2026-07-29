import type { ReactNode } from "react";
import AnnotatedBlock from "./AnnotatedBlock";

type VideoBlockProps = {
  text: ReactNode;
  side?: "left" | "right";
  width?: string;
  aspectRatio?: string;
  margin?: string;
  src: string;
};

export default function VideoBlock({
  text,
  side,
  width,
  aspectRatio,
  margin,
  src,
}: VideoBlockProps) {
  return (
    <AnnotatedBlock
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

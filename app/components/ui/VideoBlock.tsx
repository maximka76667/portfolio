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
  titleColorClassName?: string;
  textColorClassName?: string;
};

export default function VideoBlock({
  title,
  text,
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
      text={text}
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
    />
  );
}

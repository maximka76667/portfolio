import type { ReactNode } from "react";

type PillarPageHeaderProps = {
  pillar: string;
  title: string;
  children: ReactNode;
  side: "left" | "right";
  pillarColorClassName?: string;
  titleColorClassName?: string;
  decorationClassName?: string;
  textColorClassName?: string;
};

/**
 * The big watermark pillar name + project title + description block at the
 * top of each pillar detail page (e.g. UI/UX → Swiss Kyle). Centered on
 * mobile; offset to the left or right edge from md up.
 * @param pillar The big watermark heading, e.g. "UI/UX", "Performance", "OS Compatibility".
 * @param title The project name, e.g. "Swiss Kyle", "Hyperloop Control Station", "Lode".
 * @param children Description content shown below the title.
 * @param side Which edge the block hugs from md up. Defaults to centered on mobile regardless.
 * @param pillarColorClassName Text color class for the watermark heading. Defaults to "text-[#e4ded4]".
 * @param titleColorClassName Text color class for the project title. Defaults to "text-foreground".
 * @param decorationClassName Underline decoration color class for the project title. Defaults to "decoration-accent".
 * @param textColorClassName Text color class for the description. Defaults to "text-foreground".
 */
export default function PillarPageHeader({
  pillar,
  title,
  children,
  side,
  pillarColorClassName = "text-[#e4ded4]",
  titleColorClassName = "text-foreground",
  decorationClassName = "decoration-accent",
  textColorClassName = "text-foreground",
}: PillarPageHeaderProps) {
  const isRight = side === "right";

  return (
    <div
      className={`flex h-[60vh] flex-col items-center justify-center gap-12 px-6 text-center md:px-0 ${
        isRight
          ? "md:items-end md:pr-24 md:text-right"
          : "md:items-start md:pl-24 md:text-left"
      }`}
    >
      <h1
        className={`font-display ${pillarColorClassName} text-6xl sm:text-8xl 3xl:text-9xl`}
      >
        {pillar}
      </h1>
      <h2
        className={`font-display ${titleColorClassName} text-3xl sm:text-5xl 3xl:text-7xl underline ${decorationClassName} decoration-4 underline-offset-8`}
      >
        {title}
      </h2>
      <p
        className={`${textColorClassName} text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl`}
      >
        {children}
      </p>
    </div>
  );
}

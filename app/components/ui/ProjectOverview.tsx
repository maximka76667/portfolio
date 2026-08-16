import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { HandTapIcon } from "@phosphor-icons/react/dist/csr/HandTap";

type ProjectOverviewProps = {
  name: string;
  description: ReactNode;
  media?: ReactNode;
};

export default function ProjectOverview({
  name,
  description,
  media,
}: ProjectOverviewProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const setReveal = (e: MouseEvent<HTMLDivElement>, radius: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const overlay = overlayRef.current;
    if (!overlay) return;
    overlay.style.setProperty("--reveal-x", `${x}px`);
    overlay.style.setProperty("--reveal-y", `${y}px`);
    overlay.style.setProperty("--reveal-r", `${radius}px`);
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setHovering(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const maxR = Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y),
    );
    setReveal(e, maxR);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setHovering(false);
    setReveal(e, 0);
  };

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 md:relative md:gap-0 3xl:max-w-6xl 4xl:max-w-7xl">
      <div
        className="relative aspect-video rounded-lg overflow-hidden bg-zinc-200 flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {media ?? (
          <span className="text-zinc-400 text-sm">screenshot placeholder</span>
        )}
        {media && (
          <div
            ref={overlayRef}
            className="absolute inset-0 hidden bg-background/75 pointer-events-none transition-[--reveal-r] duration-1000 ease-out md:block"
            style={{
              maskImage:
                "radial-gradient(circle var(--reveal-r) at var(--reveal-x) var(--reveal-y), transparent 0, transparent calc(var(--reveal-r) - 1px), black var(--reveal-r))",
              WebkitMaskImage:
                "radial-gradient(circle var(--reveal-r) at var(--reveal-x) var(--reveal-y), transparent 0, transparent calc(var(--reveal-r) - 1px), black var(--reveal-r))",
            }}
          />
        )}
        {media && (
          <div className="absolute inset-0 hidden items-center justify-center pointer-events-none md:flex">
            <span
              className={`-translate-x-56 flex h-32 w-32 flex-col items-center justify-center gap-2 text-center text-zinc-900 text-base font-medium animate-float transition-opacity duration-200 ${
                hovering ? "opacity-0" : "opacity-100"
              }`}
            >
              Reveal it by hovering
              <HandTapIcon size={24} />
            </span>
          </div>
        )}
      </div>
      <div
        className={`mx-auto max-w-md text-center text-foreground space-y-3 transition-opacity duration-200 md:absolute md:-bottom-7.5 md:-right-7.5 md:mx-0 md:text-left ${
          hovering ? "md:opacity-0 md:pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="font-display text-4xl sm:text-6xl">{name}</h1>
        <p className="text-lg sm:text-2xl font-medium">{description}</p>
      </div>
    </div>
  );
}

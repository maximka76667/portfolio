import type { ReactNode } from "react";

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
  return (
    <div className="relative mx-auto w-full max-w-4xl 3xl:max-w-6xl 4xl:max-w-7xl px-6">
      <div className="aspect-video rounded-lg overflow-hidden bg-zinc-200 flex items-center justify-center">
        {media ?? (
          <span className="text-zinc-400 text-sm">screenshot placeholder</span>
        )}
      </div>
      <div className="absolute -bottom-7.5 -right-7.5 max-w-md text-left text-foreground space-y-3">
        <h1 className="font-display text-4xl sm:text-6xl">{name}</h1>
        <p className="text-lg sm:text-2xl font-medium">{description}</p>
      </div>
    </div>
  );
}

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
    <div className="flex flex-col items-center justify-center gap-10 px-6 text-center max-w-4xl mx-auto">
      <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden bg-zinc-200 flex items-center justify-center">
        {media ?? (
          <span className="text-zinc-400 text-sm">screenshot placeholder</span>
        )}
      </div>
      <div className="space-y-4">
        <h1 className="font-display text-foreground text-3xl sm:text-5xl">
          {name}
        </h1>
        <p className="text-foreground text-lg sm:text-xl font-medium max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}

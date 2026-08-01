type PillarsContentProps = {
  onSelectUiUx: () => void;
  onSelectPerformance: () => void;
  onSelectOsCompatibility: () => void;
};

export default function PillarsContent({
  onSelectUiUx,
  onSelectPerformance,
  onSelectOsCompatibility,
}: PillarsContentProps) {
  return (
    <div className="flex h-full w-full">
      <div
        onClick={onSelectUiUx}
        className="w-1/3 h-full flex items-center justify-center bg-background cursor-pointer"
      >
        <h1 className="font-display text-foreground text-2xl sm:text-4xl font-medium text-center px-4">
          UI/UX
        </h1>
      </div>
      <div
        onClick={onSelectPerformance}
        className="w-1/3 h-full flex items-center justify-center bg-foreground cursor-pointer"
      >
        <h1 className="font-display text-background text-2xl sm:text-4xl font-medium text-center px-4">
          Performance
        </h1>
      </div>
      <div
        onClick={onSelectOsCompatibility}
        className="w-1/3 h-full flex items-center justify-center bg-accent cursor-pointer"
      >
        <h1 className="font-display text-background text-2xl sm:text-4xl font-medium text-center px-4">
          OS Compatibility
        </h1>
      </div>
    </div>
  );
}

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
        className="w-1/3 h-full flex items-center justify-center bg-white cursor-pointer"
      >
        <p className="text-black text-2xl sm:text-4xl font-medium text-center px-4">
          UI/UX
        </p>
      </div>
      <div
        onClick={onSelectPerformance}
        className="w-1/3 h-full flex items-center justify-center bg-black cursor-pointer"
      >
        <p className="text-white text-2xl sm:text-4xl font-medium text-center px-4">
          Performance
        </p>
      </div>
      <div
        onClick={onSelectOsCompatibility}
        className="w-1/3 h-full flex items-center justify-center bg-zinc-800 cursor-pointer"
      >
        <p className="text-white text-2xl sm:text-4xl font-medium text-center px-4">
          OS Compatibility
        </p>
      </div>
    </div>
  );
}

export default function PerformanceIntroContent() {
  return (
    <div className="flex flex-col items-center gap-12 px-6 text-center max-w-3xl">
      <h1 className="font-display text-background text-4xl sm:text-6xl 3xl:text-[12rem]">
        Performance
      </h1>
      <div className="text-background text-lg sm:text-2xl font-medium space-y-8 max-w-md">
        <p>
          One task failing{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            couldn&apos;t take the others down
          </strong>{" "}
          with it.
        </p>
        <p>
          The interface had to keep up under{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            hundreds of packets a second
          </strong>
          .
        </p>
        <p>
          And it had to keep running for{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            months without a restart
          </strong>
          .
        </p>
      </div>
    </div>
  );
}

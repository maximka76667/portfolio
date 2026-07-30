export default function OsCompatibilityIntroContent() {
  return (
    <div className="flex flex-col items-center gap-12 px-6 text-center">
      <h1 className="font-display text-background text-4xl sm:text-6xl 3xl:text-[12rem]">
        OS Compatibility
      </h1>
      <div className="text-background text-lg sm:text-2xl font-medium space-y-8 max-w-md">
        <p>
          I needed the same tool to{" "}
          <strong className="text-background bg-background/10 px-1 rounded-sm">
            run the same way on Windows, macOS, and Linux
          </strong>
          .
        </p>
        <p>
          I needed the platform-specific pieces{" "}
          <strong className="text-background bg-background/10 px-1 rounded-sm">
            handled once
          </strong>
          , not per install.
        </p>
        <p>
          I needed to make it{" "}
          <strong className="text-background bg-background/10 px-1 rounded-sm">
            accessible to anybody
          </strong>
          .
        </p>
      </div>
    </div>
  );
}

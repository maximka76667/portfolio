import TextHighlight from "../ui/TextHighlight";

export default function OsCompatibilityIntroContent() {
  return (
    <div className="flex flex-col items-center gap-12 px-6 text-center">
      <h1 className="font-display text-background text-4xl sm:text-6xl 3xl:text-[12rem]">
        OS Compatibility
      </h1>
      <div className="text-background text-lg sm:text-2xl font-medium space-y-8 max-w-md">
        <p>
          I needed the same tool to{" "}
          <TextHighlight className="text-background bg-background/10">
            run the same way on Windows, macOS, and Linux
          </TextHighlight>
          .
        </p>
        <p>
          I needed the platform-specific pieces{" "}
          <TextHighlight className="text-background bg-background/10">
            handled once
          </TextHighlight>
          , not per install.
        </p>
        <p>
          I needed to make it{" "}
          <TextHighlight className="text-background bg-background/10">
            accessible to anybody
          </TextHighlight>
          .
        </p>
      </div>
    </div>
  );
}

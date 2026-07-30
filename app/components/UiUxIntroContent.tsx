export default function UiUxIntroContent() {
  return (
    <div className="flex flex-col items-center gap-12 px-6 text-center max-w-3xl">
      <h1 className="font-display text-foreground text-4xl sm:text-6xl">
        UI/UX
      </h1>
      <div className="text-foreground text-lg sm:text-2xl font-medium space-y-8">
        <p>
          I design for the feeling of using something,{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            not just the function of it
          </strong>
          .
        </p>
        <p>
          Interfaces that{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            don&apos;t get in the way
          </strong>{" "}
          of the main purpose, so you&apos;re{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            never fighting
          </strong>{" "}
          the thing you&apos;re trying to use.
        </p>
        <p>
          So the tool is something they{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            want to use
          </strong>
          , not just have to.
        </p>
      </div>
    </div>
  );
}

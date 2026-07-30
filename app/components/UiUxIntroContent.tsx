export default function UiUxIntroContent() {
  return (
    <div className="flex flex-col items-center gap-12 px-6 text-center max-w-3xl">
      <h1 className="font-display text-foreground text-4xl sm:text-6xl 3xl:text-[12rem]">
        UI/UX
      </h1>
      <div className="text-foreground text-lg sm:text-2xl font-medium space-y-8 max-w-md mx-auto">
        <p>
          These are{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            tools people use to get something done
          </strong>
          .
        </p>
        <p>
          When the interface{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            gets in the way
          </strong>
          , people end up fighting it.
        </p>
        <p>
          Making it something people{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            actually wanted to use
          </strong>{" "}
          mattered as much as making it work.
        </p>
      </div>
    </div>
  );
}

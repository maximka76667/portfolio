import TextHighlight from "../ui/TextHighlight";

export default function UiUxIntroContent() {
  return (
    <div className="flex flex-col items-center gap-12 px-6 text-center max-w-3xl">
      <h1 className="font-display text-foreground text-4xl sm:text-6xl 3xl:text-[12rem]">
        UI/UX
      </h1>
      <div className="text-foreground text-lg sm:text-2xl font-medium space-y-8 max-w-md mx-auto">
        <p>
          These are{" "}
          <TextHighlight>
            tools people use to get something done
          </TextHighlight>
          .
        </p>
        <p>
          When the interface{" "}
          <TextHighlight>gets in the way</TextHighlight>
          , people end up fighting it.
        </p>
        <p>
          Making it something people{" "}
          <TextHighlight>actually wanted to use</TextHighlight>{" "}
          mattered as much as making it work.
        </p>
      </div>
    </div>
  );
}

import TextHighlight from "../ui/TextHighlight";

export default function ProjectSwissKyleStatementContent() {
  return (
    <div className="flex flex-col items-center gap-6 px-6 text-center max-w-2xl">
      <h3 className="font-display text-accent text-3xl sm:text-4xl 3xl:text-5xl leading-tight">
        » Why local «
      </h3>
      <div className="text-foreground text-lg sm:text-2xl 3xl:text-3xl font-medium space-y-6">
        <p>
          I was tired of SaaS services out on the internet that make you{" "}
          <TextHighlight>
            create an account or pay a subscription
          </TextHighlight>
          .
        </p>
        <p>
          I think a solution for such friction should be{" "}
          <TextHighlight>accessible to anybody</TextHighlight>
          .
        </p>
      </div>
    </div>
  );
}

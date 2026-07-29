import AnnotatedBlock from "./AnnotatedBlock";

export default function UiUxSwissKyleContent() {
  return (
    <div className="min-h-full flex flex-col justify-center gap-32 pt-24 pb-100">
      <h1 className="font-display text-black text-2xl sm:text-4xl font-medium px-6 text-center mb-12">
        swiss-kyle — UI/UX
      </h1>
      <AnnotatedBlock
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="16/9"
        text="Explain the first UI/UX decision here."
      />
      <AnnotatedBlock
        side="right"
        width="clamp(220px, 28vw, 340px)"
        aspectRatio="3/4"
        text="Explain the second UI/UX decision here."
      />
      <AnnotatedBlock
        side="left"
        width="clamp(260px, 40vw, 520px)"
        aspectRatio="16/10"
        text="Explain the third UI/UX decision here."
      />
    </div>
  );
}

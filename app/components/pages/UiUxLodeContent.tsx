import AnnotatedBlock from "../ui/AnnotatedBlock";
import ContentPage from "../ui/ContentPage";

export default function UiUxLodeContent() {
  return (
    <ContentPage>
      <h1 className="font-display text-foreground text-2xl sm:text-4xl font-medium px-6 text-center mb-12">
        Lode — UI/UX
      </h1>
      <AnnotatedBlock
        title="First decision — placeholder"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="16/9"
        text="Explain the first UI/UX decision here."
      />
      <AnnotatedBlock
        title="Second decision — placeholder"
        side="right"
        width="clamp(220px, 28vw, 340px)"
        aspectRatio="3/4"
        text="Explain the second UI/UX decision here."
      />
      <AnnotatedBlock
        title="Third decision — placeholder"
        side="left"
        width="clamp(260px, 40vw, 520px)"
        aspectRatio="16/10"
        text="Explain the third UI/UX decision here."
      />
    </ContentPage>
  );
}

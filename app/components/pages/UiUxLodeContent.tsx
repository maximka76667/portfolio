import AnnotatedBlock from "../ui/AnnotatedBlock";
import ContentPage from "../ui/ContentPage";

export default function UiUxLodeContent() {
  return (
    <ContentPage>
      <h1 className="font-display text-foreground text-2xl sm:text-4xl font-medium px-6 text-center mb-12">
        Lode — UI/UX
      </h1>
      <AnnotatedBlock
        title="Time range"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="16/9"
        text={
          <p>
            A{" "}
            <strong className="text-accent bg-accent/10 px-1 rounded-sm">
              time range selector
            </strong>{" "}
            scopes every chart to a window — 20 minutes, 1 hour, 5 hours, or
            multiple days.
          </p>
        }
      />
      <AnnotatedBlock
        title="Live status"
        side="right"
        width="clamp(220px, 28vw, 340px)"
        aspectRatio="3/4"
        text={
          <p>
            A{" "}
            <strong className="text-accent bg-accent/10 px-1 rounded-sm">
              status badge
            </strong>{" "}
            always shows where the feed stands —{" "}
            <span className="text-status-active bg-status-active/10 px-1 rounded-sm">
              live
            </span>
            ,{" "}
            <span className="text-status-loading bg-status-loading/10 px-1 rounded-sm">
              waiting for data
            </span>
            , or{" "}
            <span className="text-status-error bg-status-error/10 px-1 rounded-sm">
              error
            </span>{" "}
            — so a stalled connection is never mistaken for a quiet one.
          </p>
        }
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

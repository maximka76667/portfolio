import AnnotatedBlock from "./AnnotatedBlock";
import ContentPage from "./ContentPage";

export default function UiUxSwissKyleContent() {
  return (
    <ContentPage>
      <div className="flex flex-col items-start justify-center gap-12 h-[60vh] pl-24 mb-12">
        <h1 className="font-display text-[#e4ded4] text-6xl sm:text-8xl 3xl:text-9xl">
          UI/UX
        </h1>
        <h2 className="font-display text-foreground text-3xl sm:text-5xl 3xl:text-7xl underline decoration-accent decoration-4 underline-offset-8">
          Swiss Kyle
        </h2>
        <p className="text-foreground text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl">
          Every action here kicks off a{" "}
          <strong className="text-accent bg-accent/10 px-1 rounded-sm">
            background job
          </strong>
          , so you need to trust it&apos;s actually running, and know right
          away if it didn&apos;t.
        </p>
      </div>
      <AnnotatedBlock
        title="Document upload"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="16/9"
        text={
          <p>
            Documents are added by{" "}
            <strong className="text-accent bg-accent/10 px-1 rounded-sm">
              drag and drop
            </strong>
            . An unsupported format{" "}
            <strong className="text-accent bg-accent/10 px-1 rounded-sm">
              shows an error
            </strong>
            .
          </p>
        }
      />
      <AnnotatedBlock
        title="Job status badges"
        side="right"
        width="clamp(220px, 28vw, 340px)"
        aspectRatio="3/4"
        text={
          <p>
            Every job carries a{" "}
            <strong className="text-accent bg-accent/10 px-1 rounded-sm">
              status badge
            </strong>{" "}
            — running, done, or failed.
          </p>
        }
      />
      <AnnotatedBlock
        title="Diagnostics"
        side="left"
        width="clamp(260px, 40vw, 520px)"
        aspectRatio="16/10"
        text={
          <p>
            A diagnostics page that{" "}
            <strong className="text-accent bg-accent/10 px-1 rounded-sm">
              reveals problems or failures
            </strong>{" "}
            as they happen.
          </p>
        }
      />
    </ContentPage>
  );
}

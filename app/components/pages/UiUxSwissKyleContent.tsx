import VideoBlock from "../ui/VideoBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";

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
          <TextHighlight>background job</TextHighlight>, so you need to trust
          it&apos;s actually running, and know right away if it didn&apos;t.
        </p>
      </div>
      <VideoBlock
        title="Document upload"
        side="left"
        width="clamp(200px, 60vw, 1300px)"
        aspectRatio="16/9"
        src="/media/swiss-kyle/ui-ux-swiss-kyle-dnd.mp4"
        margin="0 70px 0"
      >
        <p>
          Documents are added by <TextHighlight>drag and drop</TextHighlight>.
          An unsupported format <TextHighlight>shows an error</TextHighlight>.
        </p>
      </VideoBlock>
      <VideoBlock
        title="Job status badges"
        side="right"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/10"
        src="/media/swiss-kyle/ui-ux-swiss-kyle-badge-status.mp4"
        margin="0 20px 0"
      >
        <p>
          Every job carries a <TextHighlight>status badge</TextHighlight> —
          running, done, or failed — always visible in the sidebar.
        </p>
      </VideoBlock>
      <VideoBlock
        title="Diagnostics"
        side="left"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/9"
        src="/media/swiss-kyle/ui-ux-swiss-kyle-diagnostics.mp4"
        margin="0 50px 0"
      >
        <p>
          The diagnostics page shows{" "}
          <TextHighlight>worker status and the job log</TextHighlight>, so
          problems are visible as they happen.
        </p>
      </VideoBlock>
    </ContentPage>
  );
}

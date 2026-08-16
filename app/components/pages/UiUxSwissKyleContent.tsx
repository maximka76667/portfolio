import VideoBlock from "../ui/VideoBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";
import PillarPageHeader from "../ui/PillarPageHeader";

export default function UiUxSwissKyleContent() {
  return (
    <ContentPage>
      <PillarPageHeader pillar="UI/UX" title="Swiss Kyle" side="left">
        Every action here kicks off a{" "}
        <TextHighlight>background job</TextHighlight>, so you need to trust
        it&apos;s actually running, and know right away if it didn&apos;t.
      </PillarPageHeader>
      <VideoBlock
        title="Document upload"
        side="left"
        width="clamp(200px, 60vw, 1300px)"
        aspectRatio="16/9"
        src="/media/swiss-kyle/ui-ux-swiss-kyle-dnd.mp4"
        className="md:px-[70px]"
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
        className="md:px-[20px]"
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
        className="md:px-[50px]"
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

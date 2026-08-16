import ImageBlock from "../ui/ImageBlock";
import VideoBlock from "../ui/VideoBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";
import PillarPageHeader from "../ui/PillarPageHeader";

export default function UiUxLodeContent() {
  return (
    <ContentPage>
      <PillarPageHeader
        pillar="UI/UX"
        title="Lode"
        side="right"
        decorationClassName="decoration-[var(--accent)]"
      >
        For a live sensor feed like this, you need to trust it&apos;s{" "}
        <TextHighlight>actually live</TextHighlight>
        , and still be able to <TextHighlight>look back</TextHighlight> at
        what happened before you started watching.
      </PillarPageHeader>
      <ImageBlock
        title="Time range"
        side="left"
        width="clamp(200px, 60vw, 1300px)"
        aspectRatio="16/9"
        src="/media/lode/ui-ux-history.png"
        alt="Time range selector scoping charts to a window"
        className="md:px-[70px]"
      >
        <p>
          A{" "}
          <TextHighlight>time range selector</TextHighlight>{" "}
          scopes every chart to a window — 20 minutes, 1 hour, 5 hours, or
          multiple days.
        </p>
      </ImageBlock>
      <VideoBlock
        title="Live status"
        side="right"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/9"
        src="/media/lode/ui-ux-status.mp4"
        className="md:px-[20px]"
      >
        <p>
          A{" "}
          <TextHighlight>status badge</TextHighlight>{" "}
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
      </VideoBlock>
      <ImageBlock
        title="Physical display"
        side="left"
        width="clamp(200px, 45vw, 800px)"
        aspectRatio="12/10"
        src="/media/lode/ui-ux-display.png"
        alt="Physical display showing the same live data"
        className="md:px-[100px]"
      >
        <p>
          A{" "}
          <TextHighlight>physical display</TextHighlight>{" "}
          mirrors the same data, so it&apos;s visible at a glance without
          opening the app.
        </p>
      </ImageBlock>
    </ContentPage>
  );
}

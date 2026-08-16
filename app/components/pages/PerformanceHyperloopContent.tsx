import ImageBlock from "../ui/ImageBlock";
import VideoBlock from "../ui/VideoBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";
import PillarPageHeader from "../ui/PillarPageHeader";

export default function PerformanceHyperloopContent() {
  return (
    <ContentPage>
      <PillarPageHeader
        pillar="Performance"
        title="Hyperloop Control Station"
        side="right"
        pillarColorClassName="text-background/10"
        titleColorClassName="text-background"
        decorationClassName="decoration-[var(--accent)]"
        textColorClassName="text-background"
      >
        With new data arriving faster than every{" "}
        <TextHighlight className="text-background bg-background/10">
          100ms
        </TextHighlight>{" "}
        across dozens of charts, redrawing the whole interface on every packet
        isn&apos;t an option.
      </PillarPageHeader>
      <VideoBlock
        title="Batched updates"
        side="left"
        width="clamp(320px, 55vw, 1300px)"
        aspectRatio="16/9"
        src="/media/hyperloop/performance-batching.mp4"
        className="md:px-[70px]"
        textColorClassName="text-background"
      >
        <p>
          Incoming packets are{" "}
          <TextHighlight className="text-background bg-background/10">
            batched
          </TextHighlight>{" "}
          instead of triggering an immediate render, so the{" "}
          <TextHighlight className="text-background bg-background/10">
            whole interface never re-renders on every packet
          </TextHighlight>{" "}
          — even with many charts live and data arriving faster than the eye can
          follow.
        </p>
      </VideoBlock>
      <VideoBlock
        title="Virtualized telemetry panel"
        side="right"
        width="clamp(200px, 55vw, 1200px)"
        aspectRatio="16/10"
        src="/media/hyperloop/performance-virtualized-list.mp4"
        className="md:px-[70px]"
        textColorClassName="text-background"
      >
        <p>
          The telemetry panel is{" "}
          <TextHighlight className="text-background bg-background/10">
            virtualized
          </TextHighlight>
          , so rows with{" "}
          <TextHighlight className="text-background bg-background/10">
            constantly changing colors and values
          </TextHighlight>{" "}
          that aren&apos;t currently visible to the user skip updating entirely.
        </p>
      </VideoBlock>
      <ImageBlock
        title="Bounded chart memory"
        side="left"
        width="clamp(320px, 55vw, 1200px)"
        aspectRatio="520/375"
        src="/media/hyperloop/performance-buffer.png"
        alt="Maximum buffer size setting for chart memory usage"
        className="md:px-[70px]"
        textColorClassName="text-background"
      >
        <p>
          Charts don&apos;t store every value{" "}
          <TextHighlight className="text-background bg-background/10">
            forever
          </TextHighlight>
          . A{" "}
          <TextHighlight className="text-background bg-background/10">
            maximum buffer size
          </TextHighlight>{" "}
          lets each user choose how much memory a long-running session is
          allowed to use.
        </p>
      </ImageBlock>
    </ContentPage>
  );
}

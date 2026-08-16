import ImageBlock from "../ui/ImageBlock";
import VideoBlock from "../ui/VideoBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";

export default function PerformanceHyperloopContent() {
  return (
    <ContentPage>
      <div className="flex flex-col items-end justify-center gap-12 h-[60vh] pr-24 mb-12">
        <h1 className="font-display text-background/10 text-6xl sm:text-8xl 3xl:text-9xl">
          Performance
        </h1>
        <h2 className="font-display text-background text-3xl sm:text-5xl 3xl:text-7xl underline decoration-[var(--accent)] decoration-4 underline-offset-8">
          Hyperloop Control Station
        </h2>
        <p className="text-background text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl text-right">
          With new data arriving faster than every{" "}
          <TextHighlight className="text-background bg-background/10">
            100ms
          </TextHighlight>{" "}
          across dozens of charts, redrawing the whole interface on every packet
          isn&apos;t an option.
        </p>
      </div>
      <VideoBlock
        title="Batched updates"
        side="left"
        width="clamp(320px, 60vw, 700px)"
        aspectRatio="16/9"
        src="/media/hyperloop/performance-batching.mp4"
        margin="0 70px 0"
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
          — even with many charts live and data arriving faster than the eye
          can follow.
        </p>
      </VideoBlock>
      <VideoBlock
        title="Virtualized telemetry panel"
        side="right"
        width="clamp(200px, 55vw, 800px)"
        aspectRatio="16/10"
        src="/media/hyperloop/performance-virtualized-list.mp4"
        margin="0 70px 0"
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
          that aren&apos;t currently visible to the user skip updating
          entirely.
        </p>
      </VideoBlock>
      <ImageBlock
        title="Bounded chart memory"
        side="left"
        width="clamp(320px, 55vw, 820px)"
        aspectRatio="520/375"
        src="/media/hyperloop/performance-buffer.png"
        alt="Maximum buffer size setting for chart memory usage"
        margin="0 70px 0"
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

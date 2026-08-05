import ImageBlock from "../ui/ImageBlock";
import VideoBlock from "../ui/VideoBlock";
import ContentPage from "../ui/ContentPage";

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
          <strong className="text-background bg-background/10 px-1 rounded-sm">
            100ms
          </strong>{" "}
          across dozens of charts, redrawing the whole interface on every
          packet isn&apos;t an option.
        </p>
      </div>
      <VideoBlock
        title="Batched updates"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="16/9"
        src="/media/hyperloop/performance-batching.mp4"
        text={
          <p>
            Incoming packets are{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              batched
            </strong>{" "}
            instead of triggering an immediate render, so the{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              whole interface never re-renders on every packet
            </strong>{" "}
            — even with many charts live and data arriving faster than the
            eye can follow.
          </p>
        }
        margin="0 70px 0"
        textColorClassName="text-background"
      />
      <VideoBlock
        title="Virtualized telemetry panel"
        side="right"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/10"
        src="/media/hyperloop/performance-virtualized-list.mp4"
        text={
          <p>
            The telemetry panel is{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              virtualized
            </strong>
            , so rows with{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              constantly changing colors and values
            </strong>{" "}
            that aren&apos;t currently visible to the user skip updating
            entirely.
          </p>
        }
        margin="0 20px 0"
        textColorClassName="text-background"
      />
      <ImageBlock
        title="Bounded chart memory"
        side="left"
        width="clamp(260px, 40vw, 520px)"
        aspectRatio="16/10"
        src="/media/hyperloop/performance-buffer.png"
        alt="Maximum buffer size setting for chart memory usage"
        text={
          <p>
            Charts don&apos;t store every value{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              forever
            </strong>
            . A{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              maximum buffer size
            </strong>{" "}
            lets each user choose how much memory a long-running session is
            allowed to use.
          </p>
        }
        margin="0 50px 0"
        textColorClassName="text-background"
      />
    </ContentPage>
  );
}

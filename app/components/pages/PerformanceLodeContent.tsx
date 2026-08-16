import ImageBlock from "../ui/ImageBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";

export default function PerformanceLodeContent() {
  return (
    <ContentPage>
      <div className="flex flex-col items-end justify-center gap-12 h-[60vh] pr-24 mb-12">
        <h1 className="font-display text-background/10 text-6xl sm:text-8xl 3xl:text-9xl">
          Performance
        </h1>
        <h2 className="font-display text-background text-3xl sm:text-5xl 3xl:text-7xl underline decoration-[var(--accent)] decoration-4 underline-offset-8">
          Lode
        </h2>
        <p className="text-background text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl text-right">
          Every reading has to reach every connected dashboard{" "}
          <TextHighlight className="text-background bg-background/10">
            in real time
          </TextHighlight>
          , without letting database writes slow down the stream.
        </p>
      </div>
      <ImageBlock
        title="Dual-channel pipeline"
        side="left"
        width="clamp(320px, 60vw, 700px)"
        aspectRatio="1120/735"
        src="/media/lode/performance-sse.png"
        alt="Browser dev tools EventStream tab showing readings streamed over SSE"
        margin="0 70px 0"
        textColorClassName="text-background"
      >
        <p>
          Each incoming reading is{" "}
          <TextHighlight className="text-background bg-background/10">
            broadcast to every connected SSE client
          </TextHighlight>{" "}
          immediately, on a separate channel from persistence — so{" "}
          <TextHighlight className="text-background bg-background/10">
            one reading fans out to many dashboards
          </TextHighlight>{" "}
          without re-querying the database per client.
        </p>
      </ImageBlock>
      <ImageBlock
        title="Batched writes"
        side="right"
        width="clamp(200px, 60vw, 700px)"
        aspectRatio="840/145"
        src="/media/lode/performance-batching.png"
        alt="Code buffering readings and batch-inserting them every 30 seconds"
        margin="0 70px 0"
        textColorClassName="text-background"
      >
        <p>
          Readings aren&apos;t written to Postgres one by one. They&apos;re{" "}
          <TextHighlight className="text-background bg-background/10">
            buffered and batch-inserted every 30 seconds
          </TextHighlight>
          , cutting database round-trips without delaying what clients see
          live.
        </p>
      </ImageBlock>
      <ImageBlock
        title="Configurable flush interval"
        side="left"
        width="clamp(320px, 55vw, 700px)"
        aspectRatio="736/316"
        src="/media/lode/performance-flush-interval.png"
        alt="Function signature showing flush_interval as a configurable parameter"
        margin="0 70px 0"
        textColorClassName="text-background"
      >
        <p>
          The buffer flush interval is{" "}
          <TextHighlight className="text-background bg-background/10">
            configurable
          </TextHighlight>{" "}
          — 30s in production, 100ms in tests — so tests verify the pipeline
          quickly, without long sleeps.
        </p>
      </ImageBlock>
    </ContentPage>
  );
}

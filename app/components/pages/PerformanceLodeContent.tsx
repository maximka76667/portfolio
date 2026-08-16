import ImageBlock from "../ui/ImageBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";
import PillarPageHeader from "../ui/PillarPageHeader";

export default function PerformanceLodeContent() {
  return (
    <ContentPage>
      <PillarPageHeader
        pillar="Performance"
        title="Lode"
        side="right"
        pillarColorClassName="text-background/10"
        titleColorClassName="text-background"
        decorationClassName="decoration-[var(--accent)]"
        textColorClassName="text-background"
      >
        Every reading has to reach every connected dashboard{" "}
        <TextHighlight className="text-background bg-background/10">
          in real time
        </TextHighlight>
        , without letting database writes slow down the stream.
      </PillarPageHeader>
      <ImageBlock
        title="Dual-channel pipeline"
        side="left"
        width="clamp(320px, 60vw, 700px)"
        aspectRatio="1120/735"
        src="/media/lode/performance-sse.png"
        alt="Browser dev tools EventStream tab showing readings streamed over SSE"
        className="md:px-[70px]"
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
        className="md:px-[70px]"
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
        className="md:px-[70px]"
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

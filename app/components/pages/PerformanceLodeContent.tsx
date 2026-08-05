import AnnotatedBlock from "../ui/AnnotatedBlock";
import ContentPage from "../ui/ContentPage";

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
          <strong className="text-background bg-background/10 px-1 rounded-sm">
            in real time
          </strong>
          , without letting database writes slow down the stream.
        </p>
      </div>
      <AnnotatedBlock
        title="Dual-channel pipeline"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="16/9"
        text={
          <p>
            Each incoming reading is{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              broadcast to every connected SSE client
            </strong>{" "}
            immediately, on a separate channel from persistence — so{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              one reading fans out to many dashboards
            </strong>{" "}
            without re-querying the database per client.
          </p>
        }
        textColorClassName="text-background"
      />
      <AnnotatedBlock
        title="Batched writes"
        side="right"
        width="clamp(220px, 28vw, 340px)"
        aspectRatio="3/4"
        text={
          <p>
            Readings aren&apos;t written to Postgres one by one. They&apos;re{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              buffered and batch-inserted every 30 seconds
            </strong>
            , cutting database round-trips without delaying what clients see
            live.
          </p>
        }
        textColorClassName="text-background"
      />
      <AnnotatedBlock
        title="Configurable flush interval"
        side="left"
        width="clamp(260px, 40vw, 520px)"
        aspectRatio="16/10"
        text={
          <p>
            The buffer flush interval is{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              configurable
            </strong>{" "}
            — 30s in production, 100ms in tests — so tests verify the
            pipeline quickly, without long sleeps.
          </p>
        }
        textColorClassName="text-background"
      />
    </ContentPage>
  );
}

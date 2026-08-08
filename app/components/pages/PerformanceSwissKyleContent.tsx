import ImageBlock from "../ui/ImageBlock";
import ContentPage from "../ui/ContentPage";

export default function PerformanceSwissKyleContent() {
  return (
    <ContentPage>
      <div className="flex flex-col items-start justify-center gap-12 h-[60vh] pl-24 mb-12">
        <h1 className="font-display text-background/10 text-6xl sm:text-8xl 3xl:text-9xl">
          Performance
        </h1>
        <h2 className="font-display text-background text-3xl sm:text-5xl 3xl:text-7xl underline decoration-accent decoration-4 underline-offset-8">
          Swiss Kyle
        </h2>
        <p className="text-background text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl">
          Every action kicks off its own background job — many can run at
          once, and one shouldn&apos;t slow down or break another.
        </p>
      </div>
      <ImageBlock
        title="Worker pool"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="1078/394"
        src="/media/swiss-kyle/performance-workers.png"
        alt="Worker pool status panel showing four idle workers"
        text={
          <p>
            Jobs are{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              distributed across a pool of 4 workers
            </strong>
            , so{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              up to 4 jobs run at once without affecting each other
            </strong>{" "}
            — a slow or failing job never blocks the rest.
          </p>
        }
        margin="0 70px 0"
        textColorClassName="text-background"
      />
      <ImageBlock
        title="Job queue"
        side="right"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="1044/888"
        src="/media/swiss-kyle/performance-queue.png"
        alt="Job queue with several jobs in progress"
        text={
          <p>
            If no worker is free, the job is{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              queued with NATS JetStream
            </strong>{" "}
            instead of dropped or run inline.
          </p>
        }
        margin="0 20px 0"
        textColorClassName="text-background"
      />
      <ImageBlock
        title="Failover"
        side="left"
        width="clamp(320px, 55vw, 820px)"
        aspectRatio="1432/517"
        src="/media/swiss-kyle/performance-failover.png"
        alt="Worker log showing workers re-entering the fetch loop"
        text={
          <p>
            If a worker{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              fails
            </strong>
            , its job isn&apos;t lost — thanks to the persistent queue, it{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              gets picked up by another worker
            </strong>{" "}
            instead.
          </p>
        }
        margin="0 50px 0"
        textColorClassName="text-background"
      />
    </ContentPage>
  );
}

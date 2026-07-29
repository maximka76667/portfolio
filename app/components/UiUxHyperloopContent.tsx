import VideoBlock from "./VideoBlock";

export default function UiUxHyperloopContent() {
  return (
    <div className="min-h-full flex flex-col justify-center gap-32 pt-24 pb-100">
      <div className="flex flex-col items-end justify-center gap-12 h-[60vh] pr-24 mb-12">
        <h1 className="font-display text-[#e4ded4] text-6xl sm:text-8xl">
          UI/UX
        </h1>
        <h2 className="font-display text-foreground text-3xl sm:text-5xl underline decoration-[var(--accent)] decoration-4 underline-offset-8">
          Hyperloop Control Station
        </h2>
      </div>
      <VideoBlock
        side="left"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="16/7"
        src="/media/hyperloop/ui-ux-hyperloop-state.mp4"
        text={
          <>
            <p>
              The app always shows its current state —{" "}
              <span className="text-status-active bg-status-active/10 px-1 rounded-sm">active</span>,{" "}
              <span className="text-status-loading bg-status-loading/10 px-1 rounded-sm">loading</span>,{" "}
              <span className="text-status-error bg-status-error/10 px-1 rounded-sm">error</span>, or{" "}
              <span className="text-status-dev bg-status-dev/10 px-1 rounded-sm">dev mode</span>.
            </p>
            <p>
              While loading, the relevant functionality is{" "}
              <strong className="text-accent bg-accent/10 px-1 rounded-sm">disabled</strong>, so the user can&apos;t interact with it
              unintentionally.
            </p>
          </>
        }
        margin="0 70px 0"
      />
      <VideoBlock
        side="right"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="16/10"
        src="/media/hyperloop/ui-ux-hyperloop.mp4"
        text={
          <>
            <p>
              Charts are built with <strong className="text-accent bg-accent/10 px-1 rounded-sm">drag and drop</strong> — drag a
              variable onto the canvas to create a chart, or onto an existing
              chart to add it there.
            </p>
            <p>
              For anyone who&apos;d rather not drag, a{" "}
              <strong className="text-accent bg-accent/10 px-1 rounded-sm">plus button</strong> does the same thing manually.
            </p>
          </>
        }
      />
      <VideoBlock
        side="left"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="16/9"
        src="/media/hyperloop/ui-ux-hyperloop-workspaces.mp4"
        text={
          <>
            <p>
              Different configurations live in different workspaces, so
              switching context is <strong className="text-accent bg-accent/10 px-1 rounded-sm">one click</strong> instead of reconfiguring
              everything.
            </p>
            <p>
              New workspaces can be added <strong className="text-accent bg-accent/10 px-1 rounded-sm">anytime</strong>, for however many setups you
              need.
            </p>
          </>
        }
        margin="0 50px 0"
      />
      <VideoBlock
        side="right"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="16/9"
        src="/media/hyperloop/ui-ux-hyperloop-keybindings.mp4"
        text={
          <>
            <p>
              Every user can <strong className="text-accent bg-accent/10 px-1 rounded-sm">bind their own keys</strong> to commands, for speed and
              convenience that match how they actually work.
            </p>
            <p>
              For critical commands, keybindings provide a <strong className="text-accent bg-accent/10 px-1 rounded-sm">fast way</strong> to execute
              them.
            </p>
          </>
        }
        margin="0 30px 0"
      />
    </div>
  );
}

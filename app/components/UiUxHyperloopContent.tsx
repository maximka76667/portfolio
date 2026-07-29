import VideoBlock from "./VideoBlock";

export default function UiUxHyperloopContent() {
  return (
    <div className="min-h-full flex flex-col justify-center gap-32 pt-24 pb-100">
      <p className="text-black text-2xl sm:text-4xl font-medium px-6 text-center mb-12">
        Hyperloop — UI/UX
      </p>
      <VideoBlock
        side="left"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="16/7"
        src="/media/hyperloop/ui-ux-hyperloop-state.mp4"
        text={
          <>
            <p>
              The app always shows its current state — <span className="text-green-700">active</span>,{" "}
              <span className="text-blue-700">loading</span>,{" "}
              <span className="text-red-700">error</span>, or{" "}
              <span className="text-orange-600">dev mode</span>.
            </p>
            <p>While loading, the relevant functionality is disabled so the user can&apos;t interact with it unintentionally.</p>
          </>
        }
        margin="0 0 0 70px"
      />
      <VideoBlock
        side="right"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="16/10"
        src="/media/hyperloop/ui-ux-hyperloop.mp4"
        text={
          <>
            <p>Charts are built with drag and drop — drag a variable onto the canvas to create a chart, or onto an existing chart to add it there.</p>
            <p>For anyone who&apos;d rather not drag, a plus button does the same thing manually.</p>
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
            <p>Different configurations live in different workspaces, so switching context is one click instead of reconfiguring everything.</p>
            <p>New workspaces can be added anytime, for however many setups you need.</p>
          </>
        }
      />
      <VideoBlock
        side="right"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="16/9"
        src="/media/hyperloop/ui-ux-hyperloop-keybindings.mp4"
        text={
          <>
            <p>Every user can bind their own keys to commands, for speed and convenience that match how they actually work.</p>
            <p>For critical commands, keybindings provide a fast way to execute them.</p>
          </>
        }
      />
    </div>
  );
}

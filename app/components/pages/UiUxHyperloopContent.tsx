import VideoBlock from "../ui/VideoBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";
import PillarPageHeader from "../ui/PillarPageHeader";

export default function UiUxHyperloopContent() {
  return (
    <ContentPage>
      <PillarPageHeader
        pillar="UI/UX"
        title="Hyperloop Control Station"
        side="right"
        decorationClassName="decoration-[var(--accent)]"
      >
        For a critical system like this one, you need to always be{" "}
        <TextHighlight>aware of its state</TextHighlight>
        , and a fast way to get to what you actually want to see.
      </PillarPageHeader>
      <VideoBlock
        title="State"
        side="left"
        width="clamp(200px, 60vw, 1300px)"
        aspectRatio="16/7"
        src="/media/hyperloop/ui-ux-hyperloop-state.mp4"
        className="md:px-[70px]"
      >
        <p>
          The app always shows its current state —{" "}
          <span className="text-status-active bg-status-active/10 px-1 rounded-sm">
            active
          </span>
          ,{" "}
          <span className="text-status-loading bg-status-loading/10 px-1 rounded-sm">
            loading
          </span>
          ,{" "}
          <span className="text-status-error bg-status-error/10 px-1 rounded-sm">
            error
          </span>
          , or{" "}
          <span className="text-status-dev bg-status-dev/10 px-1 rounded-sm">
            dev mode
          </span>
          .
        </p>
        <p>
          While loading, the relevant functionality is{" "}
          <TextHighlight>disabled</TextHighlight>
          , so the user can&apos;t interact with it unintentionally.
        </p>
      </VideoBlock>
      <VideoBlock
        title="Drag and drop"
        side="right"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/10"
        src="/media/hyperloop/ui-ux-hyperloop-dnd.mp4"
        className="md:px-[20px]"
      >
        <p>
          Charts are built with{" "}
          <TextHighlight>drag and drop</TextHighlight>{" "}
          — drag a variable onto the canvas to create a chart, or onto an
          existing chart to add it there.
        </p>
        <p>
          For anyone who&apos;d rather not drag, a{" "}
          <TextHighlight>plus button</TextHighlight>{" "}
          does the same thing manually.
        </p>
      </VideoBlock>
      <VideoBlock
        title="Workspaces"
        side="left"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/9"
        src="/media/hyperloop/ui-ux-hyperloop-workspaces.mp4"
        className="md:px-[50px]"
      >
        <p>
          Different configurations live in different workspaces, so
          switching context is{" "}
          <TextHighlight>one click</TextHighlight>{" "}
          instead of reconfiguring everything.
        </p>
        <p>
          New workspaces can be added{" "}
          <TextHighlight>anytime</TextHighlight>
          , for however many setups you need.
        </p>
      </VideoBlock>
      <VideoBlock
        title="Keybindings"
        side="right"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/9"
        src="/media/hyperloop/ui-ux-hyperloop-keybindings.mp4"
        className="md:px-[30px]"
      >
        <p>
          Every user can{" "}
          <TextHighlight>bind their own keys</TextHighlight>{" "}
          to commands, for speed and convenience that match how they
          actually work.
        </p>
        <p>
          For critical commands, keybindings provide a{" "}
          <TextHighlight>fast way</TextHighlight>{" "}
          to execute them.
        </p>
      </VideoBlock>
    </ContentPage>
  );
}

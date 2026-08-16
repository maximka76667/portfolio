import ImageBlock from "../ui/ImageBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";

export default function OsCompatibilityHyperloopContent() {
  return (
    <ContentPage>
      <div className="flex flex-col items-end justify-center gap-12 h-[60vh] pr-24 mb-12">
        <h1 className="font-display text-background/10 text-6xl sm:text-8xl 3xl:text-9xl">
          OS Compatibility
        </h1>
        <h2 className="font-display text-background text-3xl sm:text-5xl 3xl:text-7xl underline decoration-black decoration-4 underline-offset-8">
          Hyperloop Control Station
        </h2>
        <p className="text-background text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl text-right">
          It needed to work for{" "}
          <TextHighlight className="text-background bg-background/10">
            every team member
          </TextHighlight>
          , whatever OS they already had on their own machine.
        </p>
      </div>
      <ImageBlock
        title="One tool, every teammate"
        side="left"
        width="clamp(320px, 60vw, 700px)"
        aspectRatio="1280/718"
        src="/media/hyperloop/comp-member.jpg"
        alt="Team member using the Control Station on their own machine"
        margin="0 70px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      >
        <p>
          The Control Station had to run on{" "}
          <TextHighlight className="text-background bg-background/10">
            each team member&apos;s own machine
          </TextHighlight>{" "}
          — there was no shared or standardized setup to target.
        </p>
      </ImageBlock>
      <ImageBlock
        title="Windows, macOS, and Linux"
        side="right"
        width="clamp(200px, 60vw, 700px)"
        aspectRatio="1771/1105"
        src="/media/hyperloop/comp-distributives.png"
        alt="Control Station running across Windows, macOS, and Linux distributions"
        margin="0 70px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      >
        <p>
          That meant supporting{" "}
          <TextHighlight className="text-background bg-background/10">
            Windows
          </TextHighlight>
          ,{" "}
          <TextHighlight className="text-background bg-background/10">
            macOS
          </TextHighlight>{" "}
          (Intel and Apple Silicon), and a range of{" "}
          <TextHighlight className="text-background bg-background/10">
            Linux distributions
          </TextHighlight>{" "}
          — Mint, Ubuntu, Fedora, Arch, and others.
        </p>
      </ImageBlock>
      <ImageBlock
        title="One codebase, via Electron"
        side="left"
        width="clamp(320px, 55vw, 700px)"
        aspectRatio="1554/952"
        src="/media/hyperloop/comp-electron.png"
        alt="Electron app running as a native build"
        margin="0 70px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      >
        <p>
          Built with{" "}
          <TextHighlight className="text-background bg-background/10">
            Electron
          </TextHighlight>
          , so the same codebase ships as a{" "}
          <TextHighlight className="text-background bg-background/10">
            native app on every platform
          </TextHighlight>{" "}
          instead of maintaining separate builds per OS.
        </p>
      </ImageBlock>
    </ContentPage>
  );
}

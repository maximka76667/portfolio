import AnnotatedBlock from "../ui/AnnotatedBlock";
import ContentPage from "../ui/ContentPage";

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
          <strong className="text-background bg-background/10 px-1 rounded-sm">
            every team member
          </strong>
          , whatever OS they already had on their own machine.
        </p>
      </div>
      <AnnotatedBlock
        title="One tool, every teammate"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="16/9"
        text={
          <p>
            The Control Station had to run on{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              each team member&apos;s own machine
            </strong>{" "}
            — there was no shared or standardized setup to target.
          </p>
        }
        margin="0 70px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
      <AnnotatedBlock
        title="Windows, macOS, and Linux"
        side="right"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/10"
        text={
          <p>
            That meant supporting{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              Windows
            </strong>
            ,{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              macOS
            </strong>{" "}
            (Intel and Apple Silicon), and a range of{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              Linux distributions
            </strong>{" "}
            — Mint, Ubuntu, Fedora, Arch, and others.
          </p>
        }
        margin="0 20px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
      <AnnotatedBlock
        title="One codebase, via Electron"
        side="left"
        width="clamp(260px, 40vw, 520px)"
        aspectRatio="16/10"
        text={
          <p>
            Built with{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              Electron
            </strong>
            , so the same codebase ships as a{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              native app on every platform
            </strong>{" "}
            instead of maintaining separate builds per OS.
          </p>
        }
        margin="0 50px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
    </ContentPage>
  );
}

import ImageBlock from "../ui/ImageBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";

export default function OsCompatibilityLodeContent() {
  return (
    <ContentPage>
      <div className="flex flex-col items-end justify-center gap-12 h-[60vh] pr-24 mb-12">
        <h1 className="font-display text-background/10 text-6xl sm:text-8xl 3xl:text-9xl">
          OS Compatibility
        </h1>
        <h2 className="font-display text-background text-3xl sm:text-5xl 3xl:text-7xl underline decoration-black decoration-4 underline-offset-8">
          Lode
        </h2>
        <p className="text-background text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl text-right">
          I built it as a{" "}
          <TextHighlight className="text-background bg-background/10">
            web app
          </TextHighlight>
          , so the dashboard is{" "}
          <TextHighlight className="text-background bg-background/10">
            easily accessible
          </TextHighlight>{" "}
          from any device, with no install required.
        </p>
      </div>
      <ImageBlock
        title="Sensor drivers"
        side="left"
        width="clamp(320px, 60vw, 700px)"
        aspectRatio="16/9"
        margin="0 70px 0"
        src="/media/lode/os-drivers.png"
        alt="Rust sensor drivers running across STM32 variants"
        titleColorClassName="text-background"
        textColorClassName="text-background"
        text={
          <p>
            The sensor drivers are written in{" "}
            <TextHighlight className="text-background bg-background/10">
              Rust
            </TextHighlight>
            , so the same firmware runs across{" "}
            <TextHighlight className="text-background bg-background/10">
              different STM32 variants
            </TextHighlight>{" "}
            without rewriting the low-level code.
          </p>
        }
      />
      <div className="w-full flex flex-col items-center justify-center gap-4 py-24 text-center">
        <p className="text-background text-lg sm:text-xl 3xl:text-2xl font-medium">
          It runs in the browser — no setup needed.
        </p>
        <a
          href="https://lode-ui.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-background text-2xl sm:text-3xl 3xl:text-4xl underline decoration-black decoration-4 underline-offset-8 hover:text-status-active transition-colors"
        >
          Try it yourself →
        </a>
      </div>
    </ContentPage>
  );
}

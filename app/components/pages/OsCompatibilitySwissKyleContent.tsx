import ImageBlock from "../ui/ImageBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";

export default function OsCompatibilitySwissKyleContent() {
  return (
    <ContentPage>
      <div className="flex flex-col items-start justify-center gap-12 h-[60vh] pl-24 mb-12">
        <h1 className="font-display text-background/10 text-6xl sm:text-8xl 3xl:text-9xl">
          OS Compatibility
        </h1>
        <h2 className="font-display text-background text-3xl sm:text-5xl 3xl:text-7xl underline decoration-black decoration-4 underline-offset-8">
          Swiss Kyle
        </h2>
        <p className="text-background text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl">
          Built with{" "}
          <TextHighlight className="text-background bg-background/10">
            Tauri
          </TextHighlight>
          , so the same app runs natively on both{" "}
          <TextHighlight className="text-background bg-background/10">
            Linux and Windows
          </TextHighlight>
          .
        </p>
      </div>
      <ImageBlock
        title="Native on Linux and Windows"
        side="left"
        width="clamp(320px, 60vw, 700px)"
        aspectRatio="1408/594"
        src="/media/swiss-kyle/comp-installers.png"
        alt="Release assets with native installers for Linux and Windows"
        text={
          <p>
            The desktop app is built with{" "}
            <TextHighlight className="text-background bg-background/10">
              Tauri
            </TextHighlight>
            , compiled as a{" "}
            <TextHighlight className="text-background bg-background/10">
              native build for each platform
            </TextHighlight>{" "}
            rather than one shared bundle.
          </p>
        }
        margin="0 70px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
      <ImageBlock
        title="Per-platform sidecars"
        side="right"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="732/541"
        src="/media/swiss-kyle/comp-sidecars.png"
        alt="Installer extracting a bundled per-platform ffmpeg sidecar binary"
        text={
          <p>
            The app bundles external tool binaries —{" "}
            <TextHighlight className="text-background bg-background/10">
              nats-server, pandoc, typst, pdfcpu, ffmpeg
            </TextHighlight>{" "}
            — pinned and downloaded{" "}
            <TextHighlight className="text-background bg-background/10">
              per OS at build time
            </TextHighlight>
            .
          </p>
        }
        margin="0 20px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
      <ImageBlock
        title="Windows-only conversion path"
        side="left"
        width="clamp(320px, 55vw, 800px)"
        aspectRatio="1062/381"
        src="/media/swiss-kyle/comp-word.png"
        alt="PDF converter dropdown showing Microsoft Word (Windows only) and LibreOffice"
        text={
          <p>
            Office-to-PDF conversion needs{" "}
            <TextHighlight className="text-background bg-background/10">
              LibreOffice or Microsoft Word
            </TextHighlight>
            . Since Word only exists on Windows, that conversion path{" "}
            <TextHighlight className="text-background bg-background/10">
              branches by OS
            </TextHighlight>
            .
          </p>
        }
        margin="0 50px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
    </ContentPage>
  );
}

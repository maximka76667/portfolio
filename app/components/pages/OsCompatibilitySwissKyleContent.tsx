import ImageBlock from "../ui/ImageBlock";
import ContentPage from "../ui/ContentPage";
import TextHighlight from "../ui/TextHighlight";
import PillarPageHeader from "../ui/PillarPageHeader";

export default function OsCompatibilitySwissKyleContent() {
  return (
    <ContentPage>
      <PillarPageHeader
        pillar="OS Compatibility"
        title="Swiss Kyle"
        side="left"
        pillarColorClassName="text-background/10"
        titleColorClassName="text-background"
        decorationClassName="decoration-black"
        textColorClassName="text-background"
      >
        Built with{" "}
        <TextHighlight className="text-background bg-background/10">
          Tauri
        </TextHighlight>
        , so the same app runs natively on both{" "}
        <TextHighlight className="text-background bg-background/10">
          Linux and Windows
        </TextHighlight>
        .
      </PillarPageHeader>
      <ImageBlock
        title="Native on Linux and Windows"
        side="left"
        width="clamp(320px, 60vw, 700px)"
        aspectRatio="1408/594"
        src="/media/swiss-kyle/comp-installers.png"
        alt="Release assets with native installers for Linux and Windows"
        className="md:px-[70px]"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      >
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
      </ImageBlock>
      <ImageBlock
        title="Per-platform sidecars"
        side="right"
        width="clamp(200px, 60vw, 1000px)"
        aspectRatio="732/541"
        src="/media/swiss-kyle/comp-sidecars.png"
        alt="Installer extracting a bundled per-platform ffmpeg sidecar binary"
        className="md:px-[20px]"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      >
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
      </ImageBlock>
      <ImageBlock
        title="Windows-only conversion path"
        side="left"
        width="clamp(320px, 55vw, 800px)"
        aspectRatio="1062/381"
        src="/media/swiss-kyle/comp-word.png"
        alt="PDF converter dropdown showing Microsoft Word (Windows only) and LibreOffice"
        className="md:px-[50px]"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      >
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
      </ImageBlock>
    </ContentPage>
  );
}

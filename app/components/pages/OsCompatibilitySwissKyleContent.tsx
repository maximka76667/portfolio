import ImageBlock from "../ui/ImageBlock";
import ContentPage from "../ui/ContentPage";

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
          <strong className="text-background bg-background/10 px-1 rounded-sm">
            Tauri
          </strong>
          , so the same app runs natively on both{" "}
          <strong className="text-background bg-background/10 px-1 rounded-sm">
            Linux and Windows
          </strong>
          .
        </p>
      </div>
      <ImageBlock
        title="Native on Linux and Windows"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="1408/594"
        src="/media/swiss-kyle/comp-installers.png"
        alt="Release assets with native installers for Linux and Windows"
        text={
          <p>
            The desktop app is built with{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              Tauri
            </strong>
            , compiled as a{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              native build for each platform
            </strong>{" "}
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
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="732/541"
        src="/media/swiss-kyle/comp-sidecars.png"
        alt="Installer extracting a bundled per-platform ffmpeg sidecar binary"
        text={
          <p>
            The app bundles external tool binaries —{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              nats-server, pandoc, typst, pdfcpu, ffmpeg
            </strong>{" "}
            — pinned and downloaded{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              per OS at build time
            </strong>
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
        width="clamp(320px, 55vw, 820px)"
        aspectRatio="1062/381"
        src="/media/swiss-kyle/comp-word.png"
        alt="PDF converter dropdown showing Microsoft Word (Windows only) and LibreOffice"
        text={
          <p>
            Office-to-PDF conversion needs{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              LibreOffice or Microsoft Word
            </strong>
            . Since Word only exists on Windows, that conversion path{" "}
            <strong className="text-background bg-background/10 px-1 rounded-sm">
              branches by OS
            </strong>
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

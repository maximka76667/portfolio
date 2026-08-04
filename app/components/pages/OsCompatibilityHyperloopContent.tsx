import AnnotatedBlock from "../ui/AnnotatedBlock";
import ContentPage from "../ui/ContentPage";

export default function OsCompatibilityHyperloopContent() {
  return (
    <ContentPage>
      <div className="flex flex-col items-end justify-center gap-12 h-[60vh] pr-24 mb-12">
        <h1 className="font-display text-background/10 text-6xl sm:text-8xl 3xl:text-9xl">
          OS Compatibility
        </h1>
        <h2 className="font-display text-background text-3xl sm:text-5xl 3xl:text-7xl underline decoration-background decoration-4 underline-offset-8">
          Hyperloop Control Station
        </h2>
        <p className="text-background text-lg sm:text-xl 3xl:text-2xl font-medium max-w-md 3xl:max-w-xl text-right">
          Placeholder — describe the OS compatibility challenge for Hyperloop
          here.
        </p>
      </div>
      <AnnotatedBlock
        title="First platform — placeholder"
        side="left"
        width="clamp(320px, 60vw, 900px)"
        aspectRatio="16/9"
        text="Explain the first OS compatibility decision here."
        margin="0 70px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
      <AnnotatedBlock
        title="Second platform — placeholder"
        side="right"
        width="clamp(200px, 60vw, 1200px)"
        aspectRatio="16/10"
        text="Explain the second OS compatibility decision here."
        margin="0 20px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
      <AnnotatedBlock
        title="Third platform — placeholder"
        side="left"
        width="clamp(260px, 40vw, 520px)"
        aspectRatio="16/10"
        text="Explain the third OS compatibility decision here."
        margin="0 50px 0"
        titleColorClassName="text-background"
        textColorClassName="text-background"
      />
    </ContentPage>
  );
}

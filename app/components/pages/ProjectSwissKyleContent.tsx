import ProjectOverview from "../ui/ProjectOverview";
import ZoomableScreenshot from "../ui/ZoomableScreenshot";

export default function ProjectSwissKyleContent() {
  return (
    <ProjectOverview
      name="Swiss Kyle"
      description="A local desktop toolbox for frequently used services such as video cutting, document conversion, and PDF merging. You need neither an account nor an internet connection."
      media={
        <ZoomableScreenshot
          src="/media/swiss-kyle/thumbnail.png"
          alt="Swiss Kyle"
        />
      }
    />
  );
}

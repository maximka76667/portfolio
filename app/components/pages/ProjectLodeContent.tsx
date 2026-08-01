import ProjectOverview from "../ui/ProjectOverview";
import ZoomableScreenshot from "../ui/ZoomableScreenshot";

export default function ProjectLodeContent() {
  return (
    <ProjectOverview
      name="Lode"
      description="A live sensor dashboard for an STM32-based board — temperature, humidity, pressure, and human presence, streamed in real time over Ethernet."
      media={
        <ZoomableScreenshot src="/media/lode/thumbnail.png" alt="Lode" />
      }
    />
  );
}

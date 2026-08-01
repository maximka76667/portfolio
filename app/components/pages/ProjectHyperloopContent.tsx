import ProjectOverview from "../ui/ProjectOverview";
import ZoomableScreenshot from "../ui/ZoomableScreenshot";

export default function ProjectHyperloopContent() {
  return (
    <ProjectOverview
      name="Hyperloop Control Station"
      description="A live control and monitoring dashboard for Hyperloop UPV's pod — drag-and-drop charts, workspaces, and keybindings built for a team that needs to trust what it's seeing."
      media={
        <ZoomableScreenshot
          src="/media/hyperloop/thumbnail.png"
          alt="Hyperloop Control Station"
        />
      }
    />
  );
}

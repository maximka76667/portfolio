import type { ReactNode } from "react";
import StatementContent from "../components/pages/StatementContent";
import WhiteSpaceContent from "../components/pages/WhiteSpaceContent";
import ProjectsIntroContent from "../components/pages/ProjectsIntroContent";
import ProjectHyperloopContent from "../components/pages/ProjectHyperloopContent";
import ProjectHyperloopTeamContent from "../components/pages/ProjectHyperloopTeamContent";
import ProjectSwissKyleContent from "../components/pages/ProjectSwissKyleContent";
import ProjectSwissKyleStatementContent from "../components/pages/ProjectSwissKyleStatementContent";
import ProjectLodeContent from "../components/pages/ProjectLodeContent";
import ProjectLodeStatementContent from "../components/pages/ProjectLodeStatementContent";
import PillarsTransitionContent from "../components/pages/PillarsTransitionContent";
import PillarsContent from "../components/pages/PillarsContent";
import UiUxIntroContent from "../components/pages/UiUxIntroContent";
import UiUxHyperloopContent from "../components/pages/UiUxHyperloopContent";
import UiUxSwissKyleContent from "../components/pages/UiUxSwissKyleContent";
import UiUxLodeContent from "../components/pages/UiUxLodeContent";
import PerformanceIntroContent from "../components/pages/PerformanceIntroContent";
import PerformanceHyperloopContent from "../components/pages/PerformanceHyperloopContent";
import PerformanceSwissKyleContent from "../components/pages/PerformanceSwissKyleContent";
import PerformanceLodeContent from "../components/pages/PerformanceLodeContent";
import HyperloopPhotosContent from "../components/pages/HyperloopPhotosContent";
import OsCompatibilityIntroContent from "../components/pages/OsCompatibilityIntroContent";
import OsCompatibilityHyperloopContent from "../components/pages/OsCompatibilityHyperloopContent";
import OsCompatibilitySwissKyleContent from "../components/pages/OsCompatibilitySwissKyleContent";
import OsCompatibilityLodeContent from "../components/pages/OsCompatibilityLodeContent";
import ContactContent from "../components/pages/ContactContent";

export type ScreenDef = {
  key: string;
  className?: string;
  advanceOnClick?: boolean;
  scrollable?: boolean;
  render: (goToKey: (key: string) => void, advance: () => void) => ReactNode;
};

export const screenDefs: ScreenDef[] = [
  {
    key: "statement",
    className: "bg-foreground flex items-center justify-center",
    render: () => <StatementContent />,
  },
  {
    key: "white-space",
    className: "bg-background",
    render: () => <WhiteSpaceContent />,
  },
  {
    key: "projects-intro",
    className: "bg-background flex flex-col",
    render: (goToKey) => (
      <ProjectsIntroContent
        onSelectHyperloop={() => goToKey("project-hyperloop")}
        onSelectSwissKyle={() => goToKey("project-swiss-kyle")}
        onSelectLode={() => goToKey("project-lode")}
      />
    ),
  },
  {
    key: "project-hyperloop",
    className: "bg-background flex items-center justify-center",
    render: () => <ProjectHyperloopContent />,
  },
  {
    key: "project-hyperloop-team",
    className: "bg-background flex items-center justify-center",
    render: () => <ProjectHyperloopTeamContent />,
  },
  {
    key: "project-swiss-kyle",
    className: "bg-background flex items-center justify-center",
    render: () => <ProjectSwissKyleContent />,
  },
  {
    key: "project-swiss-kyle-statement",
    className: "bg-background flex items-center justify-center",
    render: () => <ProjectSwissKyleStatementContent />,
  },
  {
    key: "project-lode",
    className: "bg-background flex items-center justify-center",
    render: () => <ProjectLodeContent />,
  },
  {
    key: "project-lode-statement",
    className: "bg-background flex items-center justify-center",
    render: () => <ProjectLodeStatementContent />,
  },
  {
    key: "pillars-transition",
    className: "bg-foreground flex items-center justify-center",
    render: () => <PillarsTransitionContent />,
  },
  {
    key: "pillars",
    advanceOnClick: false,
    render: (goToKey) => (
      <PillarsContent
        onSelectUiUx={() => goToKey("ui-ux-intro")}
        onSelectPerformance={() => goToKey("performance-intro")}
        onSelectOsCompatibility={() => goToKey("os-compatibility-intro")}
      />
    ),
  },
  {
    key: "ui-ux-intro",
    className: "bg-background flex items-center justify-center",
    render: () => <UiUxIntroContent />,
  },
  {
    key: "ui-ux-hyperloop",
    className: "bg-background",
    scrollable: true,
    render: () => <UiUxHyperloopContent />,
  },
  {
    key: "ui-ux-swiss-kyle",
    className: "bg-background",
    scrollable: true,
    render: () => <UiUxSwissKyleContent />,
  },
  {
    key: "ui-ux-lode",
    className: "bg-background",
    scrollable: true,
    render: () => <UiUxLodeContent />,
  },
  {
    key: "performance-intro",
    className: "bg-foreground flex items-center justify-center",
    render: () => <PerformanceIntroContent />,
  },
  {
    key: "performance-hyperloop",
    className: "bg-foreground flex items-center justify-center",
    render: () => <PerformanceHyperloopContent />,
  },
  {
    key: "performance-swiss-kyle",
    className: "bg-foreground flex items-center justify-center",
    render: () => <PerformanceSwissKyleContent />,
  },
  {
    key: "performance-lode",
    className: "bg-foreground flex items-center justify-center",
    render: () => <PerformanceLodeContent />,
  },
  {
    key: "hyperloop-photos",
    className: "bg-accent-dark flex items-center justify-center",
    render: () => <HyperloopPhotosContent />,
  },
  {
    key: "os-compatibility-intro",
    className: "bg-accent flex items-center justify-center",
    render: () => <OsCompatibilityIntroContent />,
  },
  {
    key: "os-compatibility-hyperloop",
    className: "bg-accent flex items-center justify-center",
    render: () => <OsCompatibilityHyperloopContent />,
  },
  {
    key: "os-compatibility-swiss-kyle",
    className: "bg-accent flex items-center justify-center",
    render: () => <OsCompatibilitySwissKyleContent />,
  },
  {
    key: "os-compatibility-lode",
    className: "bg-accent flex items-center justify-center",
    render: () => <OsCompatibilityLodeContent />,
  },
  {
    key: "contact",
    className: "bg-foreground flex items-center justify-center",
    render: () => <ContactContent />,
  },
];

import type { ReactNode } from "react";
import StatementContent from "../components/StatementContent";
import WhiteSpaceContent from "../components/WhiteSpaceContent";
import ProjectsIntroContent from "../components/ProjectsIntroContent";
import PillarsContent from "../components/PillarsContent";
import UiUxIntroContent from "../components/UiUxIntroContent";
import UiUxHyperloopContent from "../components/UiUxHyperloopContent";
import UiUxSwissKyleContent from "../components/UiUxSwissKyleContent";
import UiUxLodeContent from "../components/UiUxLodeContent";
import PerformanceIntroContent from "../components/PerformanceIntroContent";
import PerformanceHyperloopContent from "../components/PerformanceHyperloopContent";
import PerformanceSwissKyleContent from "../components/PerformanceSwissKyleContent";
import PerformanceLodeContent from "../components/PerformanceLodeContent";
import HyperloopPhotosContent from "../components/HyperloopPhotosContent";
import OsCompatibilityIntroContent from "../components/OsCompatibilityIntroContent";
import OsCompatibilityHyperloopContent from "../components/OsCompatibilityHyperloopContent";
import OsCompatibilitySwissKyleContent from "../components/OsCompatibilitySwissKyleContent";
import OsCompatibilityLodeContent from "../components/OsCompatibilityLodeContent";
import ContactContent from "../components/ContactContent";

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
    render: () => <ProjectsIntroContent />,
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

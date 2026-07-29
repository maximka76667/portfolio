"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import Screen from "./components/Screen";
import Breadcrumbs, { type Crumb } from "./components/Breadcrumbs";
import StatementContent from "./components/StatementContent";
import WhiteSpaceContent from "./components/WhiteSpaceContent";
import ProjectsIntroContent from "./components/ProjectsIntroContent";
import PillarsContent from "./components/PillarsContent";
import UiUxIntroContent from "./components/UiUxIntroContent";
import UiUxHyperloopContent from "./components/UiUxHyperloopContent";
import UiUxSwissKyleContent from "./components/UiUxSwissKyleContent";
import UiUxLodeContent from "./components/UiUxLodeContent";
import PerformanceIntroContent from "./components/PerformanceIntroContent";
import PerformanceHyperloopContent from "./components/PerformanceHyperloopContent";
import PerformanceSwissKyleContent from "./components/PerformanceSwissKyleContent";
import PerformanceLodeContent from "./components/PerformanceLodeContent";
import HyperloopPhotosContent from "./components/HyperloopPhotosContent";
import OsCompatibilityIntroContent from "./components/OsCompatibilityIntroContent";
import OsCompatibilityHyperloopContent from "./components/OsCompatibilityHyperloopContent";
import OsCompatibilitySwissKyleContent from "./components/OsCompatibilitySwissKyleContent";
import OsCompatibilityLodeContent from "./components/OsCompatibilityLodeContent";
import ContactContent from "./components/ContactContent";

type ScreenDef = {
  key: string;
  className?: string;
  advanceOnClick?: boolean;
  scrollable?: boolean;
  render: (goToKey: (key: string) => void, advance: () => void) => ReactNode;
};

const screenDefs: ScreenDef[] = [
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
    className: "bg-zinc-900 flex items-center justify-center",
    render: () => <HyperloopPhotosContent />,
  },
  {
    key: "os-compatibility-intro",
    className: "bg-zinc-800 flex items-center justify-center",
    render: () => <OsCompatibilityIntroContent />,
  },
  {
    key: "os-compatibility-hyperloop",
    className: "bg-zinc-800 flex items-center justify-center",
    render: () => <OsCompatibilityHyperloopContent />,
  },
  {
    key: "os-compatibility-swiss-kyle",
    className: "bg-zinc-800 flex items-center justify-center",
    render: () => <OsCompatibilitySwissKyleContent />,
  },
  {
    key: "os-compatibility-lode",
    className: "bg-zinc-800 flex items-center justify-center",
    render: () => <OsCompatibilityLodeContent />,
  },
  {
    key: "contact",
    className: "bg-foreground flex items-center justify-center",
    render: () => <ContactContent />,
  },
];

const HOME: Crumb = { label: "Home", key: "statement" };
const PROJECTS: Crumb = { label: "Projects", key: "projects-intro" };
const PILLARS: Crumb = { label: "Pillars", key: "pillars" };
const UI_UX: Crumb = { label: "UI/UX", key: "ui-ux-intro" };
const PERFORMANCE: Crumb = { label: "Performance", key: "performance-intro" };
const OS_COMPATIBILITY: Crumb = {
  label: "OS Compatibility",
  key: "os-compatibility-intro",
};

const breadcrumbTrails: Partial<Record<string, Crumb[]>> = {
  "projects-intro": [HOME, { label: "Projects" }],
  pillars: [HOME, PROJECTS, { label: "Pillars" }],
  "ui-ux-intro": [HOME, PROJECTS, PILLARS, { label: "UI/UX" }],
  "ui-ux-hyperloop": [
    HOME,
    PROJECTS,
    PILLARS,
    UI_UX,
    { label: "Hyperloop" },
  ],
  "ui-ux-swiss-kyle": [
    HOME,
    PROJECTS,
    PILLARS,
    UI_UX,
    { label: "swiss-kyle" },
  ],
  "ui-ux-lode": [HOME, PROJECTS, PILLARS, UI_UX, { label: "Lode" }],
  "performance-intro": [HOME, PROJECTS, PILLARS, { label: "Performance" }],
  "performance-hyperloop": [
    HOME,
    PROJECTS,
    PILLARS,
    PERFORMANCE,
    { label: "Hyperloop" },
  ],
  "performance-swiss-kyle": [
    HOME,
    PROJECTS,
    PILLARS,
    PERFORMANCE,
    { label: "swiss-kyle" },
  ],
  "performance-lode": [
    HOME,
    PROJECTS,
    PILLARS,
    PERFORMANCE,
    { label: "Lode" },
  ],
  "hyperloop-photos": [HOME, { label: "Hyperloop Photos" }],
  "os-compatibility-intro": [
    HOME,
    PROJECTS,
    PILLARS,
    { label: "OS Compatibility" },
  ],
  "os-compatibility-hyperloop": [
    HOME,
    PROJECTS,
    PILLARS,
    OS_COMPATIBILITY,
    { label: "Hyperloop" },
  ],
  "os-compatibility-swiss-kyle": [
    HOME,
    PROJECTS,
    PILLARS,
    OS_COMPATIBILITY,
    { label: "swiss-kyle" },
  ],
  "os-compatibility-lode": [
    HOME,
    PROJECTS,
    PILLARS,
    OS_COMPATIBILITY,
    { label: "Lode" },
  ],
  contact: [HOME, PROJECTS, PILLARS, { label: "Contact" }],
};

export default function Home() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);
  const screenCount = screenDefs.length;
  const keyToIndex = useMemo(
    () => new Map(screenDefs.map((s, i) => [s.key, i])),
    []
  );

  const goTo = useCallback(
    (next: number) => {
      if (
        animatingRef.current ||
        next === indexRef.current ||
        next < 0 ||
        next >= screenCount
      )
        return;
      const from = Math.min(indexRef.current, next);
      const to = Math.max(indexRef.current, next);
      const animatingLayer = layerRefs.current[from];
      if (!animatingLayer) return;
      const goingForward = next > indexRef.current;
      animatingRef.current = true;

      // Screens skipped over by a multi-step jump snap instantly to their
      // hidden resting state instead of animating, so they never appear as
      // a visible blend during the transition.
      const skipped = layerRefs.current
        .slice(from + 1, to)
        .filter((el): el is HTMLDivElement => el !== null);
      if (skipped.length > 0) {
        gsap.set(skipped, { opacity: goingForward ? 0 : 1 });
        skipped.forEach((el) => {
          el.style.pointerEvents = goingForward ? "none" : "auto";
        });
      }

      if (!goingForward) animatingLayer.style.pointerEvents = "auto";
      gsap.to(animatingLayer, {
        opacity: goingForward ? 0 : 1,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          if (goingForward) animatingLayer.style.pointerEvents = "none";
          indexRef.current = next;
          animatingRef.current = false;
        },
      });
      window.history.replaceState(null, "", `?screen=${next + 1}`);
    },
    [screenCount]
  );

  const goToKey = useCallback(
    (key: string) => {
      const next = keyToIndex.get(key);
      if (next !== undefined) goTo(next);
    },
    [goTo, keyToIndex]
  );

  useLayoutEffect(() => {
    const param = new URLSearchParams(window.location.search).get("screen");
    const initial = param
      ? Math.min(Math.max(Number(param) - 1, 0), screenCount - 1)
      : 0;
    if (!initial) return;
    indexRef.current = initial;
    layerRefs.current.slice(0, initial).forEach((el) => {
      if (!el) return;
      gsap.set(el, { opacity: 0 });
      el.style.pointerEvents = "none";
    });
  }, [screenCount]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const scrollBoundary = (deltaY: number) => {
      const el = scrollRefs.current[indexRef.current];
      if (!el) return true;
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      if (deltaY > 0 && !atBottom) return false;
      if (deltaY < 0 && !atTop) return false;
      return true;
    };

    const onWheel = (e: WheelEvent) => {
      if (!scrollBoundary(e.deltaY)) return;
      e.preventDefault();
      if (e.deltaY > 0) goTo(indexRef.current + 1);
      else if (e.deltaY < 0) goTo(indexRef.current - 1);
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const delta = touchStartY - e.touches[0].clientY;
      if (Math.abs(delta) < 40) return;
      if (!scrollBoundary(delta)) return;
      e.preventDefault();
      touchStartY = e.touches[0].clientY;
      goTo(indexRef.current + (delta > 0 ? 1 : -1));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [goTo]);

  const handleAdvance = () => goTo(indexRef.current + 1);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {[...screenDefs].reverse().map((screen, reversedIdx) => {
        const idx = screenCount - 1 - reversedIdx;
        const isLast = idx === screenCount - 1;
        return (
          <Screen
            key={screen.key}
            ref={
              isLast
                ? undefined
                : (el) => {
                    layerRefs.current[idx] = el;
                  }
            }
            onClick={screen.advanceOnClick === false ? undefined : handleAdvance}
            className={screen.className}
            scrollable={screen.scrollable}
            contentRef={
              screen.scrollable
                ? (el) => {
                    scrollRefs.current[idx] = el;
                  }
                : undefined
            }
            header={
              breadcrumbTrails[screen.key] ? (
                <Breadcrumbs
                  trail={breadcrumbTrails[screen.key]!}
                  onNavigate={goToKey}
                />
              ) : undefined
            }
          >
            {screen.render(goToKey, handleAdvance)}
          </Screen>
        );
      })}
    </div>
  );
}

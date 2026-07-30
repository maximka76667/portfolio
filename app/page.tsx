"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import Screen from "./components/Screen";
import Breadcrumbs from "./components/Breadcrumbs";
import { screenDefs } from "./lib/screenDefs";
import { breadcrumbTrails } from "./lib/breadcrumbTrails";
import { getInitialScreenIndex, getHintState } from "./lib/navigation";

export default function Home() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);
  const hintRef = useRef<HTMLDivElement>(null);
  const screenCount = screenDefs.length;
  const keyToIndex = useMemo(
    () => new Map(screenDefs.map((s, i) => [s.key, i])),
    [],
  );

  const updateHint = useCallback(
    (idx: number) => {
      const el = hintRef.current;
      if (!el) return;
      const { hidden, html } = getHintState(
        screenDefs[idx],
        idx === screenCount - 1,
      );
      el.style.display = hidden ? "none" : "flex";
      el.innerHTML = html;
    },
    [screenCount],
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
          updateHint(next);
        },
      });
      window.history.replaceState(null, "", `?screen=${next + 1}`);
    },
    [screenCount, updateHint],
  );

  const goToKey = useCallback(
    (key: string) => {
      const next = keyToIndex.get(key);
      if (next !== undefined) goTo(next);
    },
    [goTo, keyToIndex],
  );

  useLayoutEffect(() => {
    const initial = getInitialScreenIndex(screenCount);
    updateHint(initial);
    if (!initial) return;
    indexRef.current = initial;
    layerRefs.current.slice(0, initial).forEach((el) => {
      if (!el) return;
      gsap.set(el, { opacity: 0 });
      el.style.pointerEvents = "none";
    });
  }, [screenCount, updateHint]);

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

  const setLayerRef = (idx: number) => (el: HTMLDivElement | null) => {
    layerRefs.current[idx] = el;
  };

  const setScrollRef = (idx: number) => (el: HTMLDivElement | null) => {
    scrollRefs.current[idx] = el;
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {[...screenDefs].reverse().map((screen, reversedIdx) => {
        const idx = screenCount - 1 - reversedIdx;
        const isLast = idx === screenCount - 1;
        const trail = breadcrumbTrails[screen.key];

        return (
          <Screen
            key={screen.key}
            ref={isLast ? undefined : setLayerRef(idx)}
            onClick={
              screen.advanceOnClick === false ? undefined : handleAdvance
            }
            className={screen.className}
            scrollable={screen.scrollable}
            contentRef={screen.scrollable ? setScrollRef(idx) : undefined}
            header={trail && <Breadcrumbs trail={trail} onNavigate={goToKey} />}
          >
            {screen.render(goToKey, handleAdvance)}
          </Screen>
        );
      })}
      <div
        ref={hintRef}
        className="fixed bottom-6 right-6 z-20 hidden items-center gap-2 rounded-full bg-foreground/60 px-4 py-2 text-sm text-background backdrop-blur pointer-events-none [&_span]:leading-none"
      />
    </div>
  );
}

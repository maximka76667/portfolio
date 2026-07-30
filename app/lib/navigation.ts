import type { ScreenDef } from "./screenDefs";

export function getInitialScreenIndex(screenCount: number): number {
  const param = new URLSearchParams(window.location.search).get("screen");
  if (!param) return 0;
  return Math.min(Math.max(Number(param) - 1, 0), screenCount - 1);
}

export function getHintState(
  screen: ScreenDef,
  isLast: boolean
): { hidden: boolean; html: string } {
  const hidden = isLast || (!screen.scrollable && screen.advanceOnClick === false);
  const html = screen.scrollable
    ? '<span class="animate-bounce">↓</span>Scroll'
    : "Click or scroll";
  return { hidden, html };
}

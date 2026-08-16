import { forwardRef, type MouseEvent, type ReactNode } from "react";

type ScreenProps = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  header?: ReactNode;
  scrollable?: boolean;
  contentRef?: (el: HTMLDivElement | null) => void;
};

const Screen = forwardRef<HTMLDivElement, ScreenProps>(function Screen(
  { onClick, className = "", children, header, scrollable = false, contentRef },
  ref
) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    onClick?.();
  };

  return (
    <div
      ref={ref}
      onClick={!scrollable && onClick ? handleClick : undefined}
      className={`absolute inset-0 isolate h-dvh w-screen ${
        scrollable ? "" : "cursor-pointer"
      } [&_p]:cursor-auto [&_h1]:cursor-auto ${className}`}
    >
      {header}
      {scrollable ? (
        <div ref={contentRef} className="h-full w-full overflow-y-auto">
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
});

export default Screen;

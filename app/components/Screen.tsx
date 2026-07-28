import { forwardRef, type MouseEvent, type ReactNode } from "react";

type ScreenProps = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
};

const Screen = forwardRef<HTMLDivElement, ScreenProps>(function Screen(
  { onClick, className = "", children },
  ref
) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    onClick?.();
  };

  return (
    <div
      ref={ref}
      onClick={onClick && handleClick}
      className={`absolute inset-0 h-screen w-screen cursor-pointer [&_p]:cursor-auto ${className}`}
    >
      {children}
    </div>
  );
});

export default Screen;

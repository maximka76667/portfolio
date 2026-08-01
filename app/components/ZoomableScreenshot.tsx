import { useEffect, useRef, useState } from "react";

const LIGHTBOX_TRANSITION_MS = 200;

type ZoomableScreenshotProps = {
  src: string;
  alt: string;
};

export default function ZoomableScreenshot({
  src,
  alt,
}: ZoomableScreenshotProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openLightbox = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setMounted(true);
  };

  const closeLightbox = () => {
    setVisible(false);
    closeTimeout.current = setTimeout(
      () => setMounted(false),
      LIGHTBOX_TRANSITION_MS,
    );
  };

  useEffect(() => {
    if (!mounted) return;
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mounted]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <button
          type="button"
          onClick={openLightbox}
          aria-label="View full screenshot"
          className="group absolute z-10 bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-all duration-200 ease-out hover:scale-110 hover:bg-background hover:shadow-lg active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-200 ease-out group-hover:scale-110"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M16 3h3a2 2 0 0 1 2 2v3" />
            <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-background/60 [animation-duration:2s]" />
        </button>
      </div>
      {mounted && (
        <div
          className={`fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-6 transition-opacity duration-200 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLightbox}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${alt} — full screenshot`}
            className={`max-h-full max-w-full rounded-lg object-contain shadow-2xl transition-all duration-200 ease-out ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          />
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className={`absolute right-6 top-6 text-white/80 transition-all duration-200 ease-out hover:scale-110 hover:text-white ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

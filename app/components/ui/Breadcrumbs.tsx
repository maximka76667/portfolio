import { useState } from "react";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";

export type Crumb = { label: string; key?: string };

type BreadcrumbsProps = {
  trail: Crumb[];
  onNavigate: (key: string) => void;
};

export default function Breadcrumbs({ trail, onNavigate }: BreadcrumbsProps) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (key: string) => {
    setOpen(false);
    onNavigate(key);
  };

  return (
    <>
      <nav className="absolute top-6 left-6 hidden sm:flex items-center gap-2 rounded-full bg-foreground/60 px-4 py-2 text-sm text-background backdrop-blur">
        {trail.map((crumb, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="opacity-40">/</span>}
            {crumb.key ? (
              <button
                type="button"
                onClick={() => onNavigate(crumb.key!)}
                className="hover:underline"
              >
                {crumb.label}
              </button>
            ) : (
              <span className="opacity-70">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className="absolute top-6 left-6 sm:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="relative flex items-center justify-center rounded-full bg-foreground/60 p-3 text-background backdrop-blur"
        >
          <ListIcon
            size={18}
            className={`transition-all duration-200 ease-out ${
              open ? "rotate-45 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <XIcon
            size={18}
            className={`absolute transition-all duration-200 ease-out ${
              open ? "rotate-0 scale-100 opacity-100" : "-rotate-45 scale-50 opacity-0"
            }`}
          />
        </button>
        <nav
          className={`absolute top-full left-0 mt-2 flex min-w-40 origin-top-left flex-col gap-2 rounded-2xl bg-foreground/60 px-4 py-3 text-sm text-background backdrop-blur transition-all duration-200 ease-out ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-95 opacity-0"
          }`}
        >
          {trail.map((crumb, i) =>
            crumb.key ? (
              <button
                key={i}
                type="button"
                onClick={() => handleNavigate(crumb.key!)}
                className="text-left hover:underline"
              >
                {crumb.label}
              </button>
            ) : (
              <span key={i} className="opacity-70">
                {crumb.label}
              </span>
            ),
          )}
        </nav>
      </div>
    </>
  );
}

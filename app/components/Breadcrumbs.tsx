export type Crumb = { label: string; key?: string };

type BreadcrumbsProps = {
  trail: Crumb[];
  onNavigate: (key: string) => void;
};

export default function Breadcrumbs({ trail, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-foreground/60 px-4 py-2 text-sm text-background backdrop-blur">
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
  );
}

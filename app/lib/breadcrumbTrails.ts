import type { Crumb } from "../components/ui/Breadcrumbs";

const HOME: Crumb = { label: "Home", key: "statement" };
const PROJECTS: Crumb = { label: "Projects", key: "projects-intro" };
const PILLARS: Crumb = { label: "Pillars", key: "pillars" };
const UI_UX: Crumb = { label: "UI/UX", key: "ui-ux-intro" };
const PERFORMANCE: Crumb = { label: "Performance", key: "performance-intro" };
const OS_COMPATIBILITY: Crumb = {
  label: "OS Compatibility",
  key: "os-compatibility-intro",
};
const CONTACT: Crumb = { label: "Contact", key: "contact" };

const rawTrails: Partial<Record<string, Crumb[]>> = {
  "projects-intro": [HOME, { label: "Projects" }],
  "project-hyperloop": [
    HOME,
    PROJECTS,
    { label: "Hyperloop Control Station" },
  ],
  "project-hyperloop-team": [
    HOME,
    PROJECTS,
    { label: "Hyperloop Control Station" },
    { label: "EHW" },
  ],
  "project-swiss-kyle": [HOME, PROJECTS, { label: "Swiss Kyle" }],
  "project-swiss-kyle-statement": [
    HOME,
    PROJECTS,
    { label: "Swiss Kyle" },
    { label: "Why local" },
  ],
  "project-lode": [HOME, PROJECTS, { label: "Lode" }],
  "project-lode-statement": [
    HOME,
    PROJECTS,
    { label: "Lode" },
    { label: "Full stack" },
  ],
  pillars: [HOME, PROJECTS, { label: "Pillars" }],
  "ui-ux-intro": [HOME, PROJECTS, PILLARS, { label: "UI/UX" }],
  "ui-ux-hyperloop": [
    HOME,
    PROJECTS,
    PILLARS,
    UI_UX,
    { label: "Hyperloop Control Station" },
  ],
  "ui-ux-swiss-kyle": [
    HOME,
    PROJECTS,
    PILLARS,
    UI_UX,
    { label: "Swiss Kyle" },
  ],
  "ui-ux-lode": [HOME, PROJECTS, PILLARS, UI_UX, { label: "Lode" }],
  "performance-intro": [HOME, PROJECTS, PILLARS, { label: "Performance" }],
  "performance-hyperloop": [
    HOME,
    PROJECTS,
    PILLARS,
    PERFORMANCE,
    { label: "Hyperloop Control Station" },
  ],
  "performance-swiss-kyle": [
    HOME,
    PROJECTS,
    PILLARS,
    PERFORMANCE,
    { label: "Swiss Kyle" },
  ],
  "performance-lode": [
    HOME,
    PROJECTS,
    PILLARS,
    PERFORMANCE,
    { label: "Lode" },
  ],
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
    { label: "Hyperloop Control Station" },
  ],
  "os-compatibility-swiss-kyle": [
    HOME,
    PROJECTS,
    PILLARS,
    OS_COMPATIBILITY,
    { label: "Swiss Kyle" },
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

// Every trail gets a trailing "Contact" shortcut so you can jump straight to
// the end from anywhere, instead of only being able to navigate backwards.
export const breadcrumbTrails: Partial<Record<string, Crumb[]>> =
  Object.fromEntries(
    Object.entries(rawTrails).map(([key, trail]) => [
      key,
      key === "contact" ? trail! : [...trail!, CONTACT],
    ])
  );

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
  "project-hyperloop": [HOME, PROJECTS, { label: "Hyperloop" }],
  "project-swiss-kyle": [HOME, PROJECTS, { label: "Swiss Kyle" }],
  "project-lode": [HOME, PROJECTS, { label: "Lode" }],
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

// Every trail gets a trailing "Contact" shortcut so you can jump straight to
// the end from anywhere, instead of only being able to navigate backwards.
export const breadcrumbTrails: Partial<Record<string, Crumb[]>> =
  Object.fromEntries(
    Object.entries(rawTrails).map(([key, trail]) => [
      key,
      key === "contact" ? trail! : [...trail!, CONTACT],
    ])
  );

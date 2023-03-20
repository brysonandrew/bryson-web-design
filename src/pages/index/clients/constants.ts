export const PROJECTS = [
  "Process Management Systems",
  "Cryptocurrency Portals",
  "Synthesizers",
  "Admin Panels",
  "Marketplaces",
  "Audio Visualizers",
  "Virtual Event Platforms",
  "3D Animations",
];
const PROJECTS_1 = [
  ...PROJECTS.slice(3),
  ...PROJECTS.slice(0, 3),
];
const PROJECTS_2 = [
  ...PROJECTS_1.slice(3),
  ...PROJECTS_1.slice(0, 3),
];
export const GROUPS = [PROJECTS, PROJECTS_1, PROJECTS_2];
export const GENERIC_ITEMS = ["Websites", "and", "Apps"];

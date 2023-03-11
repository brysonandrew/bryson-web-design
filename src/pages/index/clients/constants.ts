export const PROJECTS = [
  "Process Management Systems",
  "Cryptocurrency Layer 2 Blockchain Portals",
  "NFT Admin Panels",
  "NFT Marketplaces",
  "Virtual Event Platforms",
];
const PROJECTS_1 = [...PROJECTS.slice(1), PROJECTS[0]];
const PROJECTS_2 = [...PROJECTS_1.slice(1), PROJECTS_1[0]];
export const GROUPS = [PROJECTS, PROJECTS_1, PROJECTS_2];
export const GENERIC_ITEMS = ["Websites", "and", "Apps"];

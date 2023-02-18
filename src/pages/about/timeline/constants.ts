export type TItem = {
  title: string;
  description: string;
  time?: Date;
  tags?: string[];
};

export const ITEMS: TItem[] = [
  {
    title: "Insight Factory",
    description: "Process Management System",
  },
  {
    title: "Canvas",
    description: "Cryptocurrency Layer 2 Blockchain Portal",
    time: new Date(2022, 8, 1),
  },
  {
    title: "Juke",
    description: "NFT Admin and Marketplace",
    time: new Date(2021, 8, 1),
  },
  {
    title: "Buzzcast",
    description: "Virtual Event Platform",
    time: new Date(2021, 2, 1),
  },
  {
    title: "Stock Portfolio",
    description: "Investment Manager",
    time: new Date(2020, 11, 1),
  },
];

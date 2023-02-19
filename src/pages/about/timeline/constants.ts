export type TItem = {
  title: string;
  description: string;
  time?: Date;
  tags?: string[];
  href: string;
};

export const ITEMS: TItem[] = [
  {
    title: "Insight Factory",
    description: "Process Management System",
    href: "https://www.insightfactory.ai/",
  },
  {
    title: "Canvas",
    description: "Cryptocurrency Layer 2 Blockchain Portal",
    href: "https://canvas.co/",
    time: new Date(2022, 8, 1),
  },
  {
    title: "Juke",
    description: "NFT Admin and Marketplace",
    href: "https://www.juke.io/",
    time: new Date(2021, 8, 1),
  },
  {
    title: "Buzzcast",
    description: "Virtual Event Platform",
    href: "https://www.buzzcast.info/#/",
    time: new Date(2021, 2, 1),
  },
  // {
  //   title: "Stock Portfolio",
  //   description: "Investment Manager",
  //   time: new Date(2020, 11, 1),
  // },
];

import type { TItem } from "@t/showcase";


export const APP_ITEMS: TItem[] = [
  {
    title: "Insight Factory",
    description: "Process Management System",
    href: "https://www.insightfactory.ai/",
    tags: ["React", "Typescript", "Framer Motion", "d3.js", "d3-dag"],
  },
  {
    title: "Canvas",
    description: "Blockchain Portal",
    tags: ["React", "Typescript", "Metamask SDK"],
    href: "https://canvas.co/",
    time: new Date(2022, 8, 1),
  }, 
  {
    title: "Juke",
    description: "NFT Admin and Marketplace",
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "Figma",
      "Invision",
    ],
    href: "https://www.juke.io/",
    time: new Date(2021, 8, 1),
  },
  {
    title: "Buzzcast",
    description: "Virtual Event Platform",
    tags: ["React", "Zoom SDK"],
    href: "https://github.com/TheBuzzCast",
    time: new Date(2021, 2, 1),
  },
  {
    title: "Stock Portfolio",
    description: "Investment Manager",
    tags: ["React", "Typescript"],
    time: new Date(2020, 11, 1),
  },
  {
    title: "Epirus",
    time: new Date("2019-03-15T00:00:00.000Z"),
    href: "https://www.web3labs.com/sirato",
    category: "Web App",
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "Big.js",
      "Chart.js",
      "moment.js",
      "styled-jsx",
      "Figma",
      "Invision",
    ],
    description: "Blockchain Explorer",
  },
];

import type { TItem } from "@t/showcase";

export const APP_ITEMS: TItem[] = [
  {
    title: "Insight Factory",
    description: "Process Management System",
    href: "https://www.insightfactory.ai/",
    tags: [
      "React",
      "Typescript",
      "Framer Motion",
      "d3.js",
      "d3-dag",
    ],
    time: new Date(2023, 4, 1),
    paragraphs: [
      "Migration from Blazer (C# and HTML) to React.",
      'Rethinking the structure in a "contextual" approach to improve UX.',
      "Replaced vis.js with d3 and added a lot of new graphical features.",
    ],
  },
  {
    title: "Canvas",
    description: "Blockchain Portal",
    tags: ["React", "Typescript", "Metamask", "Web3"],
    href: "https://canvas.co/",
    time: new Date(2022, 8, 1),
    paragraphs: [
      "Codebase required a lot of work and refactor. Integration with metamask and Web3 API.",
    ],
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
    paragraphs: [
      "Creating an admin panel and marketplace website for selling NFTs.",
      "Implentation of a complicated data flow for the minting process and impressive animations for the sales process were required.",
    ],
  },
  {
    title: "Buzzcast",
    description: "Virtual Event Platform",
    tags: ["React", "Zoom SDK"],
    href: "https://github.com/TheBuzzCast",
    time: new Date(2021, 2, 1),
    paragraphs: [
      "Maintaining a wrapper around a zoom SDK for providing live events (Covid-era).",
      "Interfaced with clients. Attention to detail was imperative.",
    ],
  },
  {
    title: "Stock Portfolio",
    description: "Investment Manager",
    tags: ["React", "Typescript"],
    time: new Date(2020, 11, 1),
    paragraphs: [
      "Creating a web app that also operated in a desktop environment",
      "Implementing dynamic charts along with writing algorithms.",
    ],
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
    paragraphs: [
      "Build a web app, out of Material Design wireframes and MongoDB backend.",
      "Implement features such as interactive tool-tips, custom auto-correct, meta-data upload, paginated routing",
    ],
  },
];

export const CV_ITEMS = APP_ITEMS.filter(({ title }) => title !== "Stock Portfolio" && title !== "Epirus");

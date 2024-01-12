import type {
  TItem,
  TItemInit,
  TProjectItemRecord,
} from '@pages/projects/config/types';
import { titleToKebab } from '@utils/format';
import {
  REACT,
  TYPESCRIPT,
  FRAMER_MOTION,
  NEXT_JS,
  FIGMA,
  INVISION,
  STRIPE,
} from './third-party';

const resolveProjectItem = (item: TItemInit): TItem => ({
  ...item,
  slug: titleToKebab(item.title),
});

export const INIT_PROJECT_ITEMS: TItemInit[] = [
  {
    title: 'Luridescence',
    description: 'Prints E-commerce',
    pricing: 'plus',
    href: 'TBA',
    tags: [REACT, TYPESCRIPT, FRAMER_MOTION, STRIPE],
    paragraphs: [
      'Virtualized product list.',
      'AI Image generation with ComfyUI integration.',
    ],
  },
  {
    title: 'Anaesco',
    description: 'Patient Portal',
    pricing: 'select',
    // href: 'https://anaesco.com.au/',
    tags: [REACT, TYPESCRIPT, FRAMER_MOTION],
    time: new Date(2024, 0, 5),
    paragraphs: [
      'Portal for authenticating anaesthetist patients.',
      'Included a questionnaire wizard.',
      'Data was sensitive therefore security was a high priority.',
    ],
  },
  {
    title: 'Superior Concrete',
    description: 'Concreting Business Website',
    pricing: 'plus',
    href: 'https://superiorconcrete.co.nz/',
    tags: [REACT, TYPESCRIPT, FRAMER_MOTION],
    time: new Date(2023, 8, 1),
    paragraphs: [
      'Includes a logo splash screen and some nice custom page transition animations.',
      'Chat GPT generated copy.',
    ],
  },
  {
    title: 'Lambda X',
    description: 'AI PDF Reader',
    pricing: 'select',
    href: 'https://www.cognitusconsulting.com',
    tags: [REACT, TYPESCRIPT, FRAMER_MOTION],
    time: new Date(2023, 8, 1),
    paragraphs: [
      'Leading their frontend team to bring better cohesian with the goals of management.',
      'Implementing UI components from mockups.',
      'Included tabling UI with virtualization, adjustable widths and column reordering.',
    ],
  },
  {
    title: 'Insight Factory',
    description: 'Process Management System',
    pricing: 'select',
    href: 'https://www.insightfactory.ai/',
    tags: [
      REACT,
      TYPESCRIPT,
      FRAMER_MOTION,
      { title: 'd3.js', href: 'https://github.com/d3/d3' },
      {
        title: 'd3-dag',
        href: 'https://github.com/erikbrinkman/d3-dag',
      },
    ],
    time: new Date(2023, 4, 1),
    paragraphs: [
      'Migration from Blazer (C# and HTML) to React.',
      'Rethinking the structure in a "contextual" approach to improve UX.',
      'Replaced vis.js with d3 and added a lot of new graphical features.',
    ],
  },
  {
    title: 'Canvas',
    description: 'Blockchain Portal',
    pricing: 'select',
    tags: [
      REACT,
      TYPESCRIPT,
      { title: 'Metamask', href: 'https://metamask.io/' },
      {
        title: 'Web3',
        href: 'https://ethereum.org/en/web3/',
      },
    ],
    href: 'https://canvas.co/',
    time: new Date(2022, 8, 1),
    paragraphs: [
      'Codebase required a lot of work and refactor. Integration with metamask and Web3 API.',
    ],
  },
  {
    title: 'Juke',
    description: 'NFT Admin and Marketplace',
    pricing: 'select',
    tags: [REACT, TYPESCRIPT, NEXT_JS, FIGMA, INVISION],
    href: 'https://www.juke.io/',
    time: new Date(2021, 8, 1),
    paragraphs: [
      'Creating an admin panel and marketplace website for selling NFTs.',
      'Implentation of a complicated data flow for the minting process and impressive animations for the sales process were required.',
    ],
  },
  {
    title: 'Buzzcast',
    description: 'Virtual Event Platform',
    pricing: 'select',
    tags: [
      REACT,
      {
        title: 'Zoom SDK',
        href: 'https://developers.zoom.us/docs/meeting-sdk/',
      },
    ],
    href: 'https://github.com/TheBuzzCast',
    time: new Date(2021, 2, 1),
    paragraphs: [
      'Maintaining a wrapper around a zoom SDK for providing live events (Covid-era).',
      'Interfaced with clients. Attention to detail was imperative.',
    ],
  },
  {
    title: 'Stock Portfolio',
    description: 'Investment Manager',
    pricing: 'select',
    tags: [REACT, TYPESCRIPT],
    time: new Date(2020, 11, 1),
    paragraphs: [
      'Creating a web app that also operated in a desktop environment',
      'Implementing dynamic charts along with writing algorithms.',
    ],
  },
  {
    title: 'Epirus',
    time: new Date('2019-03-15T00:00:00.000Z'),
    pricing: 'select',
    href: 'https://www.web3labs.com/sirato',
    category: 'Web App',
    tags: [
      REACT,
      TYPESCRIPT,
      NEXT_JS,
      {
        title: 'Big.js',
        href: 'https://mikemcl.github.io/big.js/',
      },
      {
        title: 'Chart.js',
        href: 'https://www.chartjs.org/',
      },
      { title: 'moment.js', href: 'https://momentjs.com/' },
      FIGMA,
      INVISION,
    ],
    description: 'Blockchain Explorer',
    paragraphs: [
      'A web app built with Material Design wireframes and a MongoDB backend.',
      'Features such as interactive tool-tips, custom auto-correct, meta-data upload, paginated routing',
    ],
  },
];

export const PROJECT_ITEMS: TItem[] =
  INIT_PROJECT_ITEMS.map(resolveProjectItem);
export const PROJECT_ITEMS_RECORD = PROJECT_ITEMS.reduce(
  (a: TProjectItemRecord, item: TItem) => {
    a[item.slug] = item;
    return a;
  },
  {},
);

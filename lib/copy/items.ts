import { isString } from '@brysonandrew/utils-validation';
import {
  REACT,
  TYPESCRIPT,
  FRAMER_MOTION,
  NEXT_JS,
  FIGMA,
  INVISION,
  STRIPE,
  REMOTION,
  TAILWIND_CSS,
} from './third-party';

export const INIT_PROJECT_ITEMS = [
  // {
  //   title: 'Take Shape',
  //   description: 'Painting services portal',
  //   pricing: 'select',
  //   href: 'https://www.takeshapehome.com/',
  //   time: new Date(2024, 11, 1),
  //   tags: [
  //     REACT,
  //     TYPESCRIPT,
  //     FRAMER_MOTION,
  //     NEXT_JS,
  //     TAILWIND_CSS,
  //     FIGMA,
  //   ],
  //   paragraphs: [
  //     'Converting Figma designs into React code.',
  //     'Conditional forms',
  //   ],
  // },
  {
    title: 'Repurpose',
    description: 'Video Editor',
    pricing: 'select',
    href: 'https://repurpose.io/',
    tags: [
      REMOTION,
      REACT,
      TYPESCRIPT,
      FRAMER_MOTION,
      TAILWIND_CSS,
      NEXT_JS,
    ],
    time: new Date(2024, 7, 15),
    paragraphs: [
      'Allow user to add text and images to an uploaded video.',
      'AI subtitles and video clip generation.',
    ],
  },
  {
    title: 'Luridescence',
    description: 'Prints E-commerce (Concept)',
    pricing: 'plus',
    href: 'TBA',
    tags: [REACT, TYPESCRIPT, FRAMER_MOTION, STRIPE],
    time: new Date(2024, 3, 5),
    paragraphs: [
      'Virtualized product list.',
      'AI Image generation with ComfyUI integration.',
    ],
  },
  {
    title: 'Anaesco',
    description: 'Patient Portal',
    pricing: 'select',
    href: 'https://anaesco.com.au/',
    tags: [REACT, TYPESCRIPT, FRAMER_MOTION],
    time: new Date(2024, 0, 5),
    paragraphs: [
      'Portal for authenticating anaesthetist patients.',
      'Creation of a questionnaire wizard.',
      'Data security was a high priority.',
    ],
  },
  {
    title: 'Superior Concrete',
    description: 'Concreting Business Website',
    pricing: 'plus',
    href: 'https://superiorconcrete.co.nz/',
    tags: [REACT, TYPESCRIPT, FRAMER_MOTION],
    time: new Date(2023, 10, 1),
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
      'Leading their development team to bring better cohesian with the goals of management.',
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
      'Migration/rewrite of app to React.',
      'Rethinking app structure for a more "contextual" user experience.',
      'Implementation of new features.',
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
      'Codebase required a lot of work and refactor.',
      'Integration with metamask and Web3 API.',
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
  {
    title: 'Porizi',
    time: new Date(2016, 10, 7),
    pricing: 'select',
    category: 'Web App',
    tags: [REACT, TYPESCRIPT],
    description: 'Marketing website',
  },
] as const;

export const COPY_TOTAL_YEARS = INIT_PROJECT_ITEMS.reduce(
  (a, c) => {
    let years = 0;
    if ('time' in c) {
      years = new Date(
        Date.now() - c.time.getMilliseconds(),
      ).getFullYear();
      const nowYears = new Date(Date.now()).getFullYear();
      const thenYears = c.time.getFullYear();
      years = nowYears - thenYears;

      if (years > a) {
        a = years;
      }
    }
    return a;
  },
  0,
);

export const KEYWORDS_AND_PHRASES =
  INIT_PROJECT_ITEMS.reduce((a, c) => {
    if (isString(c.description)) {
      a.push(c.description);
    }
    const tagTitles = c.tags.map(({ title }) => title);
    const next = [...a, ...tagTitles];
    return next;
  }, [] as string[]);
export const KEYWORDS_AND_PHRASES_UNIQUE = [
  ...new Set(KEYWORDS_AND_PHRASES),
];

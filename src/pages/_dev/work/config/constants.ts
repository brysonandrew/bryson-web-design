import {
  TUpworkFilterConfig,
  TUpworkFilterConfigs,
} from '@pages/_dev/work/config/types';

export const UPWORK_BASE =
  'https://www.upwork.com/nx/search/jobs/';

const DEFAULT_INT_AND_EXPERT: TUpworkFilterConfig = {
  isExpert: true,
  isIntermediate: true,
  // location: 'Australia and New Zealand',
};

const DEFAULT_EXPERT_ONLY: TUpworkFilterConfig = {
  isExpert: true,
  // location: 'Australia and New Zealand',
};

const DEFAULTS = [
  DEFAULT_INT_AND_EXPERT,
  DEFAULT_EXPERT_ONLY,
];

const applyDefaults = (
  values: TUpworkFilterConfigs,
): TUpworkFilterConfigs =>
  DEFAULTS.reduce(
    (
      a: TUpworkFilterConfigs,
      defaultValue: TUpworkFilterConfig,
    ) => {
      const next = values.map(
        (value: TUpworkFilterConfig) => ({
          ...defaultValue,
          ...value,
        }),
      );
      return [...a, ...next];
    },
    [],
  );

const INIT_ITEMS: TUpworkFilterConfigs = [
  {
    q: 'React and Typescript',
  },
  {
    q: 'React',
  },
  {
    q: 'Typescript',
  },
  {
    q: 'Stable Diffusion',
  },
  {
    q: 'three.js',
  },
  {
    q: 'web developer',
  },
  {
    q: 'web designer',
  },
];

export const ITEMS: TUpworkFilterConfigs =
  applyDefaults(INIT_ITEMS);

// href: 'https://www.upwork.com/nx/search/jobs/?contractor_tier=2,3&hourly_rate=-100&location=Australia%20and%20New%20Zealand&nbs=1&q=react%20typescript&sort=recency&t=0',

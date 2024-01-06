import { PROJECT_ITEMS } from '.';

export const CV_ITEMS = PROJECT_ITEMS.filter(
  ({ title }) =>
    title !== 'Stock Portfolio' && title !== 'Epirus',
);

import { PROJECT_ITEMS } from '@app/projects';

const width = 793;
export const SIZE = {
  height: width * 297 / 210,
  width,
};
// A4	210 x 297 mm	8.3 x 11.7 inches

export const CV_ITEMS = PROJECT_ITEMS.filter(
  ({ title }) =>
    title !== 'Stock Portfolio' && title !== 'Epirus',
);

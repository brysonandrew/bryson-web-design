import clsx from 'clsx';

export const HEADER_OFFSET_Y = 240;

export const GAP_1 = 0; // 500;

export const GAP_2 = 0; // GAP_1 + 300;

export const FULL = ['0%', '-100%'];
export const DELAY = 24;
export const DELAY_2 = DELAY * 4;
export const DELTA = GAP_1 + DELAY_2;

export const ROLLING_TEXT_CLASS =
  'py-6 lg:py-2.5 xl:py-3.5 m-1 whitespace-nowrap';

export const BAR_GREEN_CLASS = clsx(
  'absolute left-0 w-2 h-full rounded-sm bg-green shadow-green',
);

export const WHITE_FILTER = {
  filter: 'grayscale(100%) brightness(400%)',
};

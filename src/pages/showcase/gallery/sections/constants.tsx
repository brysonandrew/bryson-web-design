import type { FC } from 'react';

export const PADDING = 28;
export const PADDING_05 = PADDING / 2;
export const GAP = 8;
export const GAP_05 = GAP / 2;

export const MOTION_BLUR_ID = 'MOTION_BLUR_ID';
export const MOTION_BLUR_INTENSITY = 40;

export const FOOTER_SIZE = 80;

type TItemProps = {
  name: string;
  to: string;
};

export type TItem = TItemProps & {
  Component: FC<any>;
};

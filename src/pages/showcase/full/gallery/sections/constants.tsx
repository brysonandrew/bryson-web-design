import type { FC } from 'react';

export const PADDING = 28;
export const PADDING_05 = PADDING / 2;
export const GAP = 8;
export const GAP_05 = GAP / 2;

export const MOTION_BLUR_ID = 'MOTION_BLUR_ID';
export const MOTION_BLUR_INTENSITY = 40;

export const HEADER_SIZE = 0;
export const FOOTER_SIZE = 80;
export const CONTENT_OFFSET_SIZE =
  HEADER_SIZE + FOOTER_SIZE;

type TItemProps = {
  name: string;
  to: string;
};

export type TItem = TItemProps & {
  Component: FC<any>;
};
export const ITEMS: TItem[] = [
  {
    name: 'NotFound404',
    to: '/gallery',
    Component: () => <div>NotFound404</div>,
  },
  {
    name: 'Decipher',
    to: '/gallery',
    Component: () => <div>decipher</div>,
  },
];

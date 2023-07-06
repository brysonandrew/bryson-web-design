import type { FC } from 'react';

export const MOTION_BLUR_ID = 'MOTION_BLUR_ID';
export const MOTION_BLUR_INTENSITY = 40;

type TItemProps = {
  name: string;
  to: string;
};

export type TItem = TItemProps & {
  Component: FC<any>;
};

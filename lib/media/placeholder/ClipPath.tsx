import { IMAGE_PLACEHOLDER_ID } from '@brysonandrew/media/placeholder/config/constants';
import { TSvgProps } from '@brysonandrew/types/dom';
import type { FC } from 'react';

type TProps = TSvgProps;
export const ClipPath: FC<TProps> = ({ ...props }) => (
  <svg width='0' height='0' {...props}>
    <clipPath id={IMAGE_PLACEHOLDER_ID}>
      <path d='M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z' />
    </clipPath>
  </svg>
);

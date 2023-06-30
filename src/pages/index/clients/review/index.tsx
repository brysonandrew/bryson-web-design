import type { HTMLMotionProps } from 'framer-motion';
import type { FC } from 'react';
import { REVIEWS, TReviewType } from '../config';
import { Long } from './Long';
import { Short } from './Short';

type TProps = HTMLMotionProps<'div'> & {
  index: number;
  type: TReviewType;
};
export const Review: FC<TProps> = ({
  index,
  type,
  ...props
}) => {
  const review = REVIEWS[index];
  const { short, long, ...base } = review;

  switch (type) {
    case 'long': {
      return (
        <Long {...props} {...base}>
          {long}
        </Long>
      );
    }
    case 'short': {
      return (
        <Short {...props} {...base}>
          {short}
        </Short>
      );
    }
    default:
      return null;
  }
};

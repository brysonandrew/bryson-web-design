import type { FC } from 'react';
import { REVIEWS, TReviewType } from '../config';
import { Long } from './Long';
import { Short } from './Short';

type TProps = {
  index: number;
  type: TReviewType;
};
export const Review: FC<TProps> = ({ index, type }) => {
  const review = REVIEWS[index];
  const { short, long, ...base } = review;

  switch (type) {
    case 'long': {
      return <Long {...base}>{long}</Long>;
    }
    case 'short': {
      return <Short {...base}>{short}</Short>;
    }
    default:
      return null;
  }
};

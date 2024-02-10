import type { FC } from 'react';
import {
  FadeEdgePair,
  TFadeEdgePairProps,
} from '@brysonandrew/fade';

export type TFadeVProps = TFadeEdgePairProps;
export const FadeV: FC<TFadeVProps> = (props) => {
  return (
    <FadeEdgePair
      direction='to bottom'
      isFixed
      midColor='var(--transparent)'
      darkEdgeColor='var(--black-04)'
      lightEdgeColor='var(--white-04)'
      darkClass='opacity-dark'
      lightClass='opacity-light'
      {...props}
    />
  );
};

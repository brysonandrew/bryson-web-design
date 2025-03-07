import { TFadeEdgePairProps, FadeEdgePair } from '@brysonandrew/fade-edge/pairs/FadeEdgePair';
import type { FC } from 'react';

export type TFadeVProps = TFadeEdgePairProps;
export const FadeV: FC<TFadeVProps> = (props) => {
  return (
    <FadeEdgePair
      direction='to bottom'
      isFixed
      midColor='var(--transparent)'
      darkEdgeColor='var(--dark-04)'
      lightEdgeColor='var(--light-04)'
      darkClass='opacity-dark'
      lightClass='opacity-light'
      {...props}
    />
  );
};

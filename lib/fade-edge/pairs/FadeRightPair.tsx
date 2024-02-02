import { FadeRight } from '@brysonandrew/fade';
import {
  FadePair,
  TFadePairProps,
} from '@brysonandrew/fade-edge/pairs/FadePair';
import { FC } from 'react';

type TProps = TFadePairProps;
export const FadeRightPair: FC<TProps> = (props) => (
  <FadePair Fader={FadeRight} {...props} />
);

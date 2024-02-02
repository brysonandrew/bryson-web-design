import { FadeDown } from '@brysonandrew/fade';
import {
  FadePair,
  TFadePairProps,
} from '@brysonandrew/fade-edge/pairs/FadePair';
import { FC } from 'react';

type TProps = TFadePairProps;
export const FadeDownPair: FC<TProps> = (props) => (
  <FadePair Fader={FadeDown} {...props} />
);

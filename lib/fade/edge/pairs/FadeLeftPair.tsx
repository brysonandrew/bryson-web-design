import { FadeLeft } from '@brysonandrew/fade-core';
import {
  FadePair,
  TFadePairProps,
} from '@brysonandrew/fade-edge/pairs/FadePair';
import { FC } from 'react';

type TProps = TFadePairProps;
export const FadeLeftPair: FC<TProps> = (props) => (
  <FadePair Fader={FadeLeft} {...props} />
);

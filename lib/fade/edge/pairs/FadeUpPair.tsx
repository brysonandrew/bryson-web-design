import { FadeUp } from '@brysonandrew/fade/core';
import {
  FadePair,
  TFadePairProps,
} from '@brysonandrew/fade/edge/pairs/FadePair';
import { FC } from 'react';

type TProps = TFadePairProps;
export const FadeUpPair: FC<TProps> = (props) => (
  <FadePair Fader={FadeUp} {...props} />
);

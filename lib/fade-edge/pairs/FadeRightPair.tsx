import { FadeRight, TFadeProps } from '@brysonandrew/fade';
import { FadePair } from '@brysonandrew/fade-edge/pairs/FadeFair';
import { FC } from 'react';

type TProps = TFadeProps;
export const FadeRightPair: FC<TProps> = (props) => (
  <FadePair Fader={FadeRight} {...props} />
);

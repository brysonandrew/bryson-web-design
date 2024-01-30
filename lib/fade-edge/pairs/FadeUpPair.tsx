import { FadeUp, TFadeProps } from '@brysonandrew/fade';
import { FadePair } from '@brysonandrew/fade-edge/pairs/FadeFair';
import { FC } from 'react';

type TProps = TFadeProps;
export const FadeUpPair: FC<TProps> = ({ ...props }) => (
  <FadePair Fader={FadeUp} {...props} />
);

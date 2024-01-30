import { FadeLeft, TFadeProps } from '@brysonandrew/fade';
import { FadePair } from '@brysonandrew/fade-edge/pairs/FadeFair';
import { FC } from 'react';

type TProps = TFadeProps;
export const FadeLeftPair: FC<TProps> = ({ ...props }) => (
  <FadePair Fader={FadeLeft} {...props} />
);

import { FadeRight, TFadeProps } from '@brysonandrew/fade';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TFadeProps & { Fader?: FC<TFadeProps> };
export const FadePair: FC<TProps> = ({
  Fader = FadeRight,
  classValue,
  ...props
}) => (
  <>
    <Fader
      classValue={clsx('h-full opacity-dark', classValue)}
      from='from-black-05'
      {...props}
    />
    <Fader
      classValue={clsx('h-full opacity-light', classValue)}
      from='from-white-05'
      {...props}
    />
  </>
);

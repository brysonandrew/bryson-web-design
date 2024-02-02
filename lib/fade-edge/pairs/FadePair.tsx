import { FadeRight, TFadeProps } from '@brysonandrew/fade';
import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';

export type TFadePairProps = TFadeProps & {
  Fader?: FC<TFadeProps>;
  darkColor?: string;
  lightColor?: string;
  darkClass?: ClassValue;
  lightClass?: ClassValue;
};
export const FadePair: FC<TFadePairProps> = ({
  Fader = FadeRight,
  classValue,
  darkColor = 'var(--black-05)',
  lightColor = 'var(--white-05)',
  darkClass,
  lightClass,
  ...props
}) => (
  <>
    <Fader
      key='FADE_PAIR_DARK'
      classValue={clsx(darkClass, classValue)}
      from={darkColor}
      {...props}
    />
    <Fader
      key='FADE_PAIR_LIGHT'
      classValue={clsx(lightClass, classValue)}
      from={lightColor}
      {...props}
    />
  </>
);

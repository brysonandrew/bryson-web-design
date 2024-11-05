import { TClassValue } from '@brysonandrew/config-types';
import {
  FadeRight,
  TFadeProps,
} from '@brysonandrew/fade-core';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

export type TFadePairProps = TFadeProps & {
  Fader?: FC<TFadeProps>;
  darkColor?: string;
  lightColor?: string;
  darkClass?: TClassValue;
  lightClass?: TClassValue;
};
export const FadePair: FC<TFadePairProps> = ({
  Fader = FadeRight,
  classValue,
  darkColor = 'var(--dark-05)',
  lightColor = 'var(--light-05)',
  darkClass,
  lightClass,
  ...props
}) => (
  <>
    <Fader
      key="FADE_PAIR_DARK"
      classValue={cx(darkClass, classValue)}
      from={darkColor}
      {...props}
    />
    <Fader
      key="FADE_PAIR_LIGHT"
      classValue={cx(lightClass, classValue)}
      from={lightColor}
      {...props}
    />
  </>
);

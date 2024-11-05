import { TClassValue } from '@brysonandrew/config-types';
import {
  FadeFill,
  TFadeFillProps,
} from '@brysonandrew/fade-core/FadeFill';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

type TProps = Omit<TFadeFillProps, 'midColor'> & {
  Fader?: FC<TFadeFillProps>;
  darkMidColor?: string;
  lightMidColor?: string;
  darkClass?: TClassValue;
  lightClass?: TClassValue;
};
export const FadeMidPair: FC<TProps> = ({
  Fader = FadeFill,
  darkMidColor = 'var(--dark)',
  lightMidColor = 'var(--light)',
  darkClass,
  lightClass,
  classValue,
  ...props
}) => (
  <>
    <Fader
      key='FADE_MID_PAIR_DARK'
      classValue={cx(darkClass, classValue)}
      midColor={darkMidColor}
      {...props}
    />
    <Fader
      key='FADE_MID_PAIR_LIGHT'
      classValue={cx(lightClass, classValue)}
      midColor={lightMidColor}
      {...props}
    />
  </>
);

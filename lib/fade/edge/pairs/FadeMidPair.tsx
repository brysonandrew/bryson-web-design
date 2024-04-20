import {
  FadeFill,
  TFadeFillProps,
} from '@brysonandrew/fade-core/FadeFill';
import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';

type TProps = Omit<TFadeFillProps, 'midColor'> & {
  Fader?: FC<TFadeFillProps>;
  darkMidColor?: string;
  lightMidColor?: string;
  darkClass?: ClassValue;
  lightClass?: ClassValue;
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
      classValue={clsx(darkClass, classValue)}
      midColor={darkMidColor}
      {...props}
    />
    <Fader
      key='FADE_MID_PAIR_LIGHT'
      classValue={clsx(lightClass, classValue)}
      midColor={lightMidColor}
      {...props}
    />
  </>
);

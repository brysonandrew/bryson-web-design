import { FadeRight, TFadeProps } from '@brysonandrew/fade';
import {
  FadeFill,
  TFadeFillProps,
} from '@brysonandrew/fade/FadeFill';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = Omit<TFadeFillProps, 'midColor'> & {
  Fader?: FC<TFadeFillProps>;
  darkMidColor?: string;
  lightMidColor?: string;
};
export const FadeMidPair: FC<TProps> = ({
  Fader = FadeFill,
  darkMidColor = 'var(--black)',
  lightMidColor = 'var(--white)',
  classValue,
  ...props
}) => (
  <>
    <Fader
      key='FADE_DARK'
      classValue={clsx('h-full opacity-dark', classValue)}
      midColor={darkMidColor}
      {...props}
    />
    <Fader
      key='FADE_LIGHT'
      classValue={clsx('h-full opacity-light', classValue)}
      midColor={lightMidColor}
      {...props}
    />
  </>
);

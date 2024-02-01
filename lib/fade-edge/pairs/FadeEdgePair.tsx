import { FadeRight, TFadeProps } from '@brysonandrew/fade';
import {
  FadeFill,
  TFadeFillProps,
} from '@brysonandrew/fade/FadeFill';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = Omit<TFadeFillProps, 'edgeColor'> & {
  Fader?: FC<TFadeFillProps>;
  darkEdgeColor?: string;
  lightEdgeColor?: string;
};
export const FadeEdgePair: FC<TProps> = ({
  Fader = FadeFill,
  darkEdgeColor = 'var(--black)',
  lightEdgeColor = 'var(--white)',
  classValue,
  ...props
}) => (
  <>
    <Fader
      key='FADE_EDGE_PAIR_DARK'
      classValue={clsx('h-full opacity-dark', classValue)}
      edgeColor={darkEdgeColor}
      {...props}
    />
    <Fader
      key='FADE_EDGE_PAIR_LIGHT'
      classValue={clsx('h-full opacity-light', classValue)}
      edgeColor={lightEdgeColor}
      {...props}
    />
  </>
);

import {
  FadeFill,
  TFadeFillProps,
} from '@brysonandrew/fade-core/FadeFill';
import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';

export type TFadeEdgePairProps = Omit<TFadeFillProps, 'edgeColor'> & {
  Fader?: FC<TFadeFillProps>;
  darkEdgeColor?: string;
  lightEdgeColor?: string;
  darkClass?: ClassValue;
  lightClass?: ClassValue;
};
export const FadeEdgePair: FC<TFadeEdgePairProps> = ({
  Fader = FadeFill,
  darkEdgeColor = 'var(--dark)',
  lightEdgeColor = 'var(--light)',
  darkClass,
  lightClass,
  classValue,
  ...props
}) => (
  <>
    <Fader
      key='FADE_EDGE_PAIR_DARK'
      classValue={clsx(darkClass, classValue)}
      edgeColor={darkEdgeColor}
      {...props}
    />
    <Fader
      key='FADE_EDGE_PAIR_LIGHT'
      classValue={clsx(lightClass, classValue)}
      edgeColor={lightEdgeColor}
      {...props}
    />
  </>
);

import { TClassValue } from '@brysonandrew/config-types';
import {
  FadeFill,
  TFadeFillProps,
} from '@brysonandrew/fade-core/FadeFill';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

export type TFadeEdgePairProps = Omit<
  TFadeFillProps,
  'edgeColor'
> & {
  Fader?: FC<TFadeFillProps>;
  darkEdgeColor?: string;
  lightEdgeColor?: string;
  darkClass?: TClassValue;
  lightClass?: TClassValue;
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
      key="FADE_EDGE_PAIR_DARK"
      classValue={cx(darkClass, classValue)}
      edgeColor={darkEdgeColor}
      {...props}
    />
    <Fader
      key="FADE_EDGE_PAIR_LIGHT"
      classValue={cx(lightClass, classValue)}
      edgeColor={lightEdgeColor}
      {...props}
    />
  </>
);

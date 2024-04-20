import {
  resolveGradient,
  TGradientDirection,
} from '@brysonandrew/color-gradient';
import { TDivProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { FC } from 'react';

export type TFadeProps = TDivProps & {
  from?: string;
  to?: string;
  direction?: TGradientDirection;
};
export const Fade: FC<TFadeProps> = ({
  classValue,
  style,
  from = 'var(--dark)',
  to = 'var(--transparent)',
  direction = 'to right' as TGradientDirection,
  ...props
}) => {
  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: [direction, from, to],
  });
  return (
    <div
      className={clsx(
        'absolute pointer-events-none',
        classValue
      )}
      style={{ ...style, backgroundImage }}
      {...props}
    />
  );
};

export * from './FadeDown';
export * from './FadeFill';
export * from './FadeLeft';
export * from './FadeRight';
export * from './FadeUp';

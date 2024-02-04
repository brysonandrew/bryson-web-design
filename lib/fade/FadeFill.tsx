import {
  resolveGradient,
  TGradientAngle,
  TGradientDirection,
} from '@brysonandrew/color-gradient';
import { TDivMotionProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

export type TFadeFillProps = TDivMotionProps & {
  isFixed?: boolean;
  direction?: TGradientAngle | TGradientDirection;
  edgeColor?: string;
  midColor?: string;
};
export const FadeFill: FC<TFadeFillProps> = ({
  classValue,
  isFixed,
  direction = 'to right' as TGradientDirection,
  edgeColor = 'var(--black)',
  midColor = 'var(--transparent)',
  style,
  ...props
}) => {
  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: [
      direction,
      edgeColor,
      midColor,
      midColor,
      edgeColor,
    ],
  });
  return (
    <motion.div
      className={clsx(
        'pointer-events-none',
        isFixed ? 'fill-screen' : 'fill',
        classValue,
      )}
      style={{ ...style, backgroundImage }}
      {...props}
    />
  );
};

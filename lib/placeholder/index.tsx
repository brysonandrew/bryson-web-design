import { motion } from 'framer-motion';
import { type FC } from 'react';
import { resolveUrlId } from '@brysonandrew/utils/attributes/resolveUrlId';
import clsx from 'clsx';
import { TDivMotionProps } from '@brysonandrew/types/dom';
import { resolveGradientStops } from '@brysonandrew/color/utils/resolveGradientStops';

export type TPlaceholderProps = TDivMotionProps & {
  colors?: string[];
  clipPathId: string;
};
export type TPartialPlaceholderProps =
  Partial<TPlaceholderProps>;
export const Placeholder: FC<TPlaceholderProps> = ({
  classValue,
  style,
  colors = ['teal', 'transparent'],
  clipPathId,
  ...props
}) => {
  return (
    <motion.div
      className='absolute center w-full h-full'
      // layoutId={PLACEHOLDER_LAYOUT_ID}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.28 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      <div
        className={clsx(classValue)}
        style={{
          width: 24,
          height: 24,
          clipPath: resolveUrlId(clipPathId),
        }}
      >
        <motion.figure
          className='relative background-color-01 h-full'
          style={{
            width: '300%',
            backgroundImage: `linear-gradient(to right, ${resolveGradientStops(
              4,
              colors,
            )})`,
          }}
          animate={{
            x: ['0%', '-66.67%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            type: 'keyframes',
          }}
        />
      </div>
    </motion.div>
  );
};

export * from './resolvePlaceholderRules';
export * from './resolvePlaceholderVarsCss';
export * from './withPlaceholder';

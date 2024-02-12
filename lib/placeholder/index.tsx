import { motion } from 'framer-motion';
import { type FC } from 'react';
import { resolveUrlId } from '@brysonandrew/utils-attributes/resolveUrlId';
import clsx from 'clsx';
import { TDivMotionProps } from '@brysonandrew/config-types/dom';
import { resolveGradient } from '@brysonandrew/color-gradient/resolveGradient';
import { TColorStops } from '@brysonandrew/color';

export type TPlaceholderProps = TDivMotionProps & {
  colors?: TColorStops;
  clipPathId: string;
};
export type TPartialPlaceholderProps =
  Partial<TPlaceholderProps>;
export const Placeholder: FC<TPlaceholderProps> = ({
  classValue,
  style,
  colors = [
    'var(--primary)',
    'transparent',
  ] as TColorStops,
  clipPathId,
  ...props
}) => {
  const colorStops: TColorStops = [...colors, ...colors];
  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: ['to right', ...colorStops],
  });
  return (
    <motion.div
      className='fill center w-full h-full overflow-hidden'
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
          clipPath: resolveUrlId(clipPathId), // `url(#${clipPathId})`,
        }}
      >
        <motion.figure
          className='relative background-color-01 h-full'
          style={{
            width: '300%',
            backgroundImage,
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

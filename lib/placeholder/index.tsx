import { motion } from 'framer-motion';
import { type FC } from 'react';
import { resolveUrlId } from '@brysonandrew/utils-attributes/resolveUrlId';
import { cx } from 'class-variance-authority';
import { TDivMotionProps } from '@brysonandrew/config-types/dom';
import {
  TColorStops,
  resolveGradient,
} from '@brysonandrew/color-gradient';
import { useApp } from '@brysonandrew/app';

export type TPlaceholderProps = TDivMotionProps & {
  colors?: TColorStops;
  clipPathId: string;
};
export type TPartialPlaceholderProps =
  Partial<TPlaceholderProps>;
export const Placeholder: FC<TPlaceholderProps> = ({
  classValue,
  style,
  clipPathId,
  ...props
}) => {
  const { COLOR } = useApp();
  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: [
      'to right',
      COLOR.primary,
      COLOR.transparent,
      COLOR.primary,
      COLOR.transparent,
    ],
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
        className={cx(classValue)}
        style={{
          width: 24,
          height: 24,
          clipPath: resolveUrlId(clipPathId), // `url(#${clipPathId})`,
        }}
      >
        <motion.figure
          className='relative h-full'
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

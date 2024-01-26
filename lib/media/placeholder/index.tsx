import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import {
  IMAGE_PLACEHOLDER_ID,
  PLACEHOLDER_LAYOUT_ID,
} from '@brysonandrew/media/config/constants';
import { resolveUrlId } from '@brysonandrew/utils/attributes/resolveUrlId';
import clsx from 'clsx';
import {
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/types/dom';
import { resolveGradientStops } from '@brysonandrew/color/utils/resolveGradientStops';

export const Root = styled(motion.div)``;

type TProps = TClassValueProps &
  TDivMotionProps & { colors?: string[] };
export const Placeholder: FC<TProps> = ({
  classValue,
  style,
  colors = ['teal', 'transparent'],
  ...props
}) => {
  return (
    <Root
      className='absolute center w-full h-full'
      layoutId={PLACEHOLDER_LAYOUT_ID}
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
          clipPath: resolveUrlId(IMAGE_PLACEHOLDER_ID),
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
          {...{
            animate: {
              x: ['0%', '-66.67%'],
            },
            transition: {
              repeat: Infinity,
              duration: 2,
              ease: 'keyframes',
            },
          }}
        />
      </div>
    </Root>
  );
};

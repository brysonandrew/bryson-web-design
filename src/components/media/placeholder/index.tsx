import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { type FC } from 'react';
import { IMAGE_PLACEHOLDER_ID } from '../../../pages/projects/gallery/sections/constants';
import { resolveUrlId } from '@utils/attributes/resolveUrlId';
import { resolveGradientStops } from './resolveGradientStops';
import clsx from 'clsx';
import { TClassValueProps } from '@t/index';
import { DURATION_VERY_SLOW } from '@constants/animation';

const PLACEHOLDER_LAYOUT_ID = 'PLACEHOLDER_LAYOUT_ID';

export const Root = styled(motion.div)``;

type TProps = TClassValueProps & HTMLMotionProps<'div'>;
export const Placeholder: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => {
  return (
    <>
      <Root
        className='absolute center w-full h-full'
        layoutId={PLACEHOLDER_LAYOUT_ID}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: 'linear',
          duration: DURATION_VERY_SLOW,
        }}
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
                ['highlight-04', 'transparent'],
              )})`,
            }}
            {...{
              animate: {
                x: ['0%', '-66.67%'],
              },
              transition: {
                repeat: Infinity,
                duration: DURATION_VERY_SLOW,
                ease: 'linear',
              },
            }}
          />
        </div>
      </Root>
    </>
  );
};

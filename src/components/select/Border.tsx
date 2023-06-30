import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';
import { SELECT_LAYOUT_ID } from '../cursor/config';
import { resolveUrlId } from '@utils/resolveUrlId';
import { POOL_ID } from '@components/cursor';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'> & {
  classValue?: ClassValue;
};
export const Border: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    style={{ filter: resolveUrlId(POOL_ID) }}
    className={clsx(
      'absolute -inset-1 mt-1.5 ml-1 pointer-events-none rounded-sm cursor-default',
      classValue ?? 'bg-baby-blue',
    )}
    {...props}
  />
);

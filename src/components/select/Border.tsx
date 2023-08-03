import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { resolveUrlId } from '@utils/resolveUrlId';
import { POOL_ID } from '@components/effects/pool';
import { SELECT_LAYOUT_ID } from './config';
import { TClassValueProps } from '@t/index';
import { TMotionDivProps } from '@t/react';

const Root = styled(motion.div)``;

type TProps = TMotionDivProps & TClassValueProps;
export const Border: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    style={{ filter: resolveUrlId(POOL_ID) }}
    className={clsx(
      'absolute mt-1.5 ml-1 pointer-events-none rounded-sm cursor-default',
      classValue ?? 'background-color-3 -inset-1',
    )}
    {...props}
  />
);

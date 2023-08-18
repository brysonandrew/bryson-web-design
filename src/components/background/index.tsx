import clsx from 'clsx';
import styled from '@emotion/styled';
import { resolveUrlId } from '@utils/attributes/resolveUrlId';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { PATTERN_ID } from './pattern';
import { MORPH_ID } from './morph';
import type { ClassValue } from 'clsx';
import { SLOW_MOTION_CONFIG } from '@constants/animation';

const Root = styled.svg``;
const Rect = styled(motion.rect)``;

type TProps = {
  classValue?: ClassValue;
  children?: JSX.Element;
};
export const Background: FC<TProps> = ({
  classValue,
  children,
}) => {
  return (
    <Root
      className={clsx('cover-fixed', classValue)}
      width='100%'
      height='100%'
    >
      <Rect
        x='0'
        y='0'
        width='100%'
        height='100%'
        style={{ opacity: 0.06 }}
        transition={{ ...SLOW_MOTION_CONFIG, delay: 1 }}
        fill={resolveUrlId(PATTERN_ID)}
        filter={resolveUrlId(MORPH_ID)}
      />
      {children}
    </Root>
  );
};

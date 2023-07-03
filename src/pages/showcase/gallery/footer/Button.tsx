import type { FC } from 'react';
import { FillDarkest } from '@components/metal/FillDarkest';
import styled from '@emotion/styled';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import {
  resolveDropShadow,
  resolveTextShadow,
} from '@pages/index/constants';
import { IMG_KEY, TMedia } from '@pages/showcase/config';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  Link as _Link,
  useSearchParams,
} from 'react-router-dom';
import { MARGIN, PADDING, TEXT_WIDTH } from './config';
import { useTo } from '../hooks/nav/useTo';

export const Root = styled(motion(_Link))``;
export const Background = styled(motion.div)``;

export type TProps = TMedia & {
  width: number;
};
export const Button: FC<TProps> = ({
  img,
  name,
  width,
}) => {
  const to = useTo(img);
  const isLoading = !name;
  const [searchParams] = useSearchParams();
  const imgParam = searchParams.get(IMG_KEY);
  const isActive = imgParam === to.split(`${IMG_KEY}=`)[1];
  const animation = isLoading
    ? 'loading'
    : isActive
    ? 'active'
    : 'idle';
  const handleMoveSound = useMoveSound();
  const handleClick = () => {
    handleMoveSound();
  };

  return (
    <Root
      to={to}
      onClick={handleClick}
      className={clsx('relative', [
        isLoading
          ? 'shadow-white-02-sm'
          : 'shadow-teal-02-sm',
      ])}
      style={{
        width,
        // margin: MARGIN,
        // padding: `${PADDING * 0.5}px ${PADDING}px`,
      }}
      initial='idle'
      animate={animation}
      whileHover={isActive ? 'active' : 'hover'}
      variants={{
        idle: {
          opacity: 0.8,
          textShadow: resolveTextShadow(0),
          filter: resolveDropShadow(1),
          zIndex: 0,
          cursor: 'default',
        },
        loading: {
          opacity: 0.8,
          textShadow: resolveTextShadow(0),
          filter: resolveDropShadow(1, 'white'),
          zIndex: 0,
          cursor: 'wait',
        },
        active: {
          opacity: 1,
          textShadow: resolveTextShadow(2),
          filter: resolveDropShadow(1),
          zIndex: 9999,
          cursor: 'pointer',
        },
        hover: {
          opacity: 1,
          textShadow: resolveTextShadow(4, 'teal'),
          filter: resolveDropShadow(8, 'teal'),
          zIndex: 1,
          cursor: 'pointer',
        },
      }}
    >
      {isActive && (
        <FillDarkest
          initial={false}
          layoutId='GALLERY_BUTTON_FILL'
        />
      )}
      <motion.div
        className={clsx(
          'relative uppercase text-xs text-center overflow-hidden',
          [
            isLoading
              ? 'text-gray'
              : 'text-teal-bright',
          ]
        )}
        style={{ width: TEXT_WIDTH }}
      >
        {img}
      </motion.div>
    </Root>
  );
};

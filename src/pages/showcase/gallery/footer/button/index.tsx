import type { FC } from 'react';
import { FillDarkest } from '@components/metal/FillDarkest';
import styled from '@emotion/styled';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import {
  resolveDropShadow,
  resolveTextShadow,
} from '@pages/index/constants';
import { IMG_KEY } from '@pages/showcase/config';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import {
  Link as _Link,
  useSearchParams,
} from 'react-router-dom';

export const ROOT_CLASS =
  'flex items-center pl-2 pt-1 pb-1';
export const TEXT_CLASS =
  'relative uppercase text-xs';

export const Root = styled(motion(_Link))``;
export const Background = styled(motion.div)``;

export type TProps = HTMLMotionProps<'div'> & {
  to: string;
};
export const Button: FC<TProps> = ({ children, to }) => {
  const [searchParams] = useSearchParams();
  const imgParam = searchParams.get(IMG_KEY);
  const isActive = imgParam === to.split(`${IMG_KEY}=`)[1];
  const animation = isActive ? 'active' : 'idle';
  const handleMoveSound = useMoveSound();
  const handleClick = () => {
    handleMoveSound();
  };
  return (
    <Root
      to={to}
      onClick={handleClick}
      className={clsx(ROOT_CLASS, 'shadow-teal-02-sm')}
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
      <motion.span className={clsx(TEXT_CLASS, 'text-teal-bright')}>
        {children}
      </motion.span>
    </Root>
  );
};

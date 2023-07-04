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
import { useTo } from '../../hooks/nav/useTo';
import { useContext } from '@state/Context';
import COLORS from '@windi/config-colors.json';
import SHADOWS from '@windi/config-shadow.js';

export const Root = styled(motion.div)``;
export const Link = styled(motion(_Link))``;

export const Background = styled(motion.div)``;

export type TProps = TMedia & {
  width: number;
};
export const Button: FC<TProps> = ({
  img,
  name,
  width,
}) => {
  const { dispatch } = useContext();
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
  const handleTap = () => {
    dispatch({
      type: 'start-motion-blur',
      value: null,
    });
    handleMoveSound();
  };

  return (
    <Root
      className={clsx(
        'relative h-10 bg-transparent h-auto px-2 py-1',
      )}
      style={{
        width,
      }}
    >
      <Link
        to={to}
        onTap={handleTap}
        className={clsx(
          'relative flex items-center justify-center uppercase text-xs text-center bg-transparent px-2 py-2',
        )}
        initial='idle'
        animate={animation}
        whileHover={isActive ? 'active' : 'hover'}
        variants={{
          idle: {
            opacity: 0.4,
            textShadow: resolveTextShadow(0),
            filter: resolveDropShadow(1),
            zIndex: 0,
            cursor: 'default',
            color: COLORS['teal'],
            boxShadow: SHADOWS['teal-sm'],
          },
          loading: {
            opacity: 0.8,
            textShadow: resolveTextShadow(0),
            filter: resolveDropShadow(1, 'white'),
            zIndex: 0,
            cursor: 'wait',
            color: COLORS['gray'],
            boxShadow: SHADOWS['gray-sm'],
          },
          active: {
            opacity: 1,
            textShadow: resolveTextShadow(2),
            filter: resolveDropShadow(1),
            zIndex: 9999,
            cursor: 'pointer',
            color: COLORS['teal-bright'],
            boxShadow: SHADOWS['teal-bright-sm'],
          },
          hover: {
            opacity: 1,
            textShadow: resolveTextShadow(4, 'teal'),
            filter: resolveDropShadow(8, 'teal'),
            zIndex: 1,
            cursor: 'pointer',
            color: COLORS['teal-bright'],
            boxShadow: SHADOWS['teal-bright-sm'],
          },
        }}
      >
        {isActive && (
          <FillDarkest
            initial={false}
            classValue='hidden md:flex'
            layoutId='GALLERY_BUTTON_FILL'
          />
        )}
        <div className='flex relative px-1 py-0.5 bg-black md:flex'>{img}</div>
      </Link>
    </Root>
  );
};

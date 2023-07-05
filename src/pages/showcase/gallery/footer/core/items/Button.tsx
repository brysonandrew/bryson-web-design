import type { FC } from 'react';
import styled from '@emotion/styled';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import {
  resolveDropShadow,
  resolveShadow,
} from '@pages/index/constants';
import { IMG_KEY, TMedia } from '@pages/showcase/config';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  Link as _Link,
  useSearchParams,
} from 'react-router-dom';
import { useTo } from '../../../hooks/nav/useTo';
import { useContext } from '@state/Context';
import COLORS from '@windi/config-colors.json';
import { FillDark } from '@components/metal/FillDark';

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
        'flex items-center justify-center relative h-16',
      )}
      style={{ width }}
    >
      <Link
        to={to}
        onTap={handleTap}
        className={clsx(
          'flex items-center justify-center relative w-full h-full',
        )}
        initial='idle'
        animate={animation}
        whileHover={isActive ? 'active' : 'hover'}
      >
        {isActive && (
          <motion.div
            className='absolute w-4 h-0.5 rounded-full bg-teal-bright'
            style={{
              boxShadow: resolveShadow(4, 'teal-bright'),
              filter: resolveDropShadow(6, 'teal'),
            }}
            layoutId='GALLERY_BUTTON_FILL'
          />
        )}
        <motion.div
          className='flex relative uppercase text-xs text-center px-2.5 py-1.25'
          variants={{
            idle: {
              opacity: 0.2,
              zIndex: 0,
              cursor: 'default',
              color: COLORS['white'],
              textShadow: resolveShadow(0),
              filter: resolveDropShadow(2, 'white'),
              boxShadow: resolveShadow(1, 'white'),
            },
            loading: {
              zIndex: 0,
              cursor: 'wait',
              opacity: 0.8,
              color: COLORS['gray'],
              textShadow: resolveShadow(0),
              filter: resolveDropShadow(1, 'white'),
              boxShadow: resolveShadow(1, 'gray'),
            },
            active: {
              opacity: 1,
              zIndex: 9999,
              cursor: 'pointer',
              color: COLORS['teal-bright'],
              textShadow: resolveShadow(2, 'teal'),
              filter: resolveDropShadow(4, 'teal-bright'),
              boxShadow: resolveShadow(1, 'teal'),
            },
            hover: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: COLORS['white'],
              textShadow: resolveShadow(2, 'white'),
              filter: resolveDropShadow(4, 'white'),
              boxShadow: resolveShadow(1, 'teal'),
            },
          }}
        >
          <FillDark />
          <span className='flex relative'>{img}</span>
        </motion.div>
      </Link>
    </Root>
  );
};

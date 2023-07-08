import type { FC } from 'react';
import styled from '@emotion/styled';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import {
  resolveDropShadow,
  resolveShadow,
} from '@constants/colors';
import {
  DEFAULT_EXT,
  NAME_KEY,
  TMediaRecord,
  resolveLoadingItemKey,
} from '@pages/projects/config';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  Link as _Link,
  useSearchParams,
} from 'react-router-dom';
import { useTo } from '../../../hooks/nav/useTo';
import { useContext } from '@state/Context';
import * as unoConfig from '@uno/config';
const COLORS = unoConfig.default.theme.colors;

export const Root = styled(motion.div)``;
export const Link = styled(motion(_Link))``;

export const Background = styled(motion.div)``;

export type TProps = {
  index: number;
  width: number;
  mediaRecord: TMediaRecord;
};
export const Button: FC<TProps> = ({
  index,
  mediaRecord,
  width,
}) => {
  const { key, name } = mediaRecord[DEFAULT_EXT];
  const { dispatch } = useContext();
  const to = useTo(name);
  const isLoading = key === resolveLoadingItemKey(index);
  const [searchParams] = useSearchParams();
  const imgParam = searchParams.get(NAME_KEY);
  const isActive = imgParam === to.split(`${NAME_KEY}=`)[1];
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
        whileTap='tap'
      >
        {isActive && (
          <motion.div
            className='absolute w-4 h-0.5 rounded-full bg-teal-bright'
            style={{
              boxShadow: resolveShadow(4, 'teal-bright'),
              filter: resolveDropShadow(6, 'teal'),
            }}
            layoutId='GALLERY_BUTTON_FILL'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
          />
        )}
        <motion.div
          className='flex items-center justify-center absolute inset-0 uppercase text-sm text-center'
          variants={{
            idle: {
              opacity: 0.2,
              zIndex: 0,
              cursor: 'default',
              color: COLORS['white'],
              textShadow: resolveShadow(0),
            },
            loading: {
              zIndex: 0,
              cursor: 'wait',
              opacity: 0.8,
              color: COLORS['gray'],
              textShadow: resolveShadow(0),
            },
            active: {
              opacity: 1,
              zIndex: 9999,
              cursor: 'default',
              color: COLORS['teal-bright'],
              textShadow: resolveShadow(2, 'teal'),
            },
            hover: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: COLORS['white'],
              textShadow: resolveShadow(2, 'white'),
            },
            tap: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: COLORS['teal-bright'],
              textShadow: resolveShadow(4, 'teal-bright'),
            },
          }}
        >
          <span className='flex relative'>{name}</span>
        </motion.div>
      </Link>
    </Root>
  );
};

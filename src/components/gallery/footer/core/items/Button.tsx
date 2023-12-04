import { type FC } from 'react';
import styled from '@emotion/styled';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { COLORS } from '@constants/colors';
import { NAME_KEY } from '@pages/projects/config';
import { motion } from 'framer-motion';
import {
  Link as _Link,
  useSearchParams,
} from 'react-router-dom';
import { useTo } from '@hooks/media/nav/useTo';
import { useGallery as useContext } from '@context/domains/gallery';
import { useDarkMode } from '@context/dark-mode';
import {
  TMediaDetails,
  TMediaRecord,
} from 'ops/types/media';
import {
  resolveShadow,
  resolveDropShadow,
} from '@utils/effects/glow';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';

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
  width,
  mediaRecord,
}) => {
  const { onMotionBlurStart } = useContext();
  const { isDarkMode } = useDarkMode();
  const { src, name } = mediaRecord;
  const to = useTo({ next: name });
  const isLoading = false;
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
    onMotionBlurStart();
    handleMoveSound();
  };

  return (
    <Root
      className='center relative h-16'
      style={{ width }}
    >
      <Link
        to={to}
        onTap={handleTap}
        className='center relative w-full h-full'
        initial='idle'
        animate={animation}
        whileHover={isActive ? 'active' : 'hover'}
        whileTap='tap'
        {...resolveInteractiveLabels(name)}
      >
        {isActive && (
          <motion.div
            className='absolute w-4 h-0.5 rounded-full background-color'
            style={
              isDarkMode
                ? {
                    boxShadow: resolveShadow(
                      4,
                      'teal-bright',
                    ),
                    filter: resolveDropShadow(6, 'teal'),
                  }
                : {}
            }
            layoutId='GALLERY_BUTTON_FILL'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
          />
        )}
        <motion.div
          className='center absolute inset-0 uppercase text-sm text-center'
          variants={{
            idle: {
              opacity: isDarkMode ? 0.4 : 0.6,
              zIndex: 0,
              cursor: 'default',
              color: isDarkMode
                ? COLORS['white']
                : COLORS['gray'],
              textShadow: resolveShadow(0),
            },
            loading: {
              zIndex: 0,
              cursor: 'wait',
              opacity: 0.8,
              color: isDarkMode
                ? COLORS['gray']
                : COLORS['gray'],
              textShadow: resolveShadow(0),
            },
            active: {
              opacity: 1,
              zIndex: 9999,
              cursor: 'default',
              color: isDarkMode
                ? COLORS['teal-bright']
                : COLORS['gray'],
              textShadow: isDarkMode
                ? resolveShadow(2, 'teal')
                : resolveShadow(0),
            },
            hover: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: isDarkMode
                ? COLORS['white']
                : COLORS['gray'],
              textShadow: isDarkMode
                ? resolveShadow(2, 'white')
                : resolveShadow(0),
            },
            tap: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: isDarkMode
                ? COLORS['teal-bright']
                : COLORS['gray'],
              textShadow: isDarkMode
                ? resolveShadow(4, 'teal-bright')
                : resolveShadow(0),
            },
          }}
        >
          <span className='flex relative'>{name}</span>
        </motion.div>
      </Link>
    </Root>
  );
};

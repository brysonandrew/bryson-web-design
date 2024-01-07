import { type FC } from 'react';
import styled from '@emotion/styled';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { NAME_KEY } from '@pages/projects/config';
import { motion } from 'framer-motion';
import {
  Link as _Link,
  useSearchParams,
} from 'react-router-dom';
import { useTo } from '@hooks/media/nav/useTo';
import { useGallery as useContext } from '@context/domains/gallery';
import { useDarkMode } from '@context/dark-mode';
import { TMediaRecord } from 'ops/types/media';
import {
  resolveShadow,
  resolveDropShadow,
} from '@utils/effects/glow';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { COLORS } from '@uno/theme/colors';
import { DURATION } from '@constants/animation';
import { Background } from '@components/buttons/circle/Background';

export const Root = styled(motion.div)``;
export const Link = styled(motion(_Link))``;

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
          <Background
            style={{
              boxShadow: resolveShadow(4, 'teal-bright'),
              filter: resolveDropShadow(6, 'teal'),
              width: 40, height: 40
            }}
            layoutId='GALLERY_BUTTON_FILL'
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
                ? COLORS['white-9']
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
                ? COLORS['white-9']
                : COLORS['gray'],
              textShadow: isDarkMode
                ? resolveShadow(2, 'white-9')
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

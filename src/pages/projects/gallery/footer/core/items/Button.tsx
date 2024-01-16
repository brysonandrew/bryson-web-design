import { type FC } from 'react';
import styled from '@emotion/styled';
import { useMoveSound } from '@lib/hooks/sounds/useMoveSound';
import { NAME_KEY } from '@pages/projects/config/constants/keys';
import { motion } from 'framer-motion';
import { Link as _Link } from 'react-router-dom';
import { useGallery as useContext } from '@pages/projects/gallery/context';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { TMediaRecord } from '@ops/screens/process/config/types';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';
import { Background } from '@lib/components/interactive/circle/Background';
import { useTo } from '@pages/projects/gallery/hooks/nav/useTo';
import { COLOR_VARS_RECORD } from '@app/colors/constants';
import { useCurrName } from '@pages/projects/gallery/hooks/params/useCurrName';
import { useApp } from '@lib/context/app/useApp';

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
  const { COLOR, GLOW, Active, TextureGlow } = useApp();
  const { onMotionBlurStart } = useContext();
  const { isDarkMode } = useDarkMode();
  const { name } = mediaRecord;
  const to = useTo({ next: name });
  const isLoading = false;
  const imgParam = useCurrName();
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
              boxShadow: GLOW.highlight,
              filter: GLOW.DROP.accent,
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
                ? COLOR_VARS_RECORD['white-9']
                : COLOR_VARS_RECORD['gray'],
              textShadow: GLOW.accent,
            },
            loading: {
              zIndex: 0,
              cursor: 'wait',
              opacity: 0.8,
              color: isDarkMode
                ? COLOR_VARS_RECORD['gray']
                : COLOR_VARS_RECORD['gray'],
              textShadow: GLOW.accent,
            },
            active: {
              opacity: 1,
              zIndex: 9999,
              cursor: 'default',
              color: isDarkMode
                ? COLOR_VARS_RECORD['highlight']
                : COLOR_VARS_RECORD['gray'],
              textShadow: GLOW.secondary,
            },
            hover: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: COLOR['white'],
              textShadow: GLOW['white-9'],
            },
            tap: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: COLOR['highlight'],
              textShadow: GLOW['highlight'],
            },
          }}
        >
          <span className='flex relative'>{name}</span>
        </motion.div>
      </Link>
    </Root>
  );
};

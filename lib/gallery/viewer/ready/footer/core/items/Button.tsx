import { type FC } from 'react';
import styled from '@emotion/styled';
import { useMoveSound } from '@brysonandrew/sounds/useMoveSound';
import { NAME_KEY } from '@brysonandrew/gallery/config/constants';
import { motion } from 'framer-motion';
import { Link as _Link } from 'react-router-dom';
import { useViewer as useContext } from '@brysonandrew/gallery';
import { TMediaRecord } from '@brysonandrew/media/picture/config/types';
import { resolveInteractiveLabels } from '@brysonandrew/base/utils/attributes/resolveInteractiveLabels';
import { Background } from '@brysonandrew/base/components/interactive/circle/Background';
import { useTo } from '@brysonandrew/gallery/viewer/hooks/nav/useTo';
import { useCurrName } from '@brysonandrew/gallery/viewer/hooks/params/useCurrName';
import { useApp } from '@brysonandrew/app';
import { useDarkMode } from '@brysonandrew/dark-mode';

const Root = styled(motion.div)``;
const Link = styled(motion(_Link))``;

export type TButtonProps = {
  index: number;
  width: number;
  mediaRecord: TMediaRecord;
};
export const Button: FC<TButtonProps> = ({
  index,
  width,
  mediaRecord,
}) => {
  const { COLOR, GLOW_BOX } = useApp();
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
              boxShadow: GLOW_BOX.highlight,
              filter: GLOW_BOX.accent,
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
                ? COLOR['white-9']
                : COLOR['gray'],
              textShadow: GLOW_BOX.accent,
            },
            loading: {
              zIndex: 0,
              cursor: 'wait',
              opacity: 0.8,
              color: isDarkMode
                ? COLOR['gray']
                : COLOR['gray'],
              textShadow: GLOW_BOX.accent,
            },
            active: {
              opacity: 1,
              zIndex: 9999,
              cursor: 'default',
              color: isDarkMode
                ? COLOR['highlight']
                : COLOR['gray'],
              textShadow: GLOW_BOX.secondary,
            },
            hover: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: COLOR['white'],
              textShadow: GLOW_BOX['white-9'],
            },
            tap: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: COLOR['highlight'],
              textShadow: GLOW_BOX['highlight'],
            },
          }}
        >
          <span className='flex relative'>{name}</span>
        </motion.div>
      </Link>
    </Root>
  );
};

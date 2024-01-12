import { type FC } from 'react';
import styled from '@emotion/styled';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { NAME_KEY } from '@pages/projects/config/constants';
import { motion } from 'framer-motion';
import {
  Link as _Link,
  useSearchParams,
} from 'react-router-dom';
import { useTo } from '@hooks/media/nav/useTo';
import { useGallery as useContext } from '@pages/projects/gallery/context';
import { useDarkMode } from '@hooks/dark-mode/context';
import { TMediaRecord } from "@ops/screens/process/config/types";
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { COLOR_LOOKUP } from '@uno/theme/colors';
import { Background } from '@components/interactive/circle/Background';
import { resolveDropShadow } from '@uno/rules/glow/resolveDropShadow';
import { resolveShadow } from '@uno/rules/glow/resolveShadow';

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
              boxShadow: resolveShadow(4, 'highlight'),
              filter: resolveDropShadow(6, 'secondary'),
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
                ? COLOR_LOOKUP['white-9']
                : COLOR_LOOKUP['gray'],
              textShadow: resolveShadow(0),
            },
            loading: {
              zIndex: 0,
              cursor: 'wait',
              opacity: 0.8,
              color: isDarkMode
                ? COLOR_LOOKUP['gray']
                : COLOR_LOOKUP['gray'],
              textShadow: resolveShadow(0),
            },
            active: {
              opacity: 1,
              zIndex: 9999,
              cursor: 'default',
              color: isDarkMode
                ? COLOR_LOOKUP['highlight']
                : COLOR_LOOKUP['gray'],
              textShadow: isDarkMode
                ? resolveShadow(2, 'secondary')
                : resolveShadow(0),
            },
            hover: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: isDarkMode
                ? COLOR_LOOKUP['white-9']
                : COLOR_LOOKUP['gray'],
              textShadow: isDarkMode
                ? resolveShadow(2, 'white-9')
                : resolveShadow(0),
            },
            tap: {
              opacity: 1,
              zIndex: 1,
              cursor: 'pointer',
              color: isDarkMode
                ? COLOR_LOOKUP['highlight']
                : COLOR_LOOKUP['gray'],
              textShadow: isDarkMode
                ? resolveShadow(4, 'highlight')
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

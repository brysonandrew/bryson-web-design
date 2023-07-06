import styled from '@emotion/styled';
import type { TMedia } from '@pages/showcase/config';
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from 'framer-motion';
import { type FC } from 'react';
import { PRESENCE_OPACITY } from '@constants/animation';
import { useCursor } from './useCursor';
import { useScale } from './useScale';
import { TImageProps } from './config';
import clsx from 'clsx';
import { TEAL_GLOW_BOX_SHADOW } from '@pages/index/constants';
import { Cross } from '@components/icons/Cross';

export const Root = styled(motion.div)``;
export const Border = styled(motion.div)``;
export const Tag = styled.code`
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: gray;
`;

type TProps = TImageProps & {
  media: TMedia;
  element: HTMLDivElement;
};
export const Zoom: FC<TProps> = ({
  media,
  element,
  image,
}) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const sharedConfig = {
    element,
    image,
    cursorX,
    cursorY,
  };
  const { isCursorReady, ...rootProps } = useCursor({
    ...sharedConfig,
  });
  const { scale, ...copyProps } = useScale({
    ...sharedConfig,
  });

  return (
    <AnimatePresence>
      {isCursorReady && (
        <>
          <Border
            key='ZOOM_BORDER'
            className={clsx(
              'absolute pointer-events-none',
              TEAL_GLOW_BOX_SHADOW,
            )}
            {...rootProps}
            {...PRESENCE_OPACITY}
          >
            <div
              className={clsx(
                'absolute left-full top-full flex items-center px-2 py-0.5 m-2',
              )}
            >
              <Cross classValue='w-2.5 h-2.5 mt-0.5' />
              <div className='p-0.5' />
              <Tag className='relative text-xs text-teal-bright whitespace-nowrap'>{`${~~scale}`}</Tag>
            </div>
          </Border>
          <Root
            key='ZOOM_CURSOR'
            className='absolute pointer-events-none overflow-hidden'
            {...rootProps}
            {...PRESENCE_OPACITY}
          >
            <motion.img
              src={media.src}
              className='absolute'
              alt={media.key}
              {...copyProps}
            />
          </Root>
        </>
      )}
    </AnimatePresence>
  );
};

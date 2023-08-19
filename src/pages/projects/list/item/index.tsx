import { TSlugProps } from '@pages/projects/config';
import { motion } from 'framer-motion';
import {
  useRef,
  type FC,
  useEffect,
  useState,
} from 'react';
import { Content } from './content';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { Time } from './content/Time';
import { useMediaFromKey } from '@hooks/media/useMediaFromKey';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { useContext } from '@state/Context';
import styled from '@emotion/styled';
import { useTo } from '@hooks/media/nav/useTo';
import { useNavigate } from 'react-router-dom';
import { Details } from './details';
import { isDesktop } from 'react-device-detect';
import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@components/cursor/switch/config';
import { TTapEvent } from '@t/events';
import { NOOP } from '@constants/functions';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';

const Root = styled(motion.li)``;

type TProps = TSlugProps & {
  index: number;
};
export const Item: FC<TProps> = ({ slug, index }) => {
  const isEnteredOnScrollRef = useRef(false);
  const { hoverKey, isScrolling } = useContext();
  const [isExpanded, setExpanded] = useState(false);
  const { timeoutRef, endTimeout } = useTimeoutRef();
  const { isHover: isProjectHover, handlers } = useHoverKey(
    PROJECT_CURSOR_KEY,
    slug,
  );
  const secondaryKey = resolveCursorKeyFromHoverKey(
    hoverKey,
    1,
  );
  const isHover = secondaryKey === slug;
  const isChildHover = isHover && !isProjectHover;

  const item = PROJECT_ITEMS_RECORD[slug];
  const navigate = useNavigate();
  const handleLoadMedia = useMediaFromKey();
  const handleHoverStart = () => {
    handleLoadMedia(slug);
    if (!handlers.onHoverStart) return;
    handlers.onHoverStart();
  };
  const handleHoverEnd = () => {
    if (!handlers.onHoverEnd) return;
    handlers.onHoverEnd();
  };
  const handleOnSound = useOnSound();
  const to = useTo({ project: slug, next: 1 });

  useEffect(() => {
    if (!isScrolling && isEnteredOnScrollRef.current) {
      handleHoverStart();
      isEnteredOnScrollRef.current = false;
    }
  }, [isScrolling]);

  const handleLayoutAnimationComplete = () => {
    setExpanded(isHover);
  };

  const handleGallery = () => {
    navigate(to);
    handleOnSound();
  };

  const handleTap = () => {
    if (isHover) {
      handleGallery();
    } else if (!isDesktop) {
      handleHoverStart();
    }
  };

  const eventHandlers = {
    onTap: isChildHover ? NOOP : handleTap,
    ...(isDesktop
      ? {
          ...handlers,
          onHoverStart: () => {
            if (isScrolling) {
              isEnteredOnScrollRef.current = true;
            } else {
              if (hoverKey === null) {
                endTimeout();
                timeoutRef.current = setTimeout(() => {
                  handleHoverStart();
                }, 20);
              } else {
                handleHoverStart();
              }
            }
          },
          onHoverEnd: () => {
            isEnteredOnScrollRef.current = false;
            endTimeout();
            handleHoverEnd();
          },
        }
      : {}),
  };
  return (
    <Root
      id={slug}
      className='cursor-pointer'
      style={{ zIndex: index }}
      {...eventHandlers}
    >
      <Content
        slug={item.slug}
        isHover={isHover}
        rightHeader={<Time time={item.time} />}
        onLayoutAnimationComplete={
          handleLayoutAnimationComplete
        }
      >
        {isHover && (
          <Details isVisible={isExpanded} {...item} />
        )}
      </Content>
    </Root>
  );
};

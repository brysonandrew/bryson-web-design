import { TSlugProps } from '@pages/projects/config';
import { motion } from 'framer-motion';
import {
  useRef,
  type FC,
  useEffect,
  useState,
  PointerEvent,
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

const Root = styled(motion.li)``;

type TProps = TSlugProps & {
  index: number;
};
export const Item: FC<TProps> = ({ slug, index }) => {
  const isEnteredOnScrollRef = useRef(false);
  const { hoverKey, isScrolling } = useContext();
  const [isExpanded, setExpanded] = useState(false);
  const { handlers } = useHoverKey(
    PROJECT_CURSOR_KEY,
    slug,
  );
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
  const secondaryKey = resolveCursorKeyFromHoverKey(
    hoverKey,
    1,
  );
  const isHover = secondaryKey === slug;
  const item = PROJECT_ITEMS_RECORD[slug];
  const navigate = useNavigate();
  const handleLoadMedia = useMediaFromKey();
  const handleHoverStart = () => {
    if (isScrolling) {
      isEnteredOnScrollRef.current = true;
    } else {
      handleLoadMedia(slug);
      if (!handlers.onHoverStart || isScrolling) return;
      handlers.onHoverStart();
    }
  };
  const handleHoverEnd = ({ target }: MouseEvent) => {
    isEnteredOnScrollRef.current = false;
    if (!handlers.onHoverEnd || !target) return;
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

  const handleTap = handleGallery;

  const handleTouchStart = () => {
    if (isExpanded) {
      handleGallery();
    }
    handlers.onTouchStart();
  };

  const eventHandlers = {
    ...handlers,
    onHoverStart: handleHoverStart,
    onHoverEnd: handleHoverEnd,
  };

  return (
    <Root
      id={slug}
      className='cursor-pointer'
      style={{ zIndex: index }}
      onTap={handleTap}
      {...eventHandlers}
      onTouchStart={handleTouchStart}
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

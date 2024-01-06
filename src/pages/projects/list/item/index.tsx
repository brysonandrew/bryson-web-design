import { TSlugProps } from '@pages/projects/config';
import { motion } from 'framer-motion';
import { type FC, useEffect, useState } from 'react';
import { Content } from './content';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { Time } from './content/Time';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { useOnSound } from '@hooks/sounds/useOnSound';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Details } from './details';
import { isDesktop } from 'react-device-detect';
import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@components/cursor/switch/config';
import { NOOP } from '@constants/functions';
import { useCursor } from '@context/cursor';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { useToFirst } from '@hooks/media/nav/useToFirst';

const Root = styled(motion.li)``;

type TProps = TSlugProps & {
  index: number;
};
export const Item: FC<TProps> = ({ slug, index }) => {
  const { hoverKey } = useCursor();
  const [isExpanded, setExpanded] = useState(false);
  const currProject = useCurrProject();
  const isGallery = Boolean(currProject);

  const { isHover: isParentHover, handlers } = useHoverKey(
    PROJECT_CURSOR_KEY,
    slug,
  );
  const secondaryKey = resolveCursorKeyFromHoverKey(
    hoverKey,
    1,
  );
  const isHover = secondaryKey === slug;
  const isChildHover = isHover && !isParentHover;

  const item = PROJECT_ITEMS_RECORD[slug];
  const navigate = useNavigate();
  const handleOnSound = useOnSound();
  const to = useToFirst(slug);

  useEffect(() => {
    handlers.onHoverEnd();
  }, [isGallery]);

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
      handlers.onHoverStart();
    }
  };

  const eventHandlers = {
    onTap: isChildHover ? NOOP : handleTap,
    ...(isDesktop ? handlers : {}),
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

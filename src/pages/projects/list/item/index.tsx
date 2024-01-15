import { motion } from 'framer-motion';
import { type FC, useEffect, useState } from 'react';
import { Content } from '../../components/content';
import { PROJECT_ITEMS_RECORD } from '@pages/projects/config/constants/items';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { useOnSound } from '@lib/hooks/sounds/useOnSound';
import { useNavigate } from 'react-router-dom';
import { Details } from './details';
import { isDesktop } from 'react-device-detect';
import { resolveCursorKeyFromHoverKey } from '@lib/cursor/switch/config';
import { NOOP } from '@lib/constants/functions';
import { useCursor } from '@lib/cursor/context';
import { useCurrProject } from '@pages/projects/gallery/hooks/params/useCurrProject';
import { TSlugProps } from '@pages/projects/config/types';
import { RightCollapsed } from './RightCollapsed';
import { useToFirst } from '@pages/projects/gallery/hooks/nav/useToFirst';
import { resolveHoverKeyArgs } from './resolveHoverKeyArgs';

type TProps = TSlugProps & {
  index: number;
};
export const Item: FC<TProps> = ({ slug, index }) => {
  const { hoverKey } = useCursor();
  const [isExpanded, setExpanded] = useState(false);
  const currProject = useCurrProject();
  const isGallery = Boolean(currProject);

  const hoverKeyArgs = resolveHoverKeyArgs(slug);

  const { isHover: isParentHover, handlers } = useHoverKey(
    ...hoverKeyArgs,
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
    <motion.li
      id={slug}
      className='cursor-pointer'
      style={{ zIndex: index }}
      {...eventHandlers}
    >
      <Content
        slug={item.slug}
        isHover={isHover}
        rightHeader={
          <RightCollapsed
            isHover={isParentHover}
            slug={slug}
          />
        }
        onLayoutAnimationComplete={
          handleLayoutAnimationComplete
        }
      >
        {isHover && (
          <Details isVisible={isExpanded} {...item} />
        )}
      </Content>
    </motion.li>
  );
};

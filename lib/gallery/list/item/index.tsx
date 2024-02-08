import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Content } from '../../components/content';
import {} from '@brysonandrew/cursor/hooks/useHoverKey';
import { useOnSound } from '@brysonandrew/sounds/useOnSound';
import { useNavigate } from 'react-router-dom';
import { Details } from './details';
import { isDesktop } from 'react-device-detect';
import { NOOP } from '@brysonandrew/utils-function';
import {
  useHoverKey,
  useCursor,
  resolveCursorKeyFromHoverKey,
} from '@brysonandrew/cursor';
import { useCurrProject } from '@brysonandrew/gallery-viewer/hooks/params/useCurrProject';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { useToFirst } from '@brysonandrew/gallery-viewer/hooks/nav/useToFirst';
import { resolveHoverKeyArgs } from './resolveHoverKeyArgs';
import { useGallery } from '../../GalleryProvider';

type TProps<T extends string> = TSlugProps<T> & {
  index: number;
};
export const Item = <T extends string, R extends object>({
  slug,
  index,
}: TProps<T>) => {
  const { ITEMS_RECORD, List } = useGallery<T, R>();
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

  const item = ITEMS_RECORD[slug];
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
      className='cursor-pointer border border-transparent'
      style={{ zIndex: index }}
      {...eventHandlers}
    >
      <Content
        slug={slug}
        isHover={isHover}
        rightHeader={
          <List.RightHeader slug={slug} isHover={isHover} />
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

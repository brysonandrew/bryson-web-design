import { useEffect, useState } from 'react';
import { useOnSound } from '@brysonandrew/sounds/useOnSound';
import { useNavigate } from 'react-router-dom';
import { Details } from './details';
import { isDesktop } from 'react-device-detect';
import { NOOP } from '@brysonandrew/utils-function';
import {
  useHover,
  useCursor,
  resolveCursorKeyFromHover,
} from '@brysonandrew/motion-cursor';
import { useCurrProject } from '@brysonandrew/gallery-viewer/hooks/params/useCurrProject';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { useToFirst } from '@brysonandrew/gallery-viewer/hooks/nav/useToFirst';
import { resolveHoverArgs } from './resolveHoverArgs';
import { Content } from '@brysonandrew/gallery/components/content';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';

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

  const hoverArgs = resolveHoverArgs(slug);

  const { isHover: isParentHover, handlers } = useHover(
    ...hoverArgs,
  );
  const primaryKey = resolveCursorKeyFromHover(
    hoverKey,
    1,
  );

  const isHover = primaryKey === slug;
  const isChildHover = isHover && !isParentHover;

  const item = ITEMS_RECORD[slug];
  const navigate = useNavigate();
  const handleOnSound = useOnSound();
  const to = useToFirst(slug);

  useEffect(() => {
    handlers.onMouseLeave();
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
      handlers.onMouseEnter();
    }
  };

  const eventHandlers = {
    onClick: isChildHover ? NOOP : handleTap,
    ...(isDesktop ? handlers : {}),
  };

  return (
    <li
      id={slug}
      className='cursor-pointer group'
      style={{ zIndex: index }}
      {...eventHandlers}
    >
      <Content
        slug={slug}
        isHover={isHover}
        leftHeader={<List.LeftHeader slug={slug} />}
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
    </li>
  );
};

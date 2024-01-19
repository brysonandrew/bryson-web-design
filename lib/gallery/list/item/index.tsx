import { motion } from 'framer-motion';
import { type FC, useEffect, useState } from 'react';
import { Content } from '../../components/content';
import { useHoverKey } from '@brysonandrew/lib/cursor/hooks/useHoverKey';
import { useOnSound } from '@brysonandrew/lib/hooks/sounds/useOnSound';
import { useNavigate } from 'react-router-dom';
import { Details } from './details';
import { isDesktop } from 'react-device-detect';
import { resolveCursorKeyFromHoverKey } from '@brysonandrew/lib/cursor/switch/config';
import { NOOP } from '@brysonandrew/lib/constants/functions';
import { useCursor } from '@brysonandrew/lib/cursor/context';
import { useCurrProject } from '@brysonandrew/lib/gallery/viewer/hooks/params/useCurrProject';
import { TSlugProps } from '@brysonandrew/lib/gallery/config/types';
import { useToFirst } from '@brysonandrew/lib/gallery/viewer/hooks/nav/useToFirst';
import { resolveHoverKeyArgs } from './resolveHoverKeyArgs';
import { useGallery } from '../../context/Provider';

type TProps<
  K extends string,
> = TSlugProps<K> & {
  index: number;
};
export const Item = <
  T extends string,
  K extends string,
  R extends object,
>({
  slug,
  index,
}: TProps<K>) => {
  const {
    ITEMS_RECORD,
    List: { RightHeader },
  } = useGallery<T, K, R>();
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
      className='cursor-pointer'
      style={{ zIndex: index }}
      {...eventHandlers}
    >
      <Content
        slug={item.slug}
        isHover={isHover}
        rightHeader={
          <RightHeader slug={slug} isHover={isHover} />
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

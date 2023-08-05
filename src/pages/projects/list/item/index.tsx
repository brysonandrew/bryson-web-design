import { TSlugProps } from '@pages/projects/config';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Content } from './content';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { Time } from './content/Time';
import { useMediaFromKey } from '@hooks/media/useMediaFromKey';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import { useHoverKey } from '@hooks/useHoverKey';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { Space2 } from '@components/spaces/Space2';
import { useContext } from '@state/Context';
import styled from '@emotion/styled';
import { useTo } from '@hooks/media/nav/useTo';
import { Link } from 'react-router-dom';
import { Space } from '@components/spaces/Space';
import { Space_5 } from '@components/spaces/Space_5';

const InternalLink = styled(motion(Link))``;

export const DEBOUNCE = 0;
export const DEBOUNCE_EXIT = 0;

export type TUpdatePrevsConfig = {
  index: number;
  value: number | null;
};

type TProps = TSlugProps & {
  isLast: boolean;
};
export const Item: FC<TProps> = ({ slug, isLast }) => {
  const { isScrolling } = useContext();
  const { isHover, ...handlers } = useHoverKey(
    'project',
    slug,
  );
  const item = PROJECT_ITEMS_RECORD[slug];
  const handleLoadMedia = useMediaFromKey();
  const handleHoverStart = ({ target }: MouseEvent) => {
    handleLoadMedia(slug);
    if (!handlers.onHoverStart || isScrolling || !target)
      return;
    handlers.onHoverStart();
  };
  const handleHoverEnd = ({ target }: MouseEvent) => {
    if (!handlers.onHoverEnd || isScrolling || !target)
      return;
    handlers.onHoverEnd();
  };
  const handleOnSound = useOnSound();
  const to = useTo({ project: slug, next: 1 });

  return (
    <>
      <motion.li
        layout={isHover ? 'size' : undefined}
        onClick={handleOnSound}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        {...PARENT_GLOW_PROPS}
        {...handlers}
      >
        <InternalLink
          to={to}
        >
          <Content {...item}>
            <Time time={item.time} />
          </Content>
        </InternalLink>
      </motion.li>
      {!isLast && <Space2 element='li' />}
    </>
  );
};

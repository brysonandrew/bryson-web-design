import { TSlugProps } from '@pages/projects/config';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Content } from './content';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { Time } from './content/Time';
import { useMediaFromKey } from '@hooks/media/useMediaFromKey';
import { useHoverKey } from '@hooks/useHoverKey';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { useContext } from '@state/Context';
import styled from '@emotion/styled';
import { useTo } from '@hooks/media/nav/useTo';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { resolveParentProps } from '@utils/effects';
import { useCurrProject } from '@hooks/params/useCurrProject';
import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@components/select/config';

const Root = styled(motion.li)``;

type TProps = TSlugProps & {
  index: number;
  count: number;
};
export const Item: FC<TProps> = ({
  slug,
  index,
  count,
}) => {
  const currProject = useCurrProject();
  const { hoverKey, isScrolling } = useContext();
  const { isHover, ...handlers } = useHoverKey(
    PROJECT_CURSOR_KEY,
    slug,
  );
  const cursorKey = resolveCursorKeyFromHoverKey(hoverKey);
  const isOtherHover =
    !isHover &&
    hoverKey !== null &&
    cursorKey === PROJECT_CURSOR_KEY;
  const isDim = isOtherHover && !Boolean(currProject);
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
      <Root
        className={clsx('relative z-0 py-3')}
        onClick={handleOnSound}
        {...resolveParentProps(isDim)}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <Link to={to}>
          <Content
            isHover={isHover}
            style={{ opacity: 1, zIndex: count - index }}
            variants={{
              animate: { opacity: 1 },
              hover: { opacity: 1 },
              dim: { opacity: 0.6 },
            }}
            {...item}
          >
            <Time time={item.time} />
          </Content>
        </Link>
      </Root>
    </>
  );
};

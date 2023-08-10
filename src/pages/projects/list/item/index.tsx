import { TSlugProps } from '@pages/projects/config';
import { motion } from 'framer-motion';
import { useRef, type FC, useEffect } from 'react';
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
import { PARENT_PROPS } from '@utils/effects';
import { useCurrProject } from '@hooks/params/useCurrProject';
import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@components/select/config';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';

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
  const isEnteredOnScrollRef = useRef(false);
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
  const handleHoverStart = () => {
    handleLoadMedia(slug);
    if (!handlers.onHoverStart || isScrolling) return;
    handlers.onHoverStart();
  };
  const handleHoverEnd = ({ target }: MouseEvent) => {
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

  return (
    <>
      <Root
        className={clsx('relative z-0 py-3')}
        onClick={handleOnSound}
        {...PARENT_PROPS}
        onHoverStart={
          isScrolling
            ? () => (isEnteredOnScrollRef.current = true)
            : handleHoverStart
        }
        onHoverEnd={handleHoverEnd}
      >
        <Link
          to={to}
          {...resolveInteractiveLabels(
            `Open project ${item.title}`,
          )}
        >
          <Content
            isHover={isHover}
            style={{ opacity: 1, zIndex: count - index }}
            variants={{
              animate: { opacity: 1 },
              hover: { opacity: 1 },
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

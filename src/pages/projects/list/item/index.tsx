import { TSlugProps } from '@pages/projects/config';
import { AnimatePresence, motion } from 'framer-motion';
import { type FC } from 'react';
import { Content } from './content';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { Time } from './content/Time';
import { useMediaFromKey } from '@hooks/media/useMediaFromKey';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import { useHoverKey } from '@hooks/useHoverKey';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { Space2 } from '@components/spaces/Space2';
import { Space3 } from '@components/spaces/Space3';
import { Buttons } from './Buttons';
import { Tech } from './Tech';
import { Paragraphs } from './Paragraphs';
import { Box } from './Box';
import { useTimeoutRef } from '@hooks/useTimeoutRef';
import { useContext } from '@state/Context';
import { TPrevs } from '..';

export const DEBOUNCE = 600;
export const DEBOUNCE_EXIT = 200;

export type TUpdatePrevsConfig = {
  index: number;
  value: number | null;
};

type TProps = TSlugProps & {
  index: number;
  isLast: boolean;
  prevs: TPrevs;
  onUpdatePrevs(config: TUpdatePrevsConfig): void;
};
export const Item: FC<TProps> = ({
  slug,
  isLast,
  index,
  prevs,
  onUpdatePrevs,
}) => {
  const { isScrolling, scrollY } = useContext();
  const { timeoutRef, endTimeout } = useTimeoutRef();
  const { isHover, ...handlers } = useHoverKey(
    'project',
    slug,
  );
  const item = PROJECT_ITEMS_RECORD[slug];
  const handleLoadMedia = useMediaFromKey();
  const handleHoverStart = ({ target }: MouseEvent) => {
    endTimeout();
    handleLoadMedia(slug);
    if (!handlers.onHoverStart || isScrolling || !target)
      return;
    const element = target as HTMLLIElement;
    const currScrollY = scrollY.get();

    timeoutRef.current = setTimeout(() => {
      handlers.onHoverStart();
      timeoutRef.current = setTimeout(() => {
        console.log('PREVS ' + prevs);
        const prev = prevs.find(
          (v, prevIndex) =>
            typeof v === 'number' && prevIndex < index,
        );
        const rect = element.getBoundingClientRect();
        const curr = rect.height;

        if (typeof prev === 'number') {
          const diff = curr - prev;
          const nextScrollY = currScrollY + diff;
          window.scrollTo(0, nextScrollY);
          scrollY.set(nextScrollY);
        }
      }, 0);
    }, DEBOUNCE);
  };
  const handleHoverEnd = ({ target }: MouseEvent) => {
    endTimeout();
    if (!handlers.onHoverEnd || isScrolling || !target)
      return;
    const element = target as HTMLLIElement;
    const rect = element.getBoundingClientRect();

    const parentElement =
      element.parentElement as HTMLUListElement;
    const parentRect =
      parentElement.getBoundingClientRect();
    const topOffset = rect.y - parentRect.y;
    const value = topOffset + rect.height;

    onUpdatePrevs({ index, value });

    timeoutRef.current = setTimeout(() => {
      handlers.onHoverEnd();
      onUpdatePrevs({ index, value: null });
    }, DEBOUNCE_EXIT);
  };
  const handleOnSound = useOnSound();

  return (
    <>
      <motion.li
        layout={isHover ? 'size' : undefined}
        onClick={handleOnSound}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        {...PARENT_GLOW_PROPS}
      >
        <Content
          {...item}
          onTap={
            isHover ? handleHoverEnd : handleHoverStart
          }
        >
          <Time time={item.time} />
        </Content>
        <AnimatePresence>
          {isHover && (
            <>
              <Space2 />
              <Box exitDelay={0.28}>
                <Buttons {...item} />
              </Box>
              <Space2 />
              <Box delay={0.28}>
                {item.paragraphs && (
                  <Paragraphs
                    paragraphs={item.paragraphs}
                  />
                )}
                {item.tags && (
                  <>
                    <Space3 />
                    <Tech tags={item.tags} />
                  </>
                )}
              </Box>
            </>
          )}
        </AnimatePresence>
      </motion.li>
      {!isLast && <Space2 />}
    </>
  );
};

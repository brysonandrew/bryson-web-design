import { TSlugProps } from '@pages/projects/config';
import { motion } from 'framer-motion';
import {
  useRef,
  type FC,
  useEffect,
  useState,
} from 'react';
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
import { useCurrProject } from '@hooks/params/useCurrProject';
import {
  PROJECT_CURSOR_KEY,
  resolveCursorKeyFromHoverKey,
} from '@components/select/config';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { Details } from './details';
import { Space2 } from '@components/spaces/Space2';

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

  const [isExpanded, setExpanded] = useState(false);

  const handleLayoutAnimationComplete = () => {
    setExpanded(isHover);
  };

  const handleClick = () => {
    handleOnSound();
  };

  return (
    <Root
      className='py-3 w-full'
      style={{ zIndex: index }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Link
        to={to}
        onClick={handleClick}
        {...resolveInteractiveLabels(item.title)}
      >
        {/* <motion.div
          layout='position'
          className='relative left-0 top-5 w-full h-10 bg-teal blur-lg'
          style={{ y: '-50%' }}
        /> */}
        <Content
          slug={item.slug}
          isHover={isHover}
          rightHeader={<Time time={item.time} />}
          onLayoutAnimationComplete={
            handleLayoutAnimationComplete
          } 
        >
          {isHover && (
            <>
              <Space2 />
              <Details isVisible={isExpanded} {...item} />
            </>
          )}
        </Content>
      </Link>
    </Root>
  );
};

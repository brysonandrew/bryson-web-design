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
import { Space3 } from '@components/spaces/Space3';
import { Buttons } from './Buttons';
import { Tech } from './Tech';
import { Paragraphs } from './Paragraphs';
import { Box } from './Box';

type TProps = TSlugProps & {
  isLast: boolean;
};
export const Item: FC<TProps> = ({ slug, isLast }) => {
  const { isHover, ...handlers } = useHoverKey('project', slug);
  const item = PROJECT_ITEMS_RECORD[slug];
  const handleLoadMedia = useMediaFromKey();
  const handleHoverStart = () => {
    handleLoadMedia(slug);
    if (!handlers.onHoverStart) return;
    handlers.onHoverStart();
  };
  const handleOnSound = useOnSound();

  return (
    <>
      <motion.li
        layout='size'
        {...handlers}
        onClick={handleOnSound}
        onHoverStart={handleHoverStart}
        {...PARENT_GLOW_PROPS}
        transition={{ duration: 1, delay: 0 }}
      >
        <Content {...item}>
          <Time time={item.time} />
        </Content>
        {isHover && (
          <>
            <Space2 />
            <Box>
              <Buttons {...item} />
            </Box>
            <Space2 />
            <Box delay={0.28}>
              {item.paragraphs && (
                <Paragraphs paragraphs={item.paragraphs} />
              )}
              {item.tags && (
                <>
                  <Space3 />
                  <Tech tags={item.tags} />
                </>
              )} 
            </Box>
            <Space2 />
          </>
        )}
      </motion.li>
      {!isLast && !isHover && <Space2 />}
    </>
  );
};

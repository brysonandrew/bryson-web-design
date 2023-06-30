import { MOTION_CONFIG } from '@constants/animation';
import styled from '@emotion/styled';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { HOVER_BLUE_OUTER_GLOW_PROPS_SM } from '@pages/index/constants';
import {
  IMG_KEY,
  SELECTED_KEY,
} from '@pages/showcase/config';
import { Container } from '@pages/showcase/full/Container';
import type { TItem } from '@t/showcase';
import { titleToKebab } from '@utils/format';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as InternalLink } from 'react-router-dom';
import { Text } from './Text';
import { Mark } from './Mark';

const Root = styled(motion.li)``;
type TProps = TItem & {
  selectedPath: string | null;
};
export const Item: FC<TProps> = (props) => {
  const { title, selectedPath, altTo } = props;
  const key = titleToKebab(title);
  const handleOnSound = useOnSound();

  return (
    <Root
      className='flex relative'
      {...HOVER_BLUE_OUTER_GLOW_PROPS_SM}
    >
      <InternalLink
        to={
          altTo
            ? altTo
            : `/showcase?${SELECTED_KEY}=${key}&${IMG_KEY}=${1}`
        }
        onClick={handleOnSound}
        className='relative w-full bg-black-dark h-24 lg:h-16'
      >
        <Container
          layoutId={key}
          classValue='absolute flex items-center justify-between text-lg w-full'
        >
          <AnimatePresence>
            {selectedPath !== key && (
              <motion.div
                key='SELECTED_ITEM_TEXT_KEY'
                className='relative flex flex-col justify-between w-full md:flex-row md:items-center px-3 py-1'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    ...MOTION_CONFIG,
                    delay:
                      MOTION_CONFIG.transition.duration,
                  },
                }}
                exit={{ opacity: 0 }}
              >
                <Text {...props} />
              </motion.div>
            )}
          </AnimatePresence>
        <Mark colorKey='baby-blue' />

        </Container>

      </InternalLink>
    </Root>
  );
};

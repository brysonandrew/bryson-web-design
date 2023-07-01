import { MOTION_CONFIG } from '@constants/animation';
import { Fill } from '@components/metal/Fill';
import styled from '@emotion/styled';
import { useOnSound } from '@hooks/sounds/useOnSound';
import {
  IMG_KEY,
  SELECTED_KEY,
} from '@pages/showcase/config';
import { Container } from '@pages/showcase/full/Container';
import type { TItem } from '@t/showcase';
import { titleToKebab } from '@utils/format';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import {
  Link as InternalLink,
  useLocation,
} from 'react-router-dom';
import { Mark, resolveLayoutId } from '../../Mark';
import { Content } from './content';

const Root = styled(motion.li)``;
type TProps = TItem & {
  selectedPath: string | null;
};
export const Item: FC<TProps> = (props) => {
  const { title, selectedPath, altTo } = props;
  const { pathname } = useLocation();
  const key = titleToKebab(title);
  const handleOnSound = useOnSound();

  return (
    <Root
      className='flex relative shadow-white-02-sm'
      initial={false}
      animate='animate'
      whileHover='hover'
    >
      <InternalLink
        to={
          altTo
            ? altTo
            : `${pathname}?${SELECTED_KEY}=${key}&${IMG_KEY}=${1}`
        }
        onClick={handleOnSound}
        className='relative w-full bg-black-dark h-24 lg:h-16'
      >
        <Container
          layoutId={key}
          classValue='absolute flex items-center justify-between text-lg w-full pl-4'
        >
          <Fill />
          <Mark layoutId={resolveLayoutId(key)} />
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
                <Content {...props} />
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </InternalLink>
    </Root>
  );
};

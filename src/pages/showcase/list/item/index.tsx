import {
  DURATION_DELAY,
  MOTION_CONFIG,
  PRESENCE_OPACITY_DELAY,
} from '@constants/animation';
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
import { HOVER_TEAL_GLOW_PROPS_SM } from '@pages/index/constants';
import { resolveCompositeKey } from '@utils/keys';

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
      className='flex relative shadow-teal-02-sm'
      {...HOVER_TEAL_GLOW_PROPS_SM}
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
          classValue='absolute flex items-center justify-between text-lg w-full'
        >
          <Fill />
          <Mark layoutId={resolveLayoutId(key)} />
          <AnimatePresence>
            {selectedPath !== key && (
              <motion.div
                key={resolveCompositeKey(
                  'SELECTED_ITEM_TEXT_KEY',
                  key,
                )}
                className='relative flex flex-col justify-between w-full md:flex-row md:items-center px-3 py-1'
                {...PRESENCE_OPACITY_DELAY}
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

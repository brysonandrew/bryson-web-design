import type { FC } from 'react';
import { Time } from './Time';
import { Header } from './Header';
import {
  CONTENT_HEIGHT_CLASS,
  TSlugProps,
  resolveTitleLayoutId,
} from '@pages/showcase/config';
import { FillDark } from '@components/metal/FillDark';
import { HOVER_TEAL_GLOW_PROPS_SM } from '@pages/index/constants';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import clsx from 'clsx';

const Root = styled(motion.div)``;

type TProps = TSlugProps & {
  time?: Date;
} & HTMLMotionProps<'div'>;
export const Content: FC<TProps> = ({
  slug,
  time,
  ...props
}) => (
  <Root
    className={clsx(
      'relative flex items-center justify-between w-full pr-4 shadow-teal-02-sm z-20',
      CONTENT_HEIGHT_CLASS,
    )}
    layoutId={resolveTitleLayoutId(slug)}
    {...HOVER_TEAL_GLOW_PROPS_SM}
    {...props}
  >
    <FillDark key='FillDark' />
    <Header slug={slug} />
    <Time time={time} />
  </Root>
);

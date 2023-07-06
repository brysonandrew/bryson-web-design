import type { FC } from 'react';
import { Header } from './Header';
import {
  TSlugProps,
  resolveTitleLayoutId,
} from '@pages/showcase/config';
import { FillDark } from '@components/metal/FillDark';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import clsx from 'clsx';
import { Mark } from './Mark';
import {
  DELAY_VISIBILITY,
  resolveTealGlow,
} from '@pages/index/constants';

const CLASSNAME =
  'relative w-full pl-6 pr-4 md:pl-8 md:pr-6 py-4 z-20';

const Root = styled(motion.div)``;

type TProps = TSlugProps &
  HTMLMotionProps<'div'> & {
    isHeader?: boolean;
  };
export const Content: FC<TProps> = ({
  slug,
  isHeader,
  children,
  ...props
}) => (
  <Root
    layoutId={resolveTitleLayoutId(slug)}
    {...(isHeader
      ? { className: CLASSNAME }
      : resolveTealGlow({
          partial: { outerGlow: 0 },
          classValue: clsx(CLASSNAME),
        }))}
    {...props}
  >
    <FillDark key='FillDark' />
    <Mark />
    <motion.div
      className='flex items-center justify-between'
      {...DELAY_VISIBILITY}
    >
      <div className='flex items-center'>
        <Header slug={slug} />
      </div>
      <div className='p-2' />
      <>{children}</>
    </motion.div>
  </Root>
);

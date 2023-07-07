import type { FC } from 'react';
import { Header } from './Header';
import {
  TSlugProps,
  resolveTitleLayoutId,
} from '@pages/projects/config';
import { MetalDark } from '@components/metal/MetalDark';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Mark } from './Mark';
import { DELAY_VISIBILITY } from '@constants/animation';
import { Glow } from '@components/glow';

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
    className='relative w-full pl-6 pr-4 md:pl-8 md:pr-6 py-4 z-20'
    {...props}
  >
    <MetalDark key='FillDark' />
    {!isHeader && <Glow />}
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

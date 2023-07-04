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
    className={clsx(
      'relative flex items-center justify-between w-full pl-6 pr-4 py-4 z-20',
      [!isHeader && 'shadow-teal-02-sm']
    )}
    layoutId={resolveTitleLayoutId(slug)}
    {...props}
  >
    <FillDark key='FillDark' />
    <div className='flex items-center'>
      <Mark />
      <Header slug={slug} />
    </div>
    <div className='p-2' />
    <>{children}</>
  </Root>
);

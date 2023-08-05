import type { FC } from 'react';
import clsx from 'clsx';
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
import { TClassValueProps } from '@t/index';

const Root = styled(motion.div)``;

type TProps = TSlugProps &
  TClassValueProps &
  HTMLMotionProps<'div'> & {
    isHeader?: boolean;
  };
export const Content: FC<TProps> = ({
  slug,
  isHeader,
  classValue,
  children,
  ...props
}) => {
  const metal = <MetalDark key='FillDark' />;
  return (
    <Root
      layoutId={resolveTitleLayoutId(slug)}
      className={clsx(
        'relative w-full pl-6 pr-4 md:pl-8 md:pr-6 py-4 z-20',
        [!isHeader && 'glow-interactive'],
        classValue,
      )}
      {...props}
    >
      {isHeader ? (
        metal
      ) : (
        <Glow text={1} drop={2} color='teal'>
          {metal}
        </Glow>
      )}
      <Mark />
      <motion.div
        className='row-space'
        {...DELAY_VISIBILITY}
      >
        <Header slug={slug} />
        <div className='p-2' />
        <>{children}</>
      </motion.div>
    </Root>
  );
};

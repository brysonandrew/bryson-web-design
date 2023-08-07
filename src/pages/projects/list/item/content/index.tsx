import type { FC } from 'react';
import clsx from 'clsx';
import { Header } from './Header';
import {
  TSlugProps,
  resolveTitleLayoutId,
} from '@pages/projects/config';
import { MetalDark } from '@components/metal/MetalDark';
import styled from '@emotion/styled';
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { DELAY_VISIBILITY } from '@constants/animation';
import { Glow } from '@components/filter-animate/Glow';
import { TClassValueProps } from '@t/index';
import { Mark } from '@components/mark';
import { Details } from '../details';

const Root = styled(motion.div)``;

type TProps = TSlugProps &
  TClassValueProps &
  HTMLMotionProps<'div'> & {
    isHover?: boolean;
    isOtherHover?: boolean;
    isHeader?: boolean;
  };
export const Content: FC<TProps> = ({
  isHover,
  slug,
  isHeader,
  classValue,
  children,
  style,
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
      {isHover && <Details {...props} />}
    </Root>
  );
};

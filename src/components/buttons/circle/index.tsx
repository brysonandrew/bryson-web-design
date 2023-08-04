import { Glow } from '@components/glow';
import { Metal } from '@components/metal';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import styled from '@emotion/styled';
import { TChildrenProps, TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const SHARED_CLASS = 'rounded-full';

const Root = styled(motion.div)``;

type TProps = TClassValueProps & TChildrenProps;
export const Circle: FC<TProps> = ({
  classValue,
  children,
}) => {
  return (
    <Root
      className={clsx(
        'relative center glow-interactive w-10 h-10',
        SHARED_CLASS,
        classValue,
      )}
      {...PARENT_GLOW_PROPS}
    >
      <Glow classValue={SHARED_CLASS} drop={0.5}>
        <Metal classValue={SHARED_CLASS} />
      </Glow>
      <>{children}</>
    </Root>
  );
};

import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { resolveUrlId } from '@brysonandrew/utils/attributes/resolveUrlId';
import { TDivMotionProps } from '@brysonandrew/types/dom/motion';
import { AURA_ID } from '.';
import { TClassValueProps } from '@brysonandrew/types/dom';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps & TClassValueProps;
export const Target: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => {
  return (
    <Root
      style={{
        filter: resolveUrlId(AURA_ID),
        ...style,
      }}
      className={clsx(
        'absolute mt-1.5 ml-1 pointer-events-none cursor-default',
        'bg-accent-04 -inset-1',
        classValue,
      )}
      {...props}
    />
  );
};

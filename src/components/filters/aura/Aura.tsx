import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { resolveUrlId } from '@utils/attributes/resolveUrlId';
import { TClassValueProps } from '@t/index';
import { TMotionDivProps } from '@t/dom';
import { AURA_ID } from './Filter';

const Root = styled(motion.div)``;

type TProps = TMotionDivProps & TClassValueProps;
export const Aura: FC<TProps> = ({
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
        'absolute mt-1.5 ml-1 rounded-sm pointer-events-none cursor-default',
        classValue ?? 'bg-baby-blue-04 -inset-2',
      )}
      {...props}
    />
  );
};

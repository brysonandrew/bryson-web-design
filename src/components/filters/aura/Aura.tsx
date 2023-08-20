import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { resolveUrlId } from '@utils/attributes/resolveUrlId';
import { TClassValueProps } from '@t/index';
import { TMotionDivProps } from '@t/dom';
import { AURA_ID } from './Filter';

const SELECT_LAYOUT_ID = 'SELECT_LAYOUT_ID';

const Root = styled(motion.div)``;

type TProps = TMotionDivProps & TClassValueProps;
export const Aura: FC<TProps> = ({
  classValue,
  ...props
}) => {
  return (
    <Root
      layoutId={SELECT_LAYOUT_ID}
      style={{
        filter: resolveUrlId(AURA_ID),
      }}
      className={clsx(
        'absolute mt-1.5 ml-1 pointer-events-none rounded-sm cursor-default',
        classValue ?? 'bg-baby-blue-04 -inset-1',
      )}
      {...props}
    />
  );
};

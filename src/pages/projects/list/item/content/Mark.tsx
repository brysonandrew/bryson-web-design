import styled from '@emotion/styled';
import { TEAL_GLOW } from '@constants/colors';
import { resolveCompositeKey } from '@utils/keys';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';

export const resolveMarkLayoutId = (key: string) =>
  resolveCompositeKey('MARK', key);

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'>;
export const Mark: FC<TProps> = (props) => (
  <Root
    className={clsx(
      'absolute top-0 bottom-0 left-0 h-full w-2.5 bg-teal pointer-events-none',
    )}
    {...TEAL_GLOW}
    {...props}
  />
);

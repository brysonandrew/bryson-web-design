import { HTMLMotionProps } from 'framer-motion';
import type { FC } from 'react';
import { Highlight } from '@components/highlight';

type TProps = HTMLMotionProps<'div'>;
export const Mark: FC<TProps> = (props) => (
  <Highlight {...props} />
);

import type { ComponentElement, FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { PRESENCE_OPACITY_DELAY } from '@brysonandrew/motion-config-constants';
import { TUlMotionProps } from '@brysonandrew/config-types';

const Root = styled(motion.ul)``;

type TResolver = () => ComponentElement<any, any>;
type TProps = TUlMotionProps & {
  resolvers: TResolver[];
  isInline?: boolean;
};
export const Row: FC<TProps> = ({
  resolvers,
  isInline,
  ...props
}) => {
  return (
    <Root
      className={clsx('row gap-4', !isInline && 'w-full')}
      layout
      {...props}
    >
      {resolvers.map((resolver, index) => {
        const rendered = resolver();
        return (
          <motion.li
            layout
            key={rendered.key ?? `${index}`}
            style={{ fontSize: '0.9rem' }}
            {...PRESENCE_OPACITY_DELAY}
          >
            {rendered}
          </motion.li>
        );
      })}
    </Root>
  );
};

import { type FC } from 'react';
import {
  motion,
  type HTMLMotionProps,
} from 'framer-motion';
import { Link as _Link } from 'react-router-dom';
import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import {
  GLOW_BOX_SHADOW,
  PARENT_GLOW_PROPS,
} from '@constants/colors';
import clsx from 'clsx';
import { Inner } from './Inner';

const Root = styled(motion.div)``;

const Link = styled(motion(_Link))``;

type TProps = HTMLMotionProps<'div'> & {
  to: string;
  children: TChildren;
};
export const MenuLink: FC<TProps> = ({
  to,
  children,
  ...props
}) => {
  return (
    <Root
      style={{ x: '12px' }}
      {...PARENT_GLOW_PROPS}
      {...props}
    >
      <Link className={clsx("flex", GLOW_BOX_SHADOW)} to={to}>
        <Inner>{children}</Inner>
      </Link>
    </Root>
  );
};

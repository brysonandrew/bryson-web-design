import { type FC } from 'react';
import {
  motion,
  type HTMLMotionProps,
} from 'framer-motion';
import { Link as _Link } from 'react-router-dom';
import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { PARENT_GLOW_PROPS } from '@utils/effects/glow';
import { Inner } from './Inner';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';

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
      <Link
        className={'flex glow-interactive'}
        to={to}
        {...resolveInteractiveLabels(`Go to ${children}`)}
      >
        <Inner>{children}</Inner>
      </Link>
    </Root>
  );
};

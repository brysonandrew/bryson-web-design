import { type FC } from 'react';
import {
  motion,
  type HTMLMotionProps,
} from 'framer-motion';
import { Fill } from '@components/metal/Fill';
import { Link as _Link } from 'react-router-dom';
import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { INTERACTIVE_PROPS } from './constants';
import { TextXl } from '@components/text/TextXl';

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
    <Root {...props} style={{ x: '12px' }}>
      <Link to={to} {...INTERACTIVE_PROPS}>
        <Fill inset={2} />
        <TextXl>{children}</TextXl>
      </Link>
    </Root>
  );
};

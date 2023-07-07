import { type FC } from 'react';
import {
  motion,
  type HTMLMotionProps,
} from 'framer-motion';
import { Metal } from '@components/metal';
import { Link as _Link } from 'react-router-dom';
import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { INTERACTIVE_PROPS } from './constants';
import { TextXl } from '@components/text/TextXl';
import { Glow } from '@components/glow';
import { PARENT_HOVER_GLOW_PROPS } from '@constants/colors';

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
      {...props}
      style={{ x: '12px' }}
      {...PARENT_HOVER_GLOW_PROPS}
    >
      <Link to={to} {...INTERACTIVE_PROPS}>
        <Glow />
        <Metal />
        <TextXl>{children}</TextXl>
      </Link>
    </Root>
  );
};

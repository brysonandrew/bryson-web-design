import styled from '@emotion/styled';
import clsx from 'clsx';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TLinkMotionProps } from '@brysonandrew/config-types/dom/motion';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes/resolveInteractiveLabels';

const Link = styled(motion(_Link))``;

export type TLinkFillCenterProps = TLinkMotionProps;
export const LinkFillCenter: FC<TLinkFillCenterProps> = ({
  to,
  children,
  classValue,
  title,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={clsx('fill center cursor-pointer')}
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      {children}
    </Link>
  );
};

import styled from '@emotion/styled';
import clsx from 'clsx';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TClassValueProps } from '@brysonandrew/lib/types/dom';
import { TLinkMotionProps } from '@brysonandrew/lib/types/dom/motion';
import { resolveInteractiveLabels } from '@brysonandrew/lib/utils/attributes/resolveInteractiveLabels';

const Link = styled(motion(_Link))``;

export type TProps = TLinkMotionProps & TClassValueProps;
export const LinkFillCenter: FC<TProps> = ({
  to,
  children,
  classValue,
  title,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={clsx(
        'absolute inset-0 center cursor-pointer',
      )}
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      {children}
    </Link>
  );
};

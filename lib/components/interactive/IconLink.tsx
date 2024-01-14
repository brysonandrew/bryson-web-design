import styled from '@emotion/styled';
import clsx from 'clsx';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TIconComponent } from '@lib/types/dom/icon';
import { TClassValueProps, TTitleProps } from '@lib/types/dom';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';

const Link = styled(motion(_Link))``;

export type TProps = TClassValueProps &
  TTitleProps & {
    onClick(): any;
    to: string;
    Icon: TIconComponent;
  };
export const IconLink: FC<TProps> = ({
  Icon,
  classValue,
  title,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        'absolute inset-0 center cursor-pointer z-10',
      )}
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <Icon />
    </Link>
  );
};

import styled from '@emotion/styled';
import clsx from 'clsx';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TIconComponent } from '@t/icons';
import { TClassValueProps, TTitleProps } from '@t/index';

const Link = styled(motion(_Link))``;

export type TButtonProps = TClassValueProps & TTitleProps & {
  onClick(): any;
  to: string;
  Icon: TIconComponent;
};
export const Button: FC<TButtonProps> = ({
  Icon,
  classValue,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        'absolute inset-0 center cursor-pointer z-10',
      )}
      {...props}
    >
      <Icon />
    </Link>
  );
};
